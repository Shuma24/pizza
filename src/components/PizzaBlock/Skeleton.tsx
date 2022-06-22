import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="186" y="277" rx="0" ry="0" width="6" height="3" />
    <circle cx="130" cy="129" r="107" />
    <rect x="0" y="249" rx="5" ry="5" width="280" height="29" />
    <rect x="-2" y="293" rx="20" ry="20" width="281" height="89" />
    <rect x="6" y="403" rx="16" ry="16" width="110" height="35" />
    <rect x="130" y="397" rx="24" ry="24" width="140" height="46" />
    <rect x="233" y="449" rx="0" ry="0" width="8" height="9" />
  </ContentLoader>
);
