/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { IconType } from 'react-icons/lib'
import { IoEasel, IoTrophy, IoPeople } from 'react-icons/io5'

interface IMainDescriptionStatisticsProps {}

interface StatElement {
    count: number
    description: string
    Icon: IconType
}

const statElementFactory = (
    count: number,
    description: string,
    Icon: IconType
): StatElement => ({ count, description, Icon })

const stats = [
    statElementFactory(500, 'Members', IoPeople),
    statElementFactory(100, 'Activities', IoEasel),
    statElementFactory(100, 'Awards', IoTrophy)
]

const MainDescriptionStatistics: React.FC<IMainDescriptionStatisticsProps> = () => {
    return (
        <div className="grid gap-8 text-left md:justify-items-center text-sb-blue-main-500 md:gap-0 md:grid-cols-3">
            {stats.map(({ description, Icon, count }) => (
                <div className="flex items-center " key={description}>
                    <div className="text-6xl">
                        {/* <Icon /> */}
                        <Icon />
                    </div>

                    <div className="ml-10 md:ml-4">
                        <p className="text-5xl font-black ">{`+${count}`}</p>
                        <p className="italic leading-3 tracking-wide text-right uppercase ">
                            {description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainDescriptionStatistics
