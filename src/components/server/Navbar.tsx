import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 bg-white w-full border-b border-gray-600 py-4 px-2 md:px-8 opacity-90 z-40">
      <div className="flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo/logo.png"}
            alt="logo"
            width={160}
            height={160}
          ></Image>
        </Link>
        {/* <ul className="flex font-light text-gray-300 gap-4">
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/brands"}>Brands</Link>
        </ul> */}
      </div>
    </nav>
  );
}
