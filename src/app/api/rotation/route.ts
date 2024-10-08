import { ChampionRotation } from "@/types/ChampionRotaion";
import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.RIOT_API_KEY) {
    return;
  }

  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Riot-Token": process.env.RIOT_API_KEY as string,
        },
      }
    );

    const data: ChampionRotation = await res.json();

    return NextResponse.json({ data });
  } catch (e) {
    return e;
  }
}
