import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="137" cy="135" r="125" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="430" rx="10" ry="10" width="90" height="30" />
    <rect x="125" y="423" rx="24" ry="25" width="155" height="45" />
  </ContentLoader>
);

export default Skeleton;
