import { ChampionRotation } from "@/types/ChampionRotaion";
import { error } from "console";

const RIOT_API_KEY = process.env.RIOT_API_KEY;

export default async function getChampionRotation(): Promise<ChampionRotation> {
  if (!RIOT_API_KEY) {
    throw new Error("API키를 확인해주세요.");
  }

  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Riot-Token": process.env.RIOT_API_KEY as string,
      },
    }
  );

  return res.json();
}
