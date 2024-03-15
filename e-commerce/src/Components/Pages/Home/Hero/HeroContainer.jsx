import LeftHeroSidebar from "./LeftHeroSidebar";
import RightHeroSlider from "./RightHeroSlider";

const HeroContainer = () => {
  return (
    <section className=" container mx-auto pt-3 flex justify-between">
      <div className="left-hero-sidebar">
        <LeftHeroSidebar />
      </div>
      <div className="right-hero-carousel w-[100%] pl-3">
        <RightHeroSlider />
      </div>
    </section>
  );
};

export default HeroContainer;
