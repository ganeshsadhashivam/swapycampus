import Banner from "./(home)/Banner";
import MultiDropdown from "./(home)/MultiDropdown";
import HeroSection from "./(home)/HeroSection";
import ProductListing from "./(home)/ProductListing";

import products from "@/data/Products";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      <MultiDropdown />
      <ProductListing products={products} />
    </>
  );
}
