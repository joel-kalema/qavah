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
        src="https://syndics.mallette.ca/storage/pour-faire-confiance.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.cabinetsalmon.fr/wp-content/uploads/2024/02/Gestion-copropriete-1170x0-c-center.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.f1g.fr/media/cms/531x299_crop/2023/05/10/fb159dd88ef6975510f5645caec6535b81759be238632498f8c7911632254b5b.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}