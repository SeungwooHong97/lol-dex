import { getChampion } from "@/utils/api";
import React from "react";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const champion = await getChampion(params.id);
  return {
    title: `${champion.name}`,
    description: `${champion.title}`,
  };
}

const ChampionDetailPage = async ({ params }: Props) => {
  const champion = await getChampion(params.id);

  return (
    <div className="w-svw">
      <h2 className="text-3xl font-bold my-10 text-center">{champion.name}</h2>
      <h2 className="text-3xl font-bold my-10 text-center">{champion.title}</h2>

      <div className="flex">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
          alt={"champion.name"}
          width={500}
          height={300}
          className="rounded justify-center items-center rounded p-4 shadow"
        ></Image>

        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_1.jpg`}
          alt={"champion.name"}
          width={1000}
          height={400}
          className="rounded justify-center items-center rounded p-4 shadow"
        ></Image>
      </div>

      <h1 className="text-3xl font-bold my-10 text-center text-cyan-700">{champion.lore}</h1>
    </div>
  );
};
export default ChampionDetailPage;
