'use client'

import { useState } from "react";
import InfoDisplay from "@/components/InfoDisplay";
import HistoryDisplay from "@/components/HistoryDisplay";

export default function Home() {
  const people = [
    {
      profile_pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      name: "Carlos Rodríguez",
      phone: "555-666-7777",
      email: "carlos.rod@example.com",
      birthday: "1995-12-10",
      age: 29,
      address: "Boulevard Central 456, Metropolis",
      userName: "carlosrod95",
      password: "segura5678",
    },
    {
      profile_pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      name: "María López",
      phone: "987-654-3210",
      email: "maria.lopez@example.com",
      birthday: "1985-08-22",
      age: 39,
      address: "Avenida Siempreviva 742, Springfield",
      userName: "marialopez85",
      password: "clave1234",
    },
    {
      profile_pic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      name: "Juan Pérez",
      phone: "123-456-7890",
      email: "juan.perez@example.com",
      birthday: "1990-05-15",
      age: 34,
      address: "Calle Falsa 123, Ciudad Ejemplo",
      userName: "juanperez90",
      password: "supersegura123",
    },
  ]; {/*hardcodeado para pruebas*/ }

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <main className="flex flex-row items-stretch p-10 min-h-screen h-screen gap-6">
      {/* Columna izquierda con botones */}
      <div className="w-1/4 h-full flex flex-col">
        <HistoryDisplay people={people} onSelect={setSelectedPerson} />
      </div>

      {/* Display de información a la derecha */}
      <div className="w-3/4 h-full flex items-center justify-center">
        <InfoDisplay person={selectedPerson} />
      </div>
    </main>
  );
}