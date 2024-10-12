import { getItems, getRecentApiVersion } from "@/utils/api";
import { Item } from "@/types/Item";
import Image from "next/image";

export default async function Items() {
  const itemData = await getItems();
  const items = Object.values(itemData);
  const apiVersion = await getRecentApiVersion();
  console.log(items);
  return (
    <div>
      <h2 className="text-3xl font-bold my-10 text-center">아이템 목록</h2>
      <div className="grid grid-cols-5 gap-4 w-full">
        {items.map((item: Item) => {
          return (
            <div
              key={item.name}
              className="border-2 rounded p-4 shadow flex hover:shadow-lg justify-center items-center flex-col"
            >
              {item.name}
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${apiVersion}/img/item/${item.image.full}`}
                alt={"champion.name"}
                width={120}
                height={120}
                className="rounded"
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}
