import { Champion } from "@/types/Champion";
import { getChampions, getRecentApiVersion } from "@/utils/api";
import Image from "next/image";
import { useEffect } from "react";
import ChampionCard from "../../components/ChampionCard";

export const revalidate = 86400;

// Rendering mode : ISR
export default async function Champions() {
  const responce = await getChampions();
  const champions = Object.values(responce);
  const apiVersion = await getRecentApiVersion();
  return (
    <div>
      <h2 className="text-3xl font-bold my-10 text-center">챔피언 목록</h2>
      <div className="grid grid-cols-10 gap-4 w-full">
        {champions.map((champion) => {
          return <ChampionCard champion={champion} key={champion.id} apiVersion = {apiVersion}></ChampionCard>;
        })}
      </div>
    </div>
  );
}
