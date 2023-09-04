import { EntryCollection, EntrySkeletonType } from "contentful";
import ProductCard from "./ProductCard";

interface PageProps {
  entries: EntryCollection<EntrySkeletonType, undefined, string>;
}

export default function ProductList({ entries }: PageProps) {
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
