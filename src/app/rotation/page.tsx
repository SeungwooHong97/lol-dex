"use client";

// 클라이언트 사이드에서 실시간으로 데이터를 가져와야 하는 경우에만 Route Handlers 사용하면 좋음
// 이번 로테이션 정보를 가져오는 기능에서 실시간으로 변경될 수 있음으로 이 부분에 적용시키면 좋음
export const getChampionRotation = async () => {
  console.log(
    "그니까 useClient쓰면  빌드 단에서 안가져오고 클라이언트에서가져온다고?"
  );
  const response = await fetch("/api/rotation");
  const result = await response.json();
  console.log(result.data.freeChampionIds.length);
};

const page = () => {
  getChampionRotation();

  return <div>Rotation 페이지</div>;
};

export default page;
