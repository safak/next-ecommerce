import AboutSession from "@/components/HomePages/AboutSession/AboutSession";
import HeroPage from "@/components/HomePages/HeroPage/HeroPage";
import Slide from "@/components/HomePages/Slide/Slide";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <AboutSession/>
      <Slide/>
    </div>
  );
};

export default HomePage;
