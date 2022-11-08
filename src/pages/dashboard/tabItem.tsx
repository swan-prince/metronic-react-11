import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

const TabItem: FC<Props> = (props) => {

  const { children, onClick, active } = props;

  return (
    <li className="nav-item col-12 col-lg mb-5 mb-lg-0">
      <a
        className={clsx("nav-link btn btn-flex btn-color-gray-400 btn-outline btn-active-primary d-flex flex-grow-1 flex-column flex-center py-5 h-1250px h-lg-175px", {'active': active})}
        data-bs-toggle="tab"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    </li>
  )
}

export default TabItem;
