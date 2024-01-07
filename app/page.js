'use client';
import useFetchData from "@/hooks/useFetchData";
import Hero from "./components/hero/hero";
import HeroSM from "./components/hero/hero-sm";
import ProductsBody from "./components/products/products-body";


export default function Home() {
  const { data, loading, error } = useFetchData();
  const items = data?.Items;
  const popularItems = items?.filter(item => item.IsPopular);
  const recommendedItems = items?.filter((item) => item.IsRecommended);
  return (
    <main>
      <Hero />
      <HeroSM />
      <ProductsBody data={popularItems } popular={true} isLoading={loading} isError={error} />
      <ProductsBody data={recommendedItems} popular={false} isLoading={loading} isError={error} />
    </main>
  );
}
