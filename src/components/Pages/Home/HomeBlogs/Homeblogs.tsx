import React from 'react';
import HomeBlogElement from './HomeBlogElement';

interface IHomeblogsProps {
  blogs: GatsbyTypes.ContentfulBlog[];
}

const Homeblogs: React.FC<IHomeblogsProps> = ({ blogs }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-10">
        {blogs.map((e) => (
          <HomeBlogElement key={e.id} data={e} />
        ))}
      </div>
    </div>
  );
};

export default Homeblogs;
