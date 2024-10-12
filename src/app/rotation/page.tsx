"use client";

import { ChampionRotation } from "@/types/ChampionRotaion";
import { Champion } from "@/types/Champion";
import { useEffect, useState } from "react";
import { getChampion, getChampions, getRecentApiVersion } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";
import ChampionCard from "@/components/ChampionCard";

export default function RotationPage() {
  const [rotationData, setRotationData] = useState<ChampionRotation>();
  const [championData, setChampionData] = useState<{
    [key: string]: Champion;
  }>();

  const [apiVersion, setApiVersion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // try catch finally 문으로 묶어서 오류가 발생할 경우 처리.. 오류 메시지를 표시하도록 개선
    async function fetchData() {
      try {
        const [rotationResponce, championData, apiVersion] = await Promise.all([
          fetch("/api/rotation").then((res) => res.json()),
          getChampions(),
          getRecentApiVersion(),
        ]);

        setRotationData(rotationResponce);
        setChampionData(championData);
        setApiVersion(apiVersion);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false); // 로딩 상태 업데이트
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>로딩 중입니다....</div>;
  // 로테이션 데이터, 챔피언 데이터가 모두 null 이 아닐 때 값이 있을 때
  if (!rotationData || !championData || !apiVersion) return null;

  const rotationChampions = rotationData.freeChampionIds.map((id) => {
    const champion = Object.values(championData).find(
      (champion: Champion) => parseInt(champion.key) === id
    );

    return champion;
  });

  return (
    <div>
      <h2 className="text-3xl font-bold my-10 text-center">챔피언 로테이션</h2>
      <div className="grid grid-cols-10 gap-4">
        {rotationChampions.map((champion) =>
          champion
            ? champion && (
                <ChampionCard
                  champion={champion}
                  key={champion.id}
                  apiVersion={apiVersion}
                ></ChampionCard>
              )
            : null
        )}
      </div>
    </div>
  );
}
