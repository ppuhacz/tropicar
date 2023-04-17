import React, { useState, useEffect } from "react";
import { BackgroundPhoto } from "./types/background-photos.-interface";

function SlideShow({
  photos,
  slideDuration,
}: {
  photos: BackgroundPhoto[];
  slideDuration: number;
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % photos.length);
    }, slideDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, photos.length, slideDuration]);

  const slides = photos.map((photo: BackgroundPhoto, index: number) => (
    <img
      key={index}
      src={photo.url}
      alt={photo.name}
      className={`home-page-title-photos ${photo.name} ${
        currentSlide === index ? "active" : ""
      }`}
    />
  ));
  console.log("rerender");
  return <div className="slideshow">{slides}</div>;
}

export default SlideShow;
