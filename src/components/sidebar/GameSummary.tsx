'use client'

import { PSOClient, PSOGame } from "@/src/types/server-summary";
import React, { useState } from "react";
import SectionID from "../SectionID";
import ClassIcon from "../ClassIcons";

interface GameSummaryProps {
    game: PSOGame
    party: PSOClient[]
}

const GameSummary: React.FC<GameSummaryProps> = ({game, party}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="border border-black px-1">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex justify-between"
            >
                <div className="flex gap-2">
                    <p>{game.Name}</p>
                    <p>{game.Players}/4</p>
                </div>
                <div>{open ? 'v' : '>'}</div>
            </button>

            {open && (
                <div className="mt-1">
                    <div className="flex gap-x-2">
                        <SectionID id={game.SectionID} size={20}/>
                        <p>{game.Difficulty}</p>
                    </div>
                    <div>
                        <p className="text-center">{game.QuestInProgress && game.Quest}</p>
                    </div>

                    {party.map(c => (
                        <div key={c.ID} className="flex justify-between">
                            <p>{c.Name} - Lv{c.Level}</p>
                            <ClassIcon character={c.Class} size={80}/>
                        </div>
                        
                    ))}
                </div>
            )}
        </div>
    )
}

export default GameSummary;