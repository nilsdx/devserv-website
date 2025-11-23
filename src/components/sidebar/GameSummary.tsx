'use client'

import { PSOClient, PSOGame } from "@/src/types/server-summary";
import React, { useState } from "react";

interface GameSummaryProps {
    game: PSOGame
    party: PSOClient[]
}

const GameSummary: React.FC<GameSummaryProps> = ({game, party}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="border border-white">
            <button
                onClick={() => setOpen(o => !o)}
                className="text-left w-full"
            >
                {game.Name}
            </button>

            {open && (
                <div className="mt-1">
                    <p>{game.QuestInProgress ? game.Quest : "*Free roam"}</p>

                    {party.map(c => (
                        <p key={c.ID}>{c.Name} - Lv{c.Level}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default GameSummary;