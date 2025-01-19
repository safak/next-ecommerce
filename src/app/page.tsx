import AboutSession from "@/components/HomePages/AboutSession/AboutSession";
import Category from "@/components/HomePages/Category/Category";
import HeroPage from "@/components/HomePages/HeroPage/HeroPage";
import ProductCategory from "@/components/HomePages/MainCategory/ProductCategory";
import Slide from "@/components/HomePages/Slide/Slide";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <AboutSession />
      <ProductCategory />
      <Category />
      <Slide />
    </div>
  );
};

export default HomePage;
