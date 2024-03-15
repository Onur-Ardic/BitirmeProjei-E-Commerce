import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper container mx-auto">
      <div className="banner-top">
        <div className="banner-top-first">
          <h3 className="banner-text">
            Keşfet,
            <br />
            Öğren ,<br /> Tarzını Yakala
          </h3>
        </div>
        <div className="banner-top-second">
          <h3 className="banner-text-second">
            Yeni Sezon <br /> Trendleri Keşfet <br />
            Hayatı Yakala
          </h3>
        </div>
      </div>

      <div className="banner-bottom">
        <div className="banner-bottom-first">
          <a href="#" className="banner-btn">
            Alışveriş <span className="icon-banner">➤</span>
          </a>
        </div>
        <div className="banner-bottom-second">
          <h3 className="banner-text-second">
            İndirimleri
            <br /> Kaçırma, <br />
            Fırsatları Takip Et
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
