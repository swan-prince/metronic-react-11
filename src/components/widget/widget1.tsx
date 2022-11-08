import React, { FC } from 'react';

import FilterOptions from 'components/filterOptions';

const Widget1: FC = () => {

  return (
    <div className="card">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Latest Arrivals</span>
          <span className="text-muted mt-1 fw-semibold fs-7">More than 100 new products</span>
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
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-150px"></th>
                <th className="p-0 min-w-125px"></th>
                <th className="p-0 min-w-40px"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </td>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Top Authors</a>
                  <span className="text-muted fw-semibold d-block fs-7">Successful Fellas</span>
                </td>
                <td className="text-end">
                  <span className="badge badge-light-danger fw-semibold me-1">Angular</span>
                  <span className="badge badge-light-info fw-semibold me-1">PHP</span>
                </td>
                <td className="text-end">
                  <span className="text-muted fw-bold">4600 Users</span>
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
                <td>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </td>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                  <span className="text-muted fw-semibold d-block fs-7">Most Successful</span>
                </td>
                <td className="text-end">
                  <span className="badge badge-light-danger fw-semibold me-1">HTML</span>
                  <span className="badge badge-light-info fw-semibold me-1">CSS</span>
                </td>
                <td className="text-end">
                  <span className="text-muted fw-bold">7200 Users</span>
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
                <td>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </td>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                  <span className="text-muted fw-semibold d-block fs-7">Awesome Users</span>
                </td>
                <td className="text-end">
                  <span className="badge badge-light-danger fw-semibold me-1">React</span>
                  <span className="badge badge-light-info fw-semibold me-1">SASS</span>
                </td>
                <td className="text-end">
                  <span className="text-muted fw-bold">890 Users</span>
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
                <td>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </td>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                  <span className="text-muted fw-semibold d-block fs-7">Best Customers</span>
                </td>
                <td className="text-end">
                  <span className="badge badge-light-danger fw-semibold me-1">Java</span>
                  <span className="badge badge-light-info fw-semibold me-1">PHP</span>
                </td>
                <td className="text-end">
                  <span className="text-muted fw-bold">6370 Users</span>
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
                <td>
                  <div className="symbol symbol-50px me-2">
                    <span className="symbol-label">
                      <img src="/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                    </span>
                  </div>
                </td>
                <td>
                  <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                  <span className="text-muted fw-semibold d-block fs-7">Amazing Templates</span>
                </td>
                <td className="text-end">
                  <span className="badge badge-light-danger fw-semibold me-1">Python</span>
                  <span className="badge badge-light-info fw-semibold me-1">MySQL</span>
                </td>
                <td className="text-end">
                  <span className="text-muted fw-bold">354 Users</span>
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

export default Widget1;
