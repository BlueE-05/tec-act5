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

  {/* Rebote de los círculos */}
  interface Circle {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
  }

  const [circles, setCircles] = useState<Circle[]>([
    { x: 50, y: 50, directionX: 1, directionY: 1 },
    { x: 200, y: 100, directionX: -1, directionY: 1 },
    { x: 400, y: 150, directionX: 1, directionY: -1 },
  ]);

  useEffect(() => {
    const moveCircles = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let newX = circle.x + 1 * circle.directionX;
          let newY = circle.y + 1 * circle.directionY;

          // Rebote en el eje X
          if (newX >= window.innerWidth - 80 || newX <= 0) {
            circle.directionX = -circle.directionX;
          }

          // Rebote en el eje Y
          if (newY >= window.innerHeight - 50 || newY <= 0) {
            circle.directionY = -circle.directionY;
          }

          return { ...circle, x: newX, y: newY };
        })
      );
    };

    const interval = setInterval(moveCircles, 30); // Mueve cada 30ms

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <main className="bg-gray-100 flex flex-row items-stretch p-10 min-h-screen h-screen gap-6 relative">
      {/* Circulos de fondo */}
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{ position: 'absolute', top: circle.y, left: circle.x,}}
          className='bg-red-900 rounded-full w-100 h-100 blur-3xl'
        />
      ))}
      
      {/* Columna izquierda con historial */}
      <div className="w-1/4 h-full flex flex-col overflow-y-auto">
        <HistoryDisplay people={personHistory} onSelect={setSelectedPerson} />
      </div>

      {/* Botón */}
      <div className="absolute top-4 right-5 flex justify-center items-center gap-6">
        {loading && <LoaderCircle className="animate-spin text-red-700"/>}
        <button onClick={fetchData} disabled={loading} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-900 disabled:bg-gray-400">Get New Person</button>
      </div>

      {/* Display de información a la derecha */}
      <div className="w-3/4 h-full flex flex-col items-center justify-center">
        {error && <p className="text-red-500">Error: {error}</p>}
        {selectedPerson && <InfoDisplay person={selectedPerson} />}
      </div>
    </main>
  );
}