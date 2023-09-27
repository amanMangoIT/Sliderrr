import React, { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Carousel = ({}) => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
   let sliderId = setInterval(() => {
      nextSlide()
    },2000);
    return () => {
      clearInterval(sliderId)
    }
  },[currentPerson])

  return (
    <>
      <section className="slider-container">
        {people.map((item, index) => {
          const { id, image, name, title, quote } = item;
          return (
            <article
              style={{ transform: `translateX(${100 * (index - currentPerson)}%)` }}
              className="slide"
              key={id}
            >
              <img style={{display:'inline-block'}} className="person-img" src={image} alt={name} />
              <h5 className="name"> {name} </h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button onClick={prevSlide} type="button" className="prev">
          <FiChevronLeft />
        </button>

        <button onClick={nextSlide} type="button" className="next">
          <FiChevronRight />
        </button>
      </section>
    </>
  );
};

export default Carousel;
