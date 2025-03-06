import ButtonsBar from "@/components/ButtonsBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center p-10 min-h-screen">
      <div className="bg-stone-200 rounded-xl h-full w-1/4">
      </div>

      <div className="flex justify-center items-center w-3/4 h-full">
        <div className="rounded-xl shadow-md">
          <ButtonsBar/>
        </div>
      </div>
    </main>
  );
}
