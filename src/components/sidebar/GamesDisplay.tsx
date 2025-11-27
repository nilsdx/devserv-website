'use server'

import { PSOClient, ServerSummary } from "@/src/types/server-summary";
import GameSummary from "./GameSummary";

interface GameDisplayProps {
    serverInfos: ServerSummary
}

const GameDisplay: React.FC<GameDisplayProps> = ({serverInfos}) => {
    const getClientsInGame = (gameID: number, clients: PSOClient[]) =>
        clients.filter(c => c.LobbyID === gameID);

    return (
        <div className="mt-2 max-h-full overflow-y-auto space-y-2 pr-2">
            {serverInfos.Games.map((g, i) => (
                <GameSummary
                    key={`game-${i}`}
                    game={g}
                    party={getClientsInGame(g.ID, serverInfos.Clients)}
                />
            ))}
        </div>
    )
}

export default GameDisplay;