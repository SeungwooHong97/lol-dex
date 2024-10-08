"use server";
import { getItems } from "@/utils/serverApi";
import Image from "next/image";

export default async function Items() {
  // const test2 = await getItems();
  // console.log(test2 + "아이템들 잘가져왔나??? ");
  return <div>아이템 목록</div>;
}
