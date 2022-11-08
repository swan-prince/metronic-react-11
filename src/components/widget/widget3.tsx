import React, { FC, useState } from 'react';
import clsx from 'clsx';

const Widget3: FC = () => {

  const [tab, setTab] = useState('month');

  const handleChangeTab = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, val: string) => {
    e.preventDefault();
    setTab(val);
  }

  return (
    <div className="card">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Latest Products</span>
          <span className="text-muted mt-1 fw-semibold fs-7">More than 400 new products</span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav">
            <li className="nav-item">
              <a
                onClick={(e) => handleChangeTab(e, 'month')}
                className={clsx("nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1", {'active': tab === 'month'})}
                data-bs-toggle="tab" href="#kt_table_widget_5_tab_1"
              >
                Month
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => handleChangeTab(e, 'week')}
                className={clsx("nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1", {'active': tab === 'week'})}
                data-bs-toggle="tab"
                href="#kt_table_widget_5_tab_2"
              >
                Week
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => handleChangeTab(e, 'day')}
                className={clsx("nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1", {'active': tab === 'day'})}
                data-bs-toggle="tab"
                href="#kt_table_widget_5_tab_3"
              >
                Day
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body py-3">
        <div className="tab-content">
          <div className={clsx("tab-pane fade", {"show active": tab === 'month'})} id="kt_table_widget_5_tab_1">
            <div className="table-responsive">
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                <thead>
                  <tr className="border-0">
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-140px"></th>
                    <th className="p-0 min-w-110px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                      <span className="text-muted fw-semibold d-block">Movie Creator</span>
                    </td>
                    <td className="text-end text-muted fw-bold">React, HTML</td>
                    <td className="text-end">
                      <span className="badge badge-light-success">Approved</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                      <span className="text-muted fw-semibold d-block">Most Successful</span>
                    </td>
                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">In Progress</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                      <span className="text-muted fw-semibold d-block">Awesome Users</span>
                    </td>
                    <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                    <td className="text-end">
                      <span className="badge badge-light-primary">Success</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                      <span className="text-muted fw-semibold d-block">Movie Creator</span>
                    </td>
                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                    <td className="text-end">
                      <span className="badge badge-light-danger">Rejected</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                      <span className="text-muted fw-semibold d-block">Best Customers</span>
                    </td>
                    <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">In Progress</span>
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
          <div className={clsx("tab-pane fade", {"show active": tab === 'week'})} id="kt_table_widget_5_tab_2">
            <div className="table-responsive">
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                <thead>
                  <tr className="border-0">
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-140px"></th>
                    <th className="p-0 min-w-110px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                      <span className="text-muted fw-semibold d-block">Movie Creator</span>
                    </td>
                    <td className="text-end text-muted fw-bold">React, HTML</td>
                    <td className="text-end">
                      <span className="badge badge-light-success">Approved</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                      <span className="text-muted fw-semibold d-block">Most Successful</span>
                    </td>
                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">In Progress</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                      <span className="text-muted fw-semibold d-block">Movie Creator</span>
                    </td>
                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                    <td className="text-end">
                      <span className="badge badge-light-danger">Rejected</span>
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
          <div className={clsx("tab-pane fade", {"show active": tab === 'day'})} id="kt_table_widget_5_tab_3">
            <div className="table-responsive">
              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                <thead>
                  <tr className="border-0">
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px"></th>
                    <th className="p-0 min-w-140px"></th>
                    <th className="p-0 min-w-110px"></th>
                    <th className="p-0 min-w-50px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                      <span className="text-muted fw-semibold d-block">Best Customers</span>
                    </td>
                    <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">In Progress</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                      <span className="text-muted fw-semibold d-block">Movie Creator</span>
                    </td>
                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                    <td className="text-end">
                      <span className="badge badge-light-danger">Rejected</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                      <span className="text-muted fw-semibold d-block">Awesome Users</span>
                    </td>
                    <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                    <td className="text-end">
                      <span className="badge badge-light-primary">Success</span>
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
                      <div className="symbol symbol-45px me-2">
                        <span className="symbol-label">
                          <img src="/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="/" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                      <span className="text-muted fw-semibold d-block">Most Successful</span>
                    </td>
                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                    <td className="text-end">
                      <span className="badge badge-light-warning">In Progress</span>
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
      </div>
    </div>
  )
}

export default Widget3;
