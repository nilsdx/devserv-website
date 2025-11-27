'use server'

import { ServerSummary } from "@/src/types/server-summary";
import React from "react";

interface ServerStatusProps {
    serverInfos: ServerSummary;
}

const ServerStatus: React.FC<ServerStatusProps> = ({serverInfos}) => {

    return (
        <div>
            <p>Player Count: {serverInfos.Server.ClientCount ?? 'Unavailable'}</p>
            <p>{serverInfos.Server.GameCount > 0 ? serverInfos.Server.GameCount : 'No'} {serverInfos?.Server.GameCount > 1 ? 'games' : 'game'} active</p>
        </div>
    );
}

export default ServerStatus;