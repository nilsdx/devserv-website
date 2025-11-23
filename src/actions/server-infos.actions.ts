'use server'

import { ServerSummary, PSOGame } from "../types/server-summary";

export async function getServerInfos(): Promise<ServerSummary> {
  const apiUrl = `${process.env.NEWSERV_API_URL}:${process.env.NEWSERV_API_PORT}/y/summary`;

  const res = await fetch(apiUrl, { cache: "no-store" });
  const json = await res.json();

  return {
    ...json,
    Games: json.Games?.map((g: any): PSOGame => ({
      ...g,
      // L'objet Quest est transformé en un simple number
      Name: String(g.Name.substring(2)),
      Quest: Number(g.Quest?.Metadata?.Number ?? g.Quest?.Number ?? 0),
    })) ?? [],
  };
}
