import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-600 py-4 px-2 md:px-8">
      <div className="flex justify-between">
        <Link href={"/"}>BeMinimal</Link>
        {/* <ul className="flex font-light text-gray-300 gap-4">
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/brands"}>Brands</Link>
        </ul> */}
      </div>
    </nav>
  );
}
