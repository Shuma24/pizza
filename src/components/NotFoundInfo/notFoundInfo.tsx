import React from 'react';

import style from './notFoundInfo.module.scss';

export const NotFoundInfo: React.FC = () => {
  return (
    <div className={style.root}>
      <span>😕</span>
      <h1>Not Found Page</h1>
    </div>
  );
};
