import Image from "next/image";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import ProductHighlight from "./components/ProductsHighlights";

export default function Home() {
  return (
    <div>
      <Banner/>
      <ProductHighlight/>
    </div>
  );
}
