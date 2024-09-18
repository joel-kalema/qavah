'use client'

import { Carousel, Typography } from "@material-tailwind/react";

export default function Homepage() {
  return (
    <div className="relative  h-[100vh] overflow-hidden">
      {/* <div className="absolute w-1/6 h-[15rem] bg-[#fff] z-30 bottom-6 left-6"></div> */}
      <div className="absolute w-4/6 center-div bg-[#00000095] z-30 backdrop-blur-md py-10 px-8 rounded-xl">
        <Typography
          variant="h1"
          color="white"
          className="mb-4 text-3xl md:text-4xl lg:text-3xl"
        >Et si votre investissement vous offrait autant de plaisir que de profits? Transformez chaque projet en succès captivant.
        </Typography>
        <p className="text-[#fff] my-4">Achetez, vendez, et gérez vos biens immobiliers en toute sérénité avec des experts de confiance.</p>
        <div className="flex gap-10">
          <p className="py-2 px-6 bg-[#fff] rounded-3xl text-sm font-extrabold">RESERVER UN APPEL</p>
          <p className="py-2 px-6 bg-[#ad8954] rounded-3xl text-sm text-[#fff] font-extrabold">CONTACTEZ- NOUS</p>
        </div>
      </div>
      <Carousel
        transition={{ duration: 3 }}
        autoplay={true}
        autoplayDelay={8000}
        loop={true}
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
        className="rounded-[3rem]">
        <div className="relative h-[100vh] w-full overflow-hidden home1">
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/10"></div>
        </div>
        <div className="relative h-[100vh] w-full overflow-hidden home3">
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/10"></div>
        </div>
        <div className="relative h-[100vh] w-full overflow-hidden home2">
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/10"></div>
        </div>
      </Carousel>
    </div>
  );
}