import { PSOClient, PSOGame } from "@/src/types/server-summary";
import React from "react";

interface GameSummaryProps {
    game: PSOGame
    party: PSOClient[]
}

const GameSummary: React.FC<GameSummaryProps> = ({game, party}) => {
    return (
        <div>
            <p>Game name: {game.Name}</p>
            {party.map((c) => (
                <p key={c.Name}>{c.Name} - Lv{c.Level}</p>
            ))}
        </div>
    )
}

export default GameSummary;