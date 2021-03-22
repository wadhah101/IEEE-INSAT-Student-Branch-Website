/* eslint-disable react/no-array-index-key */
import 'swiper/swiper.scss';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';

SwiperCore.use([Controller]);

const changeIntervalMS = 2500;

interface IHomeTestamonialsProps {}

const HomeTestamonials: React.FC<IHomeTestamonialsProps> = () => {
  const [current, setCurrent] = useState(0);
  const [swiperReady, setSwiperReady] = useState(false);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>(null);
  useEffect(() => {
    if (!swiperReady) return () => null;
    // may god forgive me
    const t = setTimeout(() => {
      setCurrent((c) => (c + 1) % 4);
    }, changeIntervalMS);
    return () => clearTimeout(t);
  }, [swiperReady, current]);

  useEffect(() => {
    if (swiperReady) controlledSwiper.slideTo(current, 1000, false);
    return () => null;
  }, [current, swiperReady]);

  return (
    <div className="">
      <h3 className="text-3xl leading-snug text-center text-black text-opacity-75">
        Some amazing people
        <br />
        We&apos;ve had the pleasure to work with.
      </h3>
      <div>
        {/* TODO isloate */}
        <Swiper
          onSlideChange={({ activeIndex }) => setCurrent(() => activeIndex)}
          onSwiper={(e) => {
            setControlledSwiper(e);
            setSwiperReady(true);
          }}
          className="relative mt-8 text-black text-opacity-70"
          spaceBetween={20}
          controller={{ control: controlledSwiper }}
          slidesPerView={1}
        >
          {new Array(4).fill(null).map((_, ind) => (
            <SwiperSlide key={ind}>
              <div className="relative px-4 pt-8 pb-10 mx-auto border rounded-md shadow-sm md:w-3/5">
                <div className="text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi rem debitis, quo laborum autem voluptate possimus
                  dolorum. Distinctio voluptatem incidunt iste assumenda,
                  repellat officiis atque nostrum iure, nam, minima blanditiis.
                </div>
                <div className="flex flex-col items-center mt-6 text-center ">
                  <StaticImage
                    alt="person"
                    placeholder="blurred"
                    src="https://source.unsplash.com/random/100x100?person"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="mt-1 font-semibold ">
                    <h4 className="text-black text-opacity-90">
                      Dr. Habib Kamoun
                    </h4>
                    <p className="text-sm font-medium text-black text-opacity-60 ">
                      IEEE Tunisia Section Chair 2018
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute left-0 w-full bottom-4">
            <div className="grid items-center justify-center grid-flow-col-dense gap-2 ">
              {new Array(4).fill(null).map((_, ind) => (
                <div
                  key={ind}
                  className={clsx(
                    `w-2 h-2 duration-300 ease-in-out transition-colors rounded-full `,
                    current === ind ? `bg-sb-blue-main-400` : `bg-sb-gray-400`,
                  )}
                />
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTestamonials;
