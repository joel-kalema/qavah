'use client'

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      transition={{ duration: 1 }}
        autoplay={true}
        autoplayDelay={2000}
        loop={true}
        prevArrow={false}
        nextArrow={false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://vivrealisbonne.com/wp-content/uploads/2023/04/maison-avec-piscine-au-Portugal-e1682434111727-850x469.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.guideducredit.com/visus/immo-location-meuble.jpeg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://premihome-immobilier.com/wp-content/uploads/2021/02/question-a%CC%80-poser-premie%CC%80re-visite-achat-immobilier-1024x614.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}