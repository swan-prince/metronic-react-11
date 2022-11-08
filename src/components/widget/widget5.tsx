import React, { FC } from 'react';

import FilterOptions from 'components/filterOptions';

const Widget5: FC = () => {

  return (
    <div className="card">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Tasks Overview</span>
          <span className="text-muted fw-semibold fs-7">Pending 10 tasks</span>
        </h3>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
            <span className="svg-icon svg-icon-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                  <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                  <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                  <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                </g>
              </svg>
            </span>
          </button>
          <FilterOptions />
        </div>
      </div>
      <div className="card-body py-3">
        <div className="table-responsive">
          <table className="table align-middle gs-0 gy-5">
            <thead>
              <tr>
                <th className="p-0 w-50px"></th>
                <th className="p-0 min-w-200px"></th>
                <th className="p-0 min-w-100px"></th>
                <th className="p-0 min-w-40px"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </th>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Top Authors</a>
                  <span className="text-muted fw-semibold d-block fs-7">Successful Fellas</span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-bold">70%</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                    <span className="svg-icon svg-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </th>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                  <span className="text-muted fw-semibold d-block fs-7">Most Successful</span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-bold">50%</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                    <span className="svg-icon svg-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </th>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                  <span className="text-muted fw-semibold d-block fs-7">Awesome Users</span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-bold">80%</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                    <span className="svg-icon svg-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </th>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                  <span className="text-muted fw-semibold d-block fs-7">Best Customers</span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-bold">90%</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                    <span className="svg-icon svg-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </th>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                  <span className="text-muted fw-semibold d-block fs-7">Amazing Templates</span>
                </td>
                <td>
                  <div className="d-flex flex-column w-100 me-2">
                    <div className="d-flex flex-stack mb-2">
                      <span className="text-muted me-2 fs-7 fw-bold">70%</span>
                    </div>
                    <div className="progress h-6px w-100">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  <a href="/" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                    <span className="svg-icon svg-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                      </svg>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Widget5;
