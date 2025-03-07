'use client'
import { useState } from "react";
import { Person } from "@/types/person";

import { User, Phone, Mail, Cake, MapPinned, ShieldUser } from "lucide-react";


const InfoDisplay = ({ person }: { person: Person }) => {
    const [infoType, setInfoType] = useState<string>("name");

    const infoMap: Record<string, string | number> = {
        name: person.name,
        age: person.age,
        email: person.email,
        address: person.address,
        userName: person.userName,
        phone: person.phone,
    };

    return (
        <div className="bg-white shadow-xl border-dashed border-2 border-stone-100 rounded-xl flex flex-col items-center justify-between p-8 w-[75%] h-[75%] mx-auto my-auto">
            {/* Imagen */}
            <img src={person.profile_pic} alt="Profile" className="w-42 h-42 rounded-full mb-6 -mt-16 border-8 border-white mx-auto" />
            
            {/* Texto */}
            <div className="text-6xl font-bold flex-grow flex items-center">{infoMap[infoType]}</div>
            
            {/* Botones */}
            <div className="p-6 w-full flex gap-20 justify-center items-center mt-auto">
                <button onClick={() => setInfoType("userName")} className="hover:animate-bounce"><User className="w-15 h-15 hover:shadow-l-md"/></button>
                <button onClick={() => setInfoType("phone")} className="hover:animate-bounce"><Phone className="w-15 h-15"/></button>
                <button onClick={() => setInfoType("email")} className="hover:animate-bounce"><Mail className="w-15 h-15"/></button>
                <button onClick={() => setInfoType("age")} className="hover:animate-bounce"><Cake className="w-15 h-15"/></button>
                <button onClick={() => setInfoType("address")} className="hover:animate-bounce"><MapPinned className="w-15 h-15"/></button>
                <button onClick={() => setInfoType("username")} className="hover:animate-bounce"><ShieldUser className="w-15 h-15"/></button>
            </div>
        </div>
    );
};

export default InfoDisplay;