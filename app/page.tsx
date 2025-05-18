import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import Location from "./components/Location/Location";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Hero />
      <Product />
      <Location />
      <Banner />
      <Footer />
    </div>
  );
}
