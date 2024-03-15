("use client");

import "./Slider.css";

import { Carousel } from "flowbite-react";

function Slider() {
  return (
    <div className="slider-wrapper  h-56 sm:h-64 xl:h-80 2xl:h-96 container mx-auto mt-[220px]">
      <Carousel
        className="slider"
        style={{
          border: "solid",
          borderColor: "#000",
          borderWidth: "4px",
          borderRadius: "10px",
        }}
      >
        <div className="carousel-item flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white">
          <div className="slider-img-area">
            <img src="/images/banner/banner-3.png" alt="" />
          </div>
          <div className="slider-text">
            <p>
              Fırsatlar <br /> Seninle
            </p>
            <p>
              İndirimeri Yakala <br /> Tarzını Göster
            </p>
          </div>
        </div>
        <div className="flex carousel-item h-full items-center justify-center  bg-white dark:bg-gray-700 dark:text-white">
          <div className="slider-img-area">
            <img src="/images/banner/banner-4.png" alt="" />
          </div>
          <div className="slider-text">
            <p>
              Hayatın <br /> İzinde
            </p>
            <p>
              Daima <br /> İleriye
            </p>
          </div>
        </div>
        <div className="flex carousel-item h-full items-center justify-center  bg-white dark:bg-gray-700 dark:text-white">
          <div className="slider-img-area">
            <img src="/images/banner/banner-image.png" alt="" />
          </div>
          <div className="slider-text">
            <p>
              Moda <br /> Şimdi
            </p>
            <p>
              Hemen <br /> Cebinde
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default Slider;
