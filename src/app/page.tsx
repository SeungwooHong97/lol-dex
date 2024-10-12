import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center pt-10">
      <h1 className="text-3xl font-bold mb-4">리그 오브 레전드 정보 앱</h1>

      <p className="text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
    </div>
  );
}
