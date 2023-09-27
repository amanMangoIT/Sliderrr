import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="slick-container">
        <Slider {...settings}>
          {list.map((item, index) => {
            const { id, image, name, title, quote } = item;
            return (
              <article
                key={id}
              >
                <img className="person-img" src={image} alt={name} />
                <h5 className="name"> {name} </h5>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default SlickCarousel;
