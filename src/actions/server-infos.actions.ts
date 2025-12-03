'use server'

import { ServerSummary, PSOGame } from "../types/server-summary";

export async function getServerInfos(): Promise<ServerSummary|null> {
    const apiUrl = `${process.env.NEWSERV_API_URL}:${process.env.NEWSERV_API_PORT}/y/summary`;

    try {
        const res = await fetch(apiUrl, { cache: "no-store" });
        const json = await res.json();

        return {
            ...json,
            Games: json.Games?.map((g: any): PSOGame => {
                const questName =
                    g.Quest?.Versions?.find(
                        (v: any) => v.Language === process.env.PSO_LANGUAGE && v.Version === process.env.PSO_VERSION // If this ever changes, I'll cry
                    )?.Name ??
                    g.Quest?.Versions?.find(
                        (v: any) => v.Language === process.env.PSO_LANGUAGE
                    )?.Name ??
                    g.Quest?.Versions?.[0]?.Name ?? // Fallback, hopefully we never get here
                    "Unknown quest";

                return {
                    ...g,
                    Name: String(g.Name.substring(2)),
                    Quest: questName,
                };
            }) ?? [],
        };
    } catch(e: any) {
        return null;
    }
    
   
}