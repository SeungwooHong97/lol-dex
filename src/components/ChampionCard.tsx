import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  apiVersion: string;
  champion: Champion;
}

export default function ChampionCard({ champion,apiVersion }: Props) {
  return (
    <Link href={`/champions/${champion.id}`} key={champion.id}>
      <div
        key={champion.id}
        className="border-2 rounded p-4 shadow flex hover:shadow-lg justify-center items-center flex-col"
      >
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${apiVersion}/img/champion/${champion.id}.png`}
          alt={"champion.name"}
          width={120}
          height={120}
          className="rounded"
        ></Image>
        <h3 className="mt-2 text-center ">{champion.name}</h3>
        <h3 className="mt-2 text-center text-orange-600">{champion.title}</h3>
      </div>
    </Link>
  );
}
