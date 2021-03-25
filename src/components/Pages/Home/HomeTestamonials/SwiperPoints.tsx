/* eslint-disable react/no-array-index-key */
import clsx from 'clsx'
import React from 'react'

interface ISwiperPointsProps {
    count: number
    selected: number
}

const SwiperPoints: React.FC<ISwiperPointsProps> = ({ count, selected }) => {
    return (
        <div className="inline-grid items-center grid-flow-col-dense gap-2 ">
            {new Array(count).fill(null).map((_, ind) => (
                <div
                    key={ind}
                    className={clsx(
                        'w-2 h-2 duration-300 ease-in-out transition-colors rounded-full ',
                        selected === ind
                            ? 'bg-sb-blue-main-400'
                            : 'bg-sb-gray-400'
                    )}
                />
            ))}
        </div>
    )
}

export default SwiperPoints
