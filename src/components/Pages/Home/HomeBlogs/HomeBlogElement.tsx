import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

interface IHomeBlogElementProps {
  data: GatsbyTypes.ContentfulBlog;
}

const HomeBlogElement: React.FC<IHomeBlogElementProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <GatsbyImage
        className="flex-grow object-cover "
        alt={data.title}
        image={getImage(data.featuredPicture.localFile as any)}
      />
      <h4 className="mt-6 text-2xl text-black text-opacity-70">{data.title}</h4>
      <div className="flex items-center mt-3 text-sm font-medium text-black text-opacity-50 ">
        <p> September 15, 2020 </p>
        <div className="flex-grow " />
        {/* TODO multi tag */}
        <p className="px-4 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-sb-blue-main-400 ">
          TECH
        </p>
      </div>
      <p className="mt-4 text-sm text-black text-opacity-70 line-clamp-4">
        {data.description}
      </p>
    </div>
  );
};

export default HomeBlogElement;
