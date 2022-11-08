import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import FilterOptions from 'components/filterOptions';

interface Props {
  breadcrumb: string[];
  pageTitle: string;
  handleCreate: () => void;
}

const BreadToolbar: FC<Props> = (props) => {

  const { breadcrumb, pageTitle, handleCreate } = props;

  const navigate = useNavigate();

  return (
    <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
      <div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap">
        <div className="page-title d-flex flex-column me-3">
          <h1 className="d-flex text-dark fw-bold my-1 fs-3">{pageTitle}</h1>
          <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7 my-1">
            <li className="breadcrumb-item text-gray-600">
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-gray-600 text-hover-primary">Home</a>
            </li>
            <li className="breadcrumb-item text-gray-600">{breadcrumb[0]}</li>
            <li className="breadcrumb-item text-gray-500">{breadcrumb[1]}</li>
          </ul>
        </div>
        <div className="d-flex align-items-center py-2 py-md-1">
          <div className="me-3">
            <a href="/" className="btn btn-light-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                </svg>
              </span>
              Filter
            </a>
            <FilterOptions />
          </div>
          <a
            href="/"
            className="btn btn-primary fw-bold"
            onClick={(e) => {
              e.preventDefault();
              handleCreate();
            }}
          >
            Create
          </a>
        </div>
      </div>
    </div>
  )
}

export default BreadToolbar;
