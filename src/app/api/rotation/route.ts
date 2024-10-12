import { ChampionRotation } from "@/types/ChampionRotaion";
import getChampionRotation from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.RIOT_API_KEY) {
    return;
  }

  try {
    const res = await getChampionRotation();
    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
