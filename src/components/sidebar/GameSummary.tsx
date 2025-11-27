'use client'

import { PSOClient, PSOGame } from "@/src/types/server-summary";
import React, { useState } from "react";
import SectionID from "../SectionID";
import ClassIcon from "../ClassIcons";
import { ChevronDown, ChevronUp, LockKeyhole } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface GameSummaryProps {
    game: PSOGame
    party: PSOClient[]
}

const GameSummary: React.FC<GameSummaryProps> = ({game, party}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="bg-gray-200 px-1">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex justify-between cursor-pointer"
            >
                <div className="flex gap-2 items-center">
                    {game.HasPassword && (
                        <LockKeyhole size={16}/>
                    )}
                    <p>{game.Name}</p>
                    <p>{game.Players}/4</p>
                </div>
                <div>{open ? <ChevronUp/>  : <ChevronDown/>}</div>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-1 overflow-hidden"
                    >
                        <div className="flex gap-x-2">
                            <SectionID id={game.SectionID} size={20}/>
                            <p>{game.Difficulty}</p>
                        </div>
                        <div>
                            <p className="text-center">{game.QuestInProgress && game.Quest}</p>
                        </div>

                        {party.map(c => (
                            <div key={c.ID} className="flex justify-between items-center">
                                <p>{c.Name} - Lv{c.Level}</p>
                                <ClassIcon character={c.Class}/>
                            </div>
                            
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default GameSummary;