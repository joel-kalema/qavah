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
        src="https://us.123rf.com/450wm/elenaperova/elenaperova2204/elenaperova220400084/184562258-african-american-man-brags-about-buying-new-apartment.jpg?ver=6"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.istockphoto.com/id/1456438564/photo/couple-second-key-to-new-home-with-hand-in-heart-symbol.jpg?s=612x612&w=0&k=20&c=GyenHW07psHHGfLgtg9KngDRwVb8jx78NCbE_PN2MDE="
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://media.istockphoto.com/id/1455111278/photo/man-holding-new-house-key.jpg?s=612x612&w=0&k=20&c=0b7ZcUwBDLiyCsZP7wU-7LVIye4hE7OFMAdmSOvWwoc="
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}