import ProductList from "@/components/server/ProductList";
import { getAllEntries } from "@/services/server/contentfulService";

export const revalidate = 200;

export default async function Home() {
  const entries = await getAllEntries();
  return <ProductList entries={entries} />;
}
