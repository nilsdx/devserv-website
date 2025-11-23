'use client'

import { PSOClient, PSOGame } from "@/src/types/server-summary";
import React, { useState } from "react";
import SectionID from "../SectionID";

interface GameSummaryProps {
    game: PSOGame
    party: PSOClient[]
}

const GameSummary: React.FC<GameSummaryProps> = ({game, party}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="border border-white px-1">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex justify-between"
            >
                <div>{game.Name}</div>
                <div>{open ? 'v' : '>'}</div>
            </button>

            {open && (
                <div className="mt-1">
                    <div className="flex gap-x-2">
                        <p>{game.QuestInProgress ? game.Quest : "*Free roam"}</p>
                        <SectionID id={game.SectionID}/>
                    </div>

                    {party.map(c => (
                        <p key={c.ID}>{c.Name} - Lv{c.Level}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default GameSummary;