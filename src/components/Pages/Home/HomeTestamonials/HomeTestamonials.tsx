import 'swiper/swiper.scss'
import React, { useEffect, useState } from 'react'
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeTestamonialsCard from './HomeTestamonialsCard'
import SwiperPoints from './SwiperPoints'

SwiperCore.use([Controller])

interface IHomeTestamonialsProps {
    data: GatsbyTypes.ContentfulTestamonial[]
    changeIntervalMS?: number
}

const HomeTestamonials: React.FC<IHomeTestamonialsProps> = ({
    data,
    changeIntervalMS = 3000
}) => {
    const [current, setCurrent] = useState(0)
    const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>(null)
    // may god forgive me
    useEffect(() => {
        if (!controlledSwiper) return () => null
        const t = setTimeout(() => {
            setCurrent((c) => (c + 1) % data.length)
        }, changeIntervalMS)
        controlledSwiper.slideTo(current, 1000, false)
        return () => clearTimeout(t)
    }, [controlledSwiper, current])

    return (
        <div className="">
            <h3 className="text-2xl leading-snug text-center text-black text-opacity-75 md:text-3xl">
                Some amazing people
                <br />
                We&apos;ve had the pleasure to work with.
            </h3>
            <div>
                <Swiper
                    onSlideChange={({ activeIndex }) =>
                        setCurrent(() => activeIndex)
                    }
                    onSwiper={(e) => {
                        setControlledSwiper(e)
                    }}
                    className="relative mt-6 text-black text-opacity-70"
                    spaceBetween={20}
                    controller={{ control: controlledSwiper }}
                    slidesPerView={1}
                >
                    {data.map((e) => (
                        <SwiperSlide key={e.id}>
                            <HomeTestamonialsCard data={e} />
                        </SwiperSlide>
                    ))}
                    <div className="absolute left-0 flex justify-center w-full bottom-3">
                        <SwiperPoints count={data.length} selected={current} />
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeTestamonials
