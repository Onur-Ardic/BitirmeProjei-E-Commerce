import { Carousel } from "flowbite-react";

function RightHeroSlider() {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="/images/Slider-img/slider-3.png"
          alt="..."
          className="h-full"
        />
        <img
          src="/images/Slider-img/slider-img-1.png"
          alt="..."
          className="h-full"
        />
        <img
          src="/images/Slider-img/slider-img-2.png"
          alt="..."
          className="h-full"
        />
      </Carousel>
      <Carousel indicators={false}>
        <img
          src="/images/Slider-img/carousel.png"
          alt="..."
          className="h-[100%]"
        />
        <img
          src="/images/Slider-img/carousel-1.png"
          alt="..."
          className="h-full"
        />
        <img
          src="/images/Slider-img/carousel-3.png"
          alt="..."
          className="h-full"
        />
      </Carousel>
    </div>
  );
}

export default RightHeroSlider;
