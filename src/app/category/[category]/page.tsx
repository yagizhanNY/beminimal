import ProductList from "@/components/server/ProductList";
import { getEntriesByCategory } from "@/services/server/contentfulService";

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const entries = await getEntriesByCategory(params.category);
  return <ProductList entries={entries} />;
}
