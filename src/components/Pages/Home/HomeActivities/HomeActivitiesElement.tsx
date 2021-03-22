import clsx from 'clsx';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { LinkHTMLAttributes } from 'react';
import * as styles from './HomeActivities.module.css';

// TODO replace with activity Model

interface IHomeActivitiesElementProps extends LinkHTMLAttributes<any> {
  data: GatsbyTypes.ContentfulActivity;
}

const HomeActivitiesElement: React.FC<IHomeActivitiesElementProps> = ({
  // eslint-disable-next-line object-curly-newline
  data: { title, slug, tags, featuredPicture },
  className,
  ...props
}) => {
  return (
    <Link
      to={`/activities/details/${slug}`}
      title="link to activities"
      className={clsx(`flex items-stretch `, className)}
      {...props}
    >
      <div className={clsx(styles.el, `duration-300 relative ease-in-out`)}>
        <GatsbyImage
          alt="ok"
          imgClassName="object-cover "
          className="w-full h-full"
          image={getImage(featuredPicture.localFile as any)}
        />
        <div
          className={clsx(
            styles.appear,
            `absolute flex z-10 transition-all ease-in-out duration-300 md:transform md:opacity-0 flex-col items-center left-0 w-full md:translate-y-10 text-white bottom-3 md:bottom-6`,
          )}
        >
          <h3 className="font-semibold tracking-wide ">
            {title.toUpperCase()}
          </h3>
          <p className="text-sm">{tags.slice(0, 2).join(` / `)}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomeActivitiesElement;
