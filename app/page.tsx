import InscriptionPage from "./header/(login)/inscription/page";
import HeroSection from "./heroSection/page";
import ProductsPage from "./products/page";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareYoutube,
  FaSquareInstagram,
} from "react-icons/fa6";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <div className=" border-2"></div>
      <ProductsPage />
      <div className="border-2"></div>
    </main>
  );
}
