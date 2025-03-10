'use client'
import { useState } from "react";
import { Person } from "@/types/person";

interface HistoryDisplayProps {
    people: Person[];
    onSelect: (person: Person) => void;
}

export default function HistoryDisplay({ people, onSelect }: HistoryDisplayProps) {
    return (
        <div className="bg-stone-200 opacity-80 flex flex-col rounded-xl flex flex-col w-full h-full space-y-0 overflow-y-auto">
            {people.map((person, index) => (
                <button key={index} className="w-full hover:bg-stone-300 transition border-b-1 border-stone-300 p-4 font-bold" onClick={() => onSelect(person)}>{person.name}</button>
            ))}
        </div>
    );
}