import React, { Fragment } from "react";
import styles from "./sildeshow.module.scss";
import Slider from "react-slick";

function SlideShowComponent() {
  const slides = [
    {
      city: "Paris",
      country: "France",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg",
    },
    {
      city: "Singapore",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg",
    },
    {
      city: "Prague",
      country: "Czech Republic",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg",
    },
    {
      city: "Amsterdam",
      country: "Netherlands",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg",
    },
    {
      city: "Moscow",
      country: "Russia",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg",
    },
  ];

  return (
    <Fragment>
      <Slider>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              style={{ width: 100, height: 100 }}
              src={slide.img}
              alt={slide.city}
            />
          </div>
        ))}
      </Slider>
    </Fragment>
  );
}

export default SlideShowComponent;
