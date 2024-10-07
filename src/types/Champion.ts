// // 챔피언 목록에서 사용하는 기본 정보 타입.
export type Champion = {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    image: Image;
  }
  
  export type Image = {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }

// //챔피언 상세 정보에 사용하는 타입.
export type ChampionDetail = {
    id: string;
    key: string;
    name: string;
    title: string;
    image: ChampionImage;
    lore: string;
    blurb: string;
    allytips: string[];
    info: ChampionInfo;
  };

  export type ChampionImage = {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  
  export type ChampionInfo = {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };