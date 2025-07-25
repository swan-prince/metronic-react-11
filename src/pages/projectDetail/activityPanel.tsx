import React, { FC, useState } from 'react';
import clsx from 'clsx';

const ActivityPannel: FC = () => {

  const [tab, setTab] = useState('today');

  const handleChangeTab = (e: React.MouseEvent<HTMLAnchorElement>, val: string) => {
    e.preventDefault();
    setTab(val);
  }

  return (
    <div className="card">
      <div className="card-header card-header-stretch">
        <div className="card-title d-flex align-items-center">
          <span className="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
              <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
              <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
            </svg>
          </span>
          <h3 className="fw-bold m-0 text-gray-800">Jan 23, 2022</h3>
        </div>
        <div className="card-toolbar m-0">
          <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold" role="tablist">
            <li className="nav-item" role="presentation">
              <a className={clsx("nav-link justify-content-center text-active-gray-800", { 'active': tab === 'today' })}
                data-bs-toggle="tab" role="tab" href="/"
                onClick={(e) => handleChangeTab(e, 'today')}
              >Today</a>
            </li>
            <li className="nav-item" role="presentation">
              <a id="kt_activity_week_tab"
                onClick={(e) => handleChangeTab(e, 'week')}
                className={clsx("nav-link justify-content-center text-active-gray-800", { 'active': tab === 'week' })}
                data-bs-toggle="tab" role="tab" href="/">Week</a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                onClick={(e) => handleChangeTab(e, 'month')}
                id="kt_activity_month_tab"
                className={clsx("nav-link justify-content-center text-active-gray-800", { 'active': tab === 'month' })}
                data-bs-toggle="tab" role="tab" href="/"
              >Month</a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                onClick={(e) => handleChangeTab(e, 'year')}
                id="kt_activity_year_tab"
                className={clsx("nav-link justify-content-center text-active-gray-800", { 'active': tab === 'year' })}
                data-bs-toggle="tab" role="tab"
                href="/"
              >2022</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        <div className="tab-content">
          <div id="kt_activity_today" className={clsx("card-body p-0 tab-pane fade show", { 'active': tab === 'today' })} role="tabpanel" aria-labelledby="kt_activity_today_tab">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                        <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                        <img src="/media/avatars/300-14.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                      <a href="../../demo11/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>
                      <div className="min-w-175px pe-2">
                        <span className="badge badge-light text-muted">Application Design</span>
                      </div>
                      <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                        <div className="symbol symbol-circle symbol-25px">
                          <img src="/media/avatars/300-2.jpg" alt="img" />
                        </div>
                        <div className="symbol symbol-circle symbol-25px">
                          <img src="/media/avatars/300-14.jpg" alt="img" />
                        </div>
                        <div className="symbol symbol-circle symbol-25px">
                          <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
                        </div>
                      </div>
                      <div className="min-w-125px pe-2">
                        <span className="badge badge-light-primary">In Progress</span>
                      </div>
                      <a href="../../demo11/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                    </div>
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                      <a href="../../demo11/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>
                      <div className="min-w-175px">
                        <span className="badge badge-light text-muted">CRM System Development</span>
                      </div>
                      <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                        <div className="symbol symbol-circle symbol-25px">
                          <img src="/media/avatars/300-20.jpg" alt="img" />
                        </div>
                        <div className="symbol symbol-circle symbol-25px">
                          <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
                        </div>
                      </div>
                      <div className="min-w-125px">
                        <span className="badge badge-light-success">Completed</span>
                      </div>
                      <a href="../../demo11/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                        <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n2">
                  <div className="overflow-auto pe-3">
                    <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                        <img src="/media/avatars/300-1.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                        <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="mb-5 pe-3">
                    <a href="/" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                        <img src="/media/avatars/300-23.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="" className="w-30px me-3" src="/media/svg/files/pdf.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="../../demo11/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          <div className="text-gray-400">1.9mb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/doc.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          <div className="text-gray-400">18kb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/css.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          <div className="text-gray-400">20mb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">Task
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>merged with
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                        <img src="/media/avatars/300-14.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                        <img src="/media/avatars/300-2.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-29.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-31.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-40.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                        <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">New case
                      <a href="/" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                    <div className="overflow-auto pb-5">
                      <div className="d-flex align-items-center mt-1 fs-6">
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        <a href="/" className="text-primary fw-bold me-1">Alice Tan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                        <img src="/media/avatars/300-4.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                      <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z" fill="currentColor" />
                          <path d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z" fill="currentColor" />
                        </svg>
                      </span>
                      <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                        <div className="mb-3 mb-md-0 fw-semibold">
                          <h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
                          <div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                        </div>
                        <a href="/" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                        <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                        <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">New order
                      <a href="/" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                      <a href="/" className="text-primary fw-bold me-1">Jimmy Bold</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="kt_activity_week" className={clsx("card-body p-0 tab-pane fade show", { 'active': tab === 'week' })} role="tabpanel" aria-labelledby="kt_activity_week_tab">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                        <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n2">
                  <div className="overflow-auto pe-3">
                    <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                        <img src="/media/avatars/300-1.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                        <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="mb-5 pe-3">
                    <a href="/" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                        <img src="/media/avatars/300-23.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="" className="w-30px me-3" src="/media/svg/files/pdf.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="../../demo11/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          <div className="text-gray-400">1.9mb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/doc.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          <div className="text-gray-400">18kb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/css.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          <div className="text-gray-400">20mb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">Task
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>merged with
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                        <img src="/media/avatars/300-14.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                        <img src="/media/avatars/300-2.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-29.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-31.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-40.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                        <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">New case
                      <a href="/" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                    <div className="overflow-auto pb-5">
                      <div className="d-flex align-items-center mt-1 fs-6">
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        <a href="/" className="text-primary fw-bold me-1">Alice Tan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="kt_activity_month" className={clsx("card-body p-0 tab-pane fade show", { 'active': tab === 'month' })} role="tabpanel" aria-labelledby="kt_activity_month_tab">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                        <img src="/media/avatars/300-2.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-29.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-31.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-40.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                        <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">New case
                      <a href="/" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                    <div className="overflow-auto pb-5">
                      <div className="d-flex align-items-center mt-1 fs-6">
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        <a href="/" className="text-primary fw-bold me-1">Alice Tan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                        <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                        <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">New order
                      <a href="/" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                      <a href="/" className="text-primary fw-bold me-1">Jimmy Bold</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                        <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n2">
                  <div className="overflow-auto pe-3">
                    <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                        <img src="/media/avatars/300-1.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                        <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="mb-5 pe-3">
                    <a href="/" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                        <img src="/media/avatars/300-23.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="" className="w-30px me-3" src="/media/svg/files/pdf.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="../../demo11/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          <div className="text-gray-400">1.9mb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/doc.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          <div className="text-gray-400">18kb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/css.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          <div className="text-gray-400">20mb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">Task
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>merged with
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                        <img src="/media/avatars/300-14.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="kt_activity_year" className={clsx("card-body p-0 tab-pane fade show", { 'active': tab === 'year' })} role="tabpanel" aria-labelledby="kt_activity_year_tab">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                        <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="mb-5 pe-3">
                    <a href="/" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                        <img src="/media/avatars/300-23.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="" className="w-30px me-3" src="/media/svg/files/pdf.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="../../demo11/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                          <div className="text-gray-400">1.9mb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/doc.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                          <div className="text-gray-400">18kb</div>
                        </div>
                      </div>
                      <div className="d-flex flex-aligns-center">
                        <img alt="../../demo11/dist/apps/projects/project.html" className="w-30px me-3" src="/media/svg/files/css.svg" />
                        <div className="ms-1 fw-semibold">
                          <a href="/" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                          <div className="text-gray-400">20mb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">Task
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>merged with
                      <a href="/" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                        <img src="/media/avatars/300-14.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                      <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                        <img src="/media/avatars/300-2.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto pb-5">
                    <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-29.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay me-10">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-31.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                      <div className="overlay">
                        <div className="overlay-wrapper">
                          <img alt="img" className="rounded w-150px" src="/media/stock/600x400/img-40.jpg" />
                        </div>
                        <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                          <a href="/" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                        <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mb-10 mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">New case
                      <a href="/" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                    <div className="overflow-auto pb-5">
                      <div className="d-flex align-items-center mt-1 fs-6">
                        <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                        <a href="/" className="text-primary fw-bold me-1">Alice Tan</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line w-40px"></div>
                <div className="timeline-icon symbol symbol-circle symbol-40px">
                  <div className="symbol-label bg-light">
                    <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                        <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                        <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="timeline-content mt-n1">
                  <div className="pe-3 mb-5">
                    <div className="fs-5 fw-semibold mb-2">New order
                      <a href="/" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
                    <div className="d-flex align-items-center mt-1 fs-6">
                      <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                      <a href="/" className="text-primary fw-bold me-1">Jimmy Bold</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityPannel;
