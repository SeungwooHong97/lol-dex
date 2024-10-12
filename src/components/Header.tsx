import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-700 shadow w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between">
        <Link href={"/"} className="hover:underline font-bold">
          홈
        </Link>
        <Link
          href={"/champions"}
          className="hover:underline font-bold"
        >
          챔피언 목록
        </Link>

        <Link
          href={"/items"}
          className="hover:underline font-bold"
        >
          아이템 목록
        </Link>

        <Link
          href={"/rotation"}
          className="hover:underline font-bold"
        >
          챔피언 로테이션
        </Link>
      </nav>
    </header>
  );
};

export default Header;
