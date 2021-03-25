import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import dayjs from 'dayjs'
import clsx from 'clsx'
import { Link } from 'gatsby'
import * as styles from './HomeBlogsElement.module.css'

interface IHomeBlogElementProps {
    data: GatsbyTypes.ContentfulBlog
}

const HomeBlogElement: React.FC<IHomeBlogElementProps> = ({ data }) => {
    const humanDate = dayjs(data.date).format('MMMM DD, YYYY')
    return (
        <Link
            to={`/blogs/details/${data.slug}`}
            className={clsx('flex flex-col  ', styles.main)}
        >
            <GatsbyImage
                className={clsx(
                    'flex-grow object-cover overflow-hidden ',
                    styles.pic
                )}
                alt={data.title}
                image={getImage(data.featuredPicture.localFile as any)}
            />
            <h4 className="mt-6 text-2xl text-black transition-colors duration-300 ease-in-out text-opacity-70">
                {data.title}
            </h4>
            <div className="flex items-center mt-3 text-sm font-medium text-black text-opacity-50 ">
                <p>{humanDate}</p>
                <div className="flex-grow " />
                {/* TODO multi tag */}
                <div className="flex gap-2 ">
                    {data.tags.slice(0, 2).map((e) => (
                        <p
                            key={e}
                            className="px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-sb-blue-main-400 "
                        >
                            {e}
                        </p>
                    ))}
                </div>
            </div>
            <p className="mt-4 text-sm text-black text-opacity-70 line-clamp-4">
                {data.description.raw}
            </p>
        </Link>
    )
}

export default HomeBlogElement
