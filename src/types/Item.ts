// 아이템 목록에서 사용하는 기본 정보 타입.
export type Item = {
    name : number;
    plaintext : string;
    image: Image;
  };
  
  export type Image = {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }