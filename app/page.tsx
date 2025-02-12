import HeroSection from "./heroSection/page";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className=" border-2"></div>
      <ProductsPage />
    </main>
  );
}
