import clsx from 'clsx'
import React from 'react'
import 'swiper/swiper.scss'
import { Link } from 'gatsby'
import MyButton from '@/components/Shared/MyButton'
import HomeActivitiesElement from './HomeActivitiesElement'
import * as styles from './HomeActivities.module.css'

export interface IHomeActivitiesProps {
    data: (GatsbyTypes.ContentfulActivity & { area: string })[]
}

const HomeActivities: React.FC<IHomeActivitiesProps> = ({ data }) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-center text-black md:text-4xl md:mb-8 text-opacity-80">
                OUR LATEST ACTIVITIES
            </h2>
            <div
                className={clsx(
                    'flex flex-col md:grid md:grid-cols-3 ',
                    styles.demo
                )}
            >
                {data.map((e) => (
                    <div style={{ gridArea: e.area }} key={e.id}>
                        <HomeActivitiesElement
                            className="w-full h-full"
                            data={e}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center mt-4 text-sm md:mt-8 ">
                <Link title="activities" to="/activities">
                    <MyButton empty colored>
                        CHECK ALL ACTIVITIES
                    </MyButton>
                </Link>
            </div>
        </div>
    )
}

export default HomeActivities
