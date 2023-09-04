import Image from "next/image";
import Link from "next/link";
import DropdownButton from "../client/DropdownButton";

const categories = ["Lifestyle", "Tech", "Living"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 bg-white w-full border-b border-gray-600 py-4 px-2 md:px-8 opacity-90 z-40">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo/logo.png"}
            alt="logo"
            width={160}
            height={160}
            loading="eager"
          ></Image>
        </Link>
        <DropdownButton title="Categories" items={categories} />
        {/* <ul className="flex font-light text-gray-300 gap-4">
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/brands"}>Brands</Link>
        </ul> */}
      </div>
    </nav>
  );
}
