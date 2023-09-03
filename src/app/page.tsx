import ProductCard from "@/components/server/ProductCard";
import { getAllEntries } from "@/services/server/contentfulService";

export default async function Home() {
  const entries = await getAllEntries();
  return (
    <main className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {entries.items.map((i) => (
          <ProductCard key={i.fields.id as string} item={i} />
        ))}
      </div>
    </main>
  );
}
