/* eslint-disable object-curly-newline */
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

interface IHomeTestamonialsCardProps {
    data: GatsbyTypes.ContentfulTestamonial
}

const HomeTestamonialsCard: React.FC<IHomeTestamonialsCardProps> = ({
    data: { description, owner, ownerPosition, ownerImage }
}) => {
    return (
        <div className="relative px-4 pt-6 pb-8 mx-auto md:w-3/5">
            <div className="text-center">{description.description}</div>
            <div className="flex flex-col items-center mt-6 text-center ">
                <GatsbyImage
                    alt={owner}
                    image={getImage(ownerImage.localFile as any)}
                    className="w-16 h-16 rounded-full"
                />

                <div className="mt-1 font-semibold ">
                    <h4 className="text-black text-opacity-90">{owner}</h4>
                    <p className="text-sm font-medium text-black text-opacity-60 ">
                        {ownerPosition}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeTestamonialsCard
