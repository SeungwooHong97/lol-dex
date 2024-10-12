import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";
import { NextResponse } from "next/server";

// 최신 api 버전 가져오기
export async function getRecentApiVersion()  {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!response.ok) {
      return {
        message: "Retry please...",
      };
      // throw new Error('Api 버전 확인 실패 잠시 후 시도하여 주세요.');
    }

    const result = await response.json(); 

    return result[0];
  } catch (e) {
    return e;
  }
}

// 챔피언 목록 가져오기
export async function getChampions(): Promise<{ [key: string]: Champion }> {
  const apiVersion = await getRecentApiVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/ko_KR/champion.json`
  );

  if (!response.ok) {
    throw new Error(
      "Api 챔피언 목록을 가져오지 못했습니다. 잠시 후 다시 시도해주세요."
    );
  }
  const data = await response.json();
  return data.data;
}

// 특정 챔피언 상세 정보 가져오기
export async function getChampion(id: string): Promise<ChampionDetail> {
  const apiVersion = await getRecentApiVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/ko_KR/champion/${id}.json`
  );

  if (!response.ok) {
    throw new Error(
      "Api 챔피언 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요."
    );
  }

  const data = await response.json();
  return data.data[id];
}

// 아이템 목록 가져오기
export async function getItems(): Promise<Item> {
  const apiVersion = await getRecentApiVersion();

  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/ko_KR/item.json`
  );

  if (!response.ok) {
    throw new Error(
      "아이템 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요."
    );
  }
  const data = await response.json();
  return data.data;
}


// // 챔피언 로테이션 정보 가져오기
// export async function getRotationChampions():  {
//   const apiVersion = await getRecentApiVersion();

//   const response = await fetch(
//     `https://ddragon.leagueoflegends.com/cdn/${apiVersion}/data/ko_KR/item.json`
//   );

//   if (!response.ok) {
//     throw new Error(
//       "아이템 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요."
//     );
//   }

//   const data = await response.json();
//   return data.data;
// }
