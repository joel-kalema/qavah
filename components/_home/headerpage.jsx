"use client"

import { useEffect, useRef } from 'react';
import TabsWithIcon from './searchtabs'
import Link from 'next/link';

const Carousel = () => {
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut = null;
    let runNextAuto = null;

    // Function to reset the animation of the running time
    const resetTimeAnimation = () => {
        if (runningTimeRef.current) {
            runningTimeRef.current.style.animation = 'none';
            runningTimeRef.current.offsetHeight; // Trigger reflow
            runningTimeRef.current.style.animation = null;
            runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
        }
    };

    // Function to handle slider transitions
    const showSlider = (type) => {
        const sliderItemsDom = listRef.current.querySelectorAll('.item');
        const carousel = carouselRef.current;

        if (type === 'next') {
            listRef.current.appendChild(sliderItemsDom[0]);
            carousel.classList.add('next');
        } else {
            listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            carousel.classList.add('prev');
        }

        clearTimeout(runTimeOut);

        runTimeOut = setTimeout(() => {
            carousel.classList.remove('next');
            carousel.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext);

        resetTimeAnimation();
    };

    // Handle the initial setup and effects
    useEffect(() => {
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;

        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');

        // Start auto transition
        runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);

        // Start the initial animation
        resetTimeAnimation();

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className="carousel overflow-hidden" ref={carouselRef}>
                <div className="list" ref={listRef}>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/home1.jpeg")' }}>
                        <div className="content">
                            <div className="title">Trouvez votre prochaine location</div>
                            {/* <div className="name">EAGLE</div> */}
                            <div className="des">
                                Accédez à une large gamme de logements adaptés à vos besoins.
                            </div>
                            <div className="btn lg:flex gap-4">
                            <Link href='/contact' className="py-2 px-6 bg-[#ad8954] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/bien.jpeg")' }}>
                        <div className="content">
                            <div className="title">Gérez vos biens en toute sérénité</div>
                            <div className="des">
                                Confiez-nous la gestion locative et administrative de vos propriétés.
                            </div>
                            <div className="btn lg:flex gap-4">
                                <Link href='/contact' className="py-2 px-6 bg-[#ad8954] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/plot1.jpeg")' }}>
                        <div className="content">
                            <div className="title">Explorez nos terrains disponibles</div>
                            <div className="des">
                                Parcourez une sélection exclusive de terrains prêts à être développés.
                            </div>
                            <div className="btn lg:flex flex-col gap-4">
                            <Link href='/contact' className="py-2 px-6 bg-[#ad8954] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="item" style={{ backgroundImage: 'linear-gradient(to right, #00000050, #00000050), url("/home3.jpeg")' }}>
                        <div className="content">
                            <div className="title">Découvrez notre offre de syndic de copropriété</div>
                            <div className="des">
                                Bénéficiez d&apos;une gestion transparente et efficace de votre copropriété.
                            </div>
                            <div className="btn lg:flex flex-col gap-4">
                            <Link href='/contact' className="py-2 px-6 bg-[#ad8954] inline-block rounded-3xl text-sm text-[#fff] font-extrabold">Contact</Link>
                            </div>
                        </div>
                    </div>

                    {/* Add more items as needed */}
                </div>

                <div className="arrows">
                    <button className="prev" ref={prevBtnRef}>{'<'}</button>
                    <button className="next" ref={nextBtnRef}>{'>'}</button>
                </div>

                {/* <div className="timeRunning" ref={runningTimeRef}></div> */}
            </div>
            <div className='lg:w-4/6 lg:mx-auto mt-[-5rem] bg-[#fff] z-40 relative p-2 lg:p-4 rounded-2xl drop-shadow-lg mb-10'>
                <TabsWithIcon />
            </div>
        </div>
    );
};

export default Carousel;
