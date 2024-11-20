import Blogs from "@/components/Blogs";
import Exhibitions from "@/components/Exhibitions";
import Footer from "@/components/Footer";

import IndustrialSolutionsOverview from "@/components/IndustrialSolutionsOverview";
import IndustriesOverview from "@/components/IndustriesOverview";
import LandingPage from "@/components/LandingPage";
import Nav from "@/components/Nav";

import ProductRange from "@/components/ProductRange";
import TurnkeySolutions from "@/components/TurnkeySolutions";

export default function Home() {
  return (
    <>
      <Nav />
      <LandingPage />
      <IndustrialSolutionsOverview />
      <ProductRange />
      <IndustriesOverview />
      <TurnkeySolutions />
      <Blogs />
      <Exhibitions />
      <Footer/>
    </>
  );
}
