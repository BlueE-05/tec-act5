'use client';

import { useState } from "react";
import { Person } from "@/types/person";
import { User, Phone, Mail, Cake, MapPinned, Key } from "lucide-react";

const InfoDisplay = ({ person }: { person: Person }) => {
    const [infoType, setInfoType] = useState<keyof typeof infoMap>("name");

    const infoMap: Record<string, { message: string[]; value: (string | number)[] }> = {
        name: { message: ["Hi, my name is"], value: [person.name] },
        birthday: { message: ["My Birthday is on", "My age is"], value: [person.birthday, person.age] },
        email: { message: ["My e-mail is"], value: [person.email] },
        address: { message: ["My address is"], value: [person.address] },
        phone: { message: ["My phone number is"], value: [person.phone] },
        userName: { message: ["My username is", "My password is"], value: [person.userName, person.password] },
    };

    return (
        <div className="bg-white shadow-xl border-dashed border-2 border-stone-100 rounded-xl flex flex-col items-center justify-between p-8 w-[75%] h-[75%] mx-auto my-auto">
            {/* Imagen */}
            <img src={person.profile_pic} alt="Profile" className="w-42 h-42 rounded-full mb-6 -mt-16 border-8 border-white mx-auto" />

            {/* Mensaje descriptivo */}
            {infoMap[infoType].message.map((msg, index) => (
                <div key={index} className="flex flex-col justify-center items-center gap-6 mb-5 w-full">
                    <p className="font-bold text-stone-500">{msg}</p>
                    <p className="font-bold text-stone-900 text-6xl break-words max-w-[90%]">{infoMap[infoType].value[index]}</p>
                </div>
            ))}

            {/* Botones */}
            <div className="p-6 w-full flex gap-10 justify-center items-center mt-auto">
                <button onClick={() => setInfoType("name")} className="hover:animate-bounce"><User className="w-15 h-15" /></button>
                <button onClick={() => setInfoType("phone")} className="hover:animate-bounce"><Phone className="w-15 h-15" /></button>
                <button onClick={() => setInfoType("email")} className="hover:animate-bounce"><Mail className="w-15 h-15" /></button>
                <button onClick={() => setInfoType("birthday")} className="hover:animate-bounce"><Cake className="w-15 h-15" /></button>
                <button onClick={() => setInfoType("address")} className="hover:animate-bounce"><MapPinned className="w-15 h-15" /></button>
                <button onClick={() => setInfoType("userName")} className="hover:animate-bounce"><Key className="w-15 h-15" /></button>
            </div>
        </div>
    );
};

export default InfoDisplay;