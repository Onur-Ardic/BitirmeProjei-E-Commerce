import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="brands-wrapper">
        <img src="/images/Brands/brands-1.png" alt="" />
        <img src="/images/Brands/brands-2.png" alt="" />
        <img src="/images/Brands/brands-4.png" alt="" />
      </div>

      <footer className="footer">
        <div className="footer-left">
          <h3 className="title-footer">Collection Store</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, qui.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quod hic soluta corporis quae ipsam ab at iure ex minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
            magni ducimus iusto numquam non.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
            magni ducimus iusto numquam non. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vel tempore magni ducimus iusto
            numquam non.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
            magni ducimus iusto numquam non.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
            magni ducimus iusto numquam non. dolor sit amet consectetur
            adipisicing elit. Vel tempore magni ducimus iusto numquam non.
          </p>
        </div>
        <div className="footer-mid">
          <div className="card">
            <a href="#">
              <img src="/images/Clothes/denim-1.png" alt="" />
              <div>
                <p className="text-bottom text-center ">
                  Öne
                  <br />
                  Çıkan <br />
                  Ürünler
                </p>
              </div>
              <img src="/images/Clothes/denim-jacket-1.png" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
