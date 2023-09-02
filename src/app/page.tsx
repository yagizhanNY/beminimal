import ProductCard from "@/components/server/ProductCard";
import { getAllEntries } from "@/services/server/contentfulService";

export default async function Home() {
  const entries = await getAllEntries();
  return (
    <main className="">
      <div className="grid grid-cols-4">
        {entries.items.map((i) => (
          <ProductCard key={i.fields.id as string} item={i} />
        ))}
      </div>
    </main>
  );
}
