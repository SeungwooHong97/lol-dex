import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";
import { NextResponse } from "next/server";


// 최신 api 버전 가져오기
export async function getRecentApiVersion() {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!response.ok) {
      return {
        message: "Retry please...",
      };
    }

    const result = await response.json();

    return result[0];
  } catch (e) {
    return e;
  }
}

// 챔피언 목록 가져오기
export async function getChampions() {
  try {

    const apiVersion = await getRecentApiVersion();
    if (typeof apiVersion !== "string") {
      return NextResponse.json({ error: "Invalid API version" });
    }

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/ko_KR/champion.json`, {
        next : {
            revalidate:10,
        }
      }
    );

    if (!response.ok) {
      return {
        message: "Retry please...",
      };
    }

    const data: Champion = await response.json();

    return NextResponse.json({ data });
  } catch (e) {
    return e;
  }
}


// 아이템 목록 가져오기
export async function getItems() {
    try {
      const apiVersion = await getRecentApiVersion();
      if (typeof apiVersion !== "string") {
        return NextResponse.json({ error: "Invalid API version" });
      }
  
      const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/ko_KR/item.json`);
  
      if (!response.ok) {
        return NextResponse.json(
            { error: "Items not found" },
            { status: 404 }
          );
      }

      const data: Item = await response.json();
      console.log(data);
      return NextResponse.json({ data });
    } catch (e) {
      return e;
    }
  }

// 특정 챔피언 상세 정보 가져오기
export async function getChampion(id : string) {
    try {
      const apiVersion = await getRecentApiVersion();
      if (typeof apiVersion !== "string") {
        return NextResponse.json(
            { error: "Invalid API version" },
            { status: 500 }
        );
      }
  
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/ko_KR/champion/${id}.json`
      );
  
      if (!response.ok) {
        return NextResponse.json(
            { error: "Champion not found or invalid ID" },
            { status: 404 }
          );
      }

      const data: ChampionDetail = await response.json();
      return NextResponse.json({ data },{status:200});
    } catch (e) {
      return e;
    }
  }