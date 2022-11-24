import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { useDetectClickOutside } from 'react-detect-click-outside';

import CreateProject from './createProject';
import CreateAccount from './createAccount';

import { MasterInit } from 'assets/layout/MasterInit';

import 'assets/css/landing.css';

const LandingPage: FC = () => {

  const [openSidebar, setOpenSidebar] = useState(false);
  const [createProject, setCreateProject] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  const ref = useDetectClickOutside({ onTriggered: () => setOpenSidebar(false) });

  return (
    <div className='page-bg landing-page' style={{ backgroundImage: 'url(/media/misc/page-bg.jpg)' }}>
      <div className="d-flex flex-column flex-root">
        <div className="page launcher sidebar-enabled d-flex flex-row flex-column-fluid me-lg-5" id="kt_page">
          <div className="d-flex flex-row-fluid">
            <div className="d-flex flex-column flex-row-fluid align-items-center">
              <div className="d-flex flex-column flex-column-fluid mb-5 mb-lg-10">
                <div className="d-flex flex-center pt-10 pt-lg-0 mb-10 mb-lg-0 h-lg-225px">
                  <div className="btn btn-icon btn-active-color-primary w-30px h-30px d-lg-none me-4 ms-n15" id="kt_sidebar_toggle">
                    <span ref={ref} className="svg-icon svg-icon-1" onClick={() => setOpenSidebar(!openSidebar)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                        <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <a href="../../demo10/dist/index.html">
                    <img alt="Logo" src="/media/logos/default-small.svg" className="h-70px" />
                  </a>
                </div>
                <div className="row g-7 w-xxl-850px">
                  <div className="col-xxl-5">
                    <div className="card border-0 shadow-none h-lg-100" style={{ backgroundColor: '#A838FF' }}>
                      <div className="card-body d-flex flex-column flex-center pb-0 pt-15">
                        <div className="px-10 mb-10">
                          <h3 className="text-white mb-2 fw-bolder ttext-center text-uppercase mb-6">Sell On Metronic</h3>
                          <div className="mb-7">
                            <div className="d-flex align-items-center mb-2">
                              <span className="svg-icon svg-icon-4 svg-icon-white opacity-75 me-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                  <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span className="text-white opacity-75">Easy Tool</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <span className="svg-icon svg-icon-4 svg-icon-white opacity-75 me-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                  <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span className="text-white opacity-75">Fast Reports</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                              <span className="svg-icon svg-icon-4 svg-icon-white opacity-75 me-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                  <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span className="text-white opacity-75">Up To 75% Share</span>
                            </div>
                          </div>
                          <a href="../../demo10/dist/dashboard.html" className="btn btn-hover-rise text-white bg-white bg-opacity-10 text-uppercase fs-7 fw-bold">Go To Dashboard</a>
                        </div>
                        <img className="mw-100 h-225px mx-auto mb-lg-n18" src="/media/illustrations/sigma-1/12.png" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-7">
                    <div className="row g-lg-7">
                      <div className="col-sm-6">
                        <a href="/"
                          className="card border-0 shadow-none min-h-200px mb-7" style={{ backgroundColor: '#F9666E' }}
                          onClick={(e) => {
                            e.preventDefault();
                            setCreateProject(true);
                          }}
                        >
                          <div className="card-body d-flex flex-column flex-center text-center">
                            <img className="mw-100 h-100px mb-7 mx-auto" src="/media/illustrations/sigma-1/4.png" />
                            <h4 className="text-white fw-bold text-uppercase">Start A Project</h4>
                          </div>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a href="/"
                          className="card border-0 shadow-none min-h-200px mb-7" style={{ backgroundColor: '#35D29A' }}
                          onClick={(e) => {
                            e.preventDefault();
                            setCreateAccount(true);
                          }}
                        >
                          <div className="card-body d-flex flex-column flex-center text-center">
                            <img className="mw-100 h-100px mb-7 mx-auto" src="/media/illustrations/sigma-1/5.png" />
                            <h4 className="text-white fw-bold text-uppercase">Create Account</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="card border-0 shadow-none min-h-200px" style={{ backgroundColor: '#D5D83D' }}>
                      <div className="card-body d-flex flex-center flex-wrap">
                        <img className="mw-100 h-200px me-4 mb-5 mb-lg-0" src="/media/illustrations/sigma-1/11.png" />
                        <div className="d-flex flex-column align-items-center align-items-md-start flex-grow-1" data-theme="light">
                          <h3 className="text-gray-900 fw-bolder text-uppercase mb-5">Quick Guide</h3>
                          <div className="text-gray-800 mb-5 text-center text-md-start">Explore our powerful
                            <br />documentation</div>
                          <a href="https://preview.keenthemes.com/html/metronic/docs" className="btn btn-hover-rise text-gray-900 text-uppercase fs-7 fw-bold" style={{ backgroundColor: '#EBEE51' }}>Learn More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column-auto flex-center">
                <ul className="menu fw-semibold order-1">
                  <li className="menu-item">
                    <a href="https://keenthemes.com" target="_blank" className="menu-link text-white opacity-50 opacity-100-hover px-3">About</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" className="menu-link text-white opacity-50 opacity-100-hover px-3">Documentation</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://devs.keenthemes.com" target="_blank" className="menu-link text-white opacity-50 opacity-100-hover px-3">Support</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link text-white opacity-50 opacity-100-hover px-3">Purchase</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            id="kt_sidebar"
            className={clsx("sidebar px-5 py-5 py-lg-8 px-lg-11 drawer", { 'drawer-end': !openSidebar, 'drawer-on': openSidebar })}
            data-kt-drawer-name="sidebar"
            data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="375px"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_sidebar_toggle"
          // ref={ref}
          >
            <div className="d-flex flex-stack mb-5 mb-lg-8" id="kt_sidebar_header">
              <h2 className="text-white">Updates</h2>
              <div className="ms-1">
                <button 
                  className="btn btn-icon btn-sm btn-color-white btn-active-color-primary me-n5"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip='top-end'
                // data-kt-menu-overflow="true"
                >
                  <span className="svg-icon svg-icon-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
                      <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                      <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                      <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                    </svg>
                  </span>
                </button>
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                  data-kt-menu="true"
                >
                  <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                  </div>
                  <div className="separator mb-3 opacity-75"></div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Ticket</a>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Customer</a>
                  </div>
                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow"></span>
                    </a>
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Admin Group</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Staff Group</a>
                      </div>
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Member Group</a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Contact</a>
                  </div>
                  <div className="separator mt-3 opacity-75"></div>
                  <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 mb-lg-8" id="kt_sidebar_body">
              <div className="hover-scroll-y me-n6 pe-6" id="kt_sidebar_body" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_sidebar_header, #kt_sidebar_footer" data-kt-scroll-wrappers="#kt_page, #kt_sidebar, #kt_sidebar_body" data-kt-scroll-offset="0">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-line w-40px"></div>
                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-2 svg-icon-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                            <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2 text-white">Created 2 new tasks in "Development"</div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-white opacity-50 me-2 fs-7">Added at 4:23 PM by</div>
                          <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                            <img src="/media/avatars/300-14.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="pb-5">
                        <div className="d-flex flex-stack border rounded px-7 py-3">
                          <a href="#" className="fs-5 text-white text-hover-success fw-semibold w-375px">Meeting with customer</a>
                          <a href="#" className="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px"></div>
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-2 svg-icon-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                            <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n2">
                      <div className="pe-3">
                        <div className="fs-5 text-white fw-semibold mb-2">2 new entries in "Landing Page"</div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-white opacity-50 me-2 fs-7">4:23 PM by</div>
                          <a href="#" className="text-success fs-7 fw-bold">Adam Williams</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px"></div>
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-2 svg-icon-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                            <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="mb-5 pe-3">
                        <a href="#" className="fs-5 fw-semibold text-white text-hover-success mb-2">3 New Incoming Project Files</a>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-white opacity-50 me-2 fs-7">Sent at 10:30 PM by</div>
                          <a href="#" className="text-success fs-7 fw-bold">You</a>
                        </div>
                      </div>
                      <div className="pb-5">
                        <div className="d-flex flex-stack border rounded p-4 mb-5">
                          <div className="d-flex align-items-center me-2">
                            <img alt="" className="w-30px me-3" src="/media/svg/files/doc.svg" />
                            <div className="d-flex flex-stack">
                              <div className="d-flex flex-column me-2">
                                <a href="#" className="fs-7 text-white text-hover-success fw-bold">App Guidelines</a>
                                <div className="text-white opacity-75">1.9mb</div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">View</a>
                        </div>
                        <div className="d-flex flex-stack border rounded p-4">
                          <div className="d-flex align-items-center me-2">
                            <img alt="" className="w-30px me-3" src="/media/svg/files/pdf.svg" />
                            <div className="d-flex flex-stack">
                              <div className="d-flex flex-column me-2">
                                <a href="#" className="fs-7 text-white text-hover-success fw-bold">Reports</a>
                                <div className="text-gray-400">2.5mb</div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px"></div>
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-2 svg-icon-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                            <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n2">
                      <div className="pe-3">
                        <div className="fs-5 text-white fw-semibold mb-2">
                          <a href="#" className="text-success">KTApp.js</a>&nbsp;has new merged into Master</div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-white opacity-50 me-2 fs-7">5:30 AM by</div>
                          <a href="#" className="text-success fs-7 fw-bold">Nick Stone</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px"></div>
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-2 svg-icon-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                            <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n2">
                      <div className="pe-3">
                        <div className="fs-5 text-white fw-semibold mb-2">2 new notifications received</div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-white opacity-50 me-2 fs-7">10:30 AM by</div>
                          <a href="#" className="text-success fs-7 fw-bold">Marcus Fold</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px"></div>
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-2 svg-icon-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                            <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="mb-5 pe-3">
                        <a href="#" className="fs-5 fw-semibold text-white text-hover-success mb-2">You have received a payment</a>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-white opacity-50 me-2 fs-7">10.40 PM by</div>
                          <a href="#" className="text-success fs-7 fw-bold">Keenthemes</a>
                        </div>
                      </div>
                      <div className="pb-5">
                        <div className="d-flex flex-stack border rounded p-4">
                          <div className="d-flex align-items-center me-2">
                            <span className="svg-icon svg-icon-2x svg-icon-white me-4">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor" />
                                <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor" />
                              </svg>
                            </span>
                            <div className="d-flex flex-stack">
                              <div className="d-flex flex-column me-2">
                                <a href="#" className="fs-7 text-white text-hover-success fw-bold">Withdrawing Funds</a>
                                <div className="text-white opacity-75">Ref: #ert-78</div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="btn btn-sm btn-hover-rise text-white bg-white bg-opacity-10">View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px"></div>
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label">
                        <span className="svg-icon svg-icon-2 svg-icon-white">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                            <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                            <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mt-n1">
                      <div className="pe-3">
                        <div className="fs-5 text-white fw-semibold mb-2">2 new entries in UI Design”</div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-white opacity-50 me-2 fs-7">10:30 AM by</div>
                          <a href="#" className="text-success fs-7 fw-bold">Lisa Wong</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center" id="kt_sidebar_footer">
              <a href="../../demo10/dist/pages/user-profile/activity.html" className="btn btn-hover-rise text-white bg-white bg-opacity-10 text-uppercase fs-7 fw-bold">View Updates</a>
            </div>
          </div>
        </div>
      </div>
      <CreateProject
        show={createProject}
        onHide={() => setCreateProject(false)}
      />
      <CreateAccount
        show={createAccount}
        onHide={() => setCreateAccount(false)}
      />
      {/* <MasterInit /> */}
    </div>
  )
}

export default LandingPage;
