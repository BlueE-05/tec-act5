'use client'

import { usePeopleApi } from "@/hooks/usePersonApi";
import { useEffect, useState } from "react";
import InfoDisplay from "@/components/InfoDisplay";
import HistoryDisplay from "@/components/HistoryDisplay";
import { Person } from "@/types/person";
import { LoaderCircle } from "lucide-react";

export default function PeoplePage() {
  const { currentPerson, personHistory, loading, error, fetchData } = usePeopleApi();
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    if (currentPerson) {
      setSelectedPerson(currentPerson);
    }
  }, [currentPerson]);

  return (
    <main className="bg-gray-100 flex flex-row items-stretch p-10 min-h-screen h-screen gap-6 relative">
      {/* Columna izquierda con historial */}
      <div className="w-1/4 h-full flex flex-col overflow-y-auto">
        <HistoryDisplay people={personHistory} onSelect={setSelectedPerson} />
      </div>

      {/* Botón */}
      <div className="absolute top-4 right-5 flex justify-center items-center gap-6">
        {loading && <LoaderCircle className="animate-spin"/>}
        <button onClick={fetchData} disabled={loading} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">Get New Person</button>
      </div>

      {/* Display de información a la derecha */}
      <div className="w-3/4 h-full flex flex-col items-center justify-center">
        {error && <p className="text-red-500">Error: {error}</p>}
        {selectedPerson && <InfoDisplay person={selectedPerson} />}
      </div>
    </main>
  );
}