import ProductCard from "@/components/server/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-3">
        <ProductCard />
      </div>
    </main>
  );
}
