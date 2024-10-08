"use server";
import { Champion } from "@/types/Champion";
import { getChampion } from "@/utils/serverApi";
import { useEffect } from "react";

// Rendering mode : ISR
export default async function Champions() {
  const responce = await getChampion();
  console.log(responce.data);
  return <div>챔피언 목록</div>;
}
