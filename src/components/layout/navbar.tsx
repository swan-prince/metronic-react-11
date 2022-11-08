import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MenuComponent } from 'assets/ts/components';
import SearchForm from './searchForm';
import ThemeMode from './themeMode';
import Profile from './profile';

const Navbar: FC = () => {

  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    MenuComponent.reinitialization();
  }, [pathname]);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement | MouseEvent>, path: string) => {
    e.preventDefault();
    navigate(path);
  }

  return (
    <div id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
      <div className="container-xxl d-flex flex-grow-1 flex-stack">
        <div className="d-flex align-items-center me-5">
          <div className="d-lg-none btn btn-icon btn-active-color-primary w-30px h-30px ms-n2 me-3" id="kt_header_menu_toggle">
            <span className="svg-icon svg-icon-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
              </svg>
            </span>
          </div>
          <a href="../../demo11/dist/index.html" onClick={(e) => handleNavigate(e, '/')}>
            <img alt="Logo" src="/media/logos/demo11.svg" className="theme-light-show h-20px h-lg-30px" />
          </a>
        </div>
        <div className="d-flex align-items-center flex-shrink-0">
          <SearchForm />

          <div className="d-flex align-items-center ms-3 ms-lg-4">
            <div className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px" id="kt_activities_toggle">
              <span className="svg-icon svg-icon-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                  <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                  <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                  <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                </svg>
              </span>
            </div>
          </div>
          <ThemeMode />
          <Profile />
          
          <div className="d-flex align-items-center ms-3 ms-lg-4">
            <div className="btn btn-icon btn-primary position-relative w-30px h-30px w-lg-40px h-lg-40px" id="kt_drawer_chat_toggle">3
              <span className="d-none bullet bullet-dot bg-danger h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="header-menu-container container-xxl d-flex flex-stack h-lg-75px w-100" id="kt_header_nav">
        <div 
          className="header-menu flex-column flex-lg-row" 
          data-kt-drawer-name="header-menu" 
          data-kt-drawer-activate="{default: true, lg: false}" 
          data-kt-drawer-direction="start" 
          data-kt-drawer-toggle="#kt_header_menu_toggle" 
          data-kt-swapper="true" 
          data-kt-swapper-mode="prepend" 
          data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
        >
          <div className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-state-primary menu-title-gray-800 menu-arrow-gray-400 align-items-stretch flex-grow-1 my-5 my-lg-0 px-2 px-lg-0 fw-semibold fs-6" id="#kt_header_menu" data-kt-menu="true">
            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
              <span className="menu-link py-3">
                <span className="menu-title">Dashboards</span>
                <span className="menu-arrow d-lg-none"></span>
              </span>
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                <div className="menu-state-bg menu-extended overflow-hidden" data-kt-menu-dismiss="true">
                  <div className="row">
                    <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/index.html" className="menu-link active">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <span className="svg-icon svg-icon-primary svg-icon-1">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                  </svg>
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">Cuentas</span>
                                <span className="fs-7 fw-semibold text-muted">Muestra tus cuentas</span>
                              </span>
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/apps/ecommerce/customers/listing.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <span className="svg-icon svg-icon-danger svg-icon-1">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M22 8H8L12 4H19C19.6 4 20.2 4.39999 20.5 4.89999L22 8ZM3.5 19.1C3.8 19.7 4.4 20 5 20H12L16 16H2L3.5 19.1ZM19.1 20.5C19.7 20.2 20 19.6 20 19V12L16 8V22L19.1 20.5ZM4.9 3.5C4.3 3.8 4 4.4 4 5V12L8 16V2L4.9 3.5Z" fill="currentColor" />
                                    <path d="M22 8L20 12L16 8H22ZM8 16L4 12L2 16H8ZM16 16L12 20L16 22V16ZM8 8L12 4L8 2V8Z" fill="currentColor" />
                                  </svg>
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">Clientes</span>
                                <span className="fs-7 fw-semibold text-muted">Consulta el listado de clientes</span>
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/apps/projects/list.html" className="menu-link">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <span className="svg-icon svg-icon-primary svg-icon-1">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M14 3V20H2V3C2 2.4 2.4 2 3 2H13C13.6 2 14 2.4 14 3ZM11 13V11C11 9.7 10.2 8.59995 9 8.19995V7C9 6.4 8.6 6 8 6C7.4 6 7 6.4 7 7V8.19995C5.8 8.59995 5 9.7 5 11V13C5 13.6 4.6 14 4 14V15C4 15.6 4.4 16 5 16H11C11.6 16 12 15.6 12 15V14C11.4 14 11 13.6 11 13Z" fill="currentColor" />
                                    <path d="M2 20H14V21C14 21.6 13.6 22 13 22H3C2.4 22 2 21.6 2 21V20ZM9 3V2H7V3C7 3.6 7.4 4 8 4C8.6 4 9 3.6 9 3ZM6.5 16C6.5 16.8 7.2 17.5 8 17.5C8.8 17.5 9.5 16.8 9.5 16H6.5ZM21.7 12C21.7 11.4 21.3 11 20.7 11H17.6C17 11 16.6 11.4 16.6 12C16.6 12.6 17 13 17.6 13H20.7C21.2 13 21.7 12.6 21.7 12ZM17 8C16.6 8 16.2 7.80002 16.1 7.40002C15.9 6.90002 16.1 6.29998 16.6 6.09998L19.1 5C19.6 4.8 20.2 5 20.4 5.5C20.6 6 20.4 6.60005 19.9 6.80005L17.4 7.90002C17.3 8.00002 17.1 8 17 8ZM19.5 19.1C19.4 19.1 19.2 19.1 19.1 19L16.6 17.9C16.1 17.7 15.9 17.1 16.1 16.6C16.3 16.1 16.9 15.9 17.4 16.1L19.9 17.2C20.4 17.4 20.6 18 20.4 18.5C20.2 18.9 19.9 19.1 19.5 19.1Z" fill="currentColor" />
                                  </svg>
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-bold text-gray-800">Proyectos</span>
                                <span className="fs-7 fw-semibold text-muted">Consulta proyectos</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="separator separator-dashed mx-5 my-5"></div>
                      <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                        <div className="d-flex flex-column me-5">
                          <div className="fs-6 fw-bold text-gray-800">Landing Page Template</div>
                          <div className="fs-7 fw-semibold text-muted">Onpe page landing template with pricing & others</div>
                        </div>
                        <a href="../../demo11/dist/landing.html" className="btn btn-sm btn-primary fw-bold">Explore</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
              <span className="menu-link py-3">
                <span className="menu-title">Pages</span>
                <span className="menu-arrow d-lg-none"></span>
              </span>
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                <div className="menu-active-bg px-4 px-lg-0">
                  <div className="d-flex w-100 overflow-auto">
                    <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                      <li className="nav-item mx-lg-1">
                        <a className="nav-link py-3 py-lg-6 active text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
                      </li>
                      <li className="nav-item mx-lg-1">
                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
                      </li>
                      <li className="nav-item mx-lg-1">
                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
                      </li>
                      <li className="nav-item mx-lg-1">
                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
                      </li>
                      <li className="nav-item mx-lg-1">
                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="/" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_widgets">Widgets</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content py-4 py-lg-8 px-lg-7">
                    <div className="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/pages/user-profile/overview.html" className="menu-link">
                                  <span className="menu-title">Overview</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/pages/user-profile/projects.html" className="menu-link">
                                  <span className="menu-title">Projects</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/pages/user-profile/campaigns.html" className="menu-link">
                                  <span className="menu-title">Campaigns</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/pages/user-profile/documents.html" className="menu-link">
                                  <span className="menu-title">Documents</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/pages/user-profile/followers.html" className="menu-link">
                                  <span className="menu-title">Followers</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/pages/user-profile/activity.html" className="menu-link">
                                  <span className="menu-title">Activity</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              <div className="mb-6">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/about.html" className="menu-link">
                                    <span className="menu-title">About</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/team.html" className="menu-link">
                                    <span className="menu-title">Our Team</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/contact.html" className="menu-link">
                                    <span className="menu-title">Contact Us</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/licenses.html" className="menu-link">
                                    <span className="menu-title">Licenses</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/sitemap.html" className="menu-link">
                                    <span className="menu-title">Sitemap</span>
                                  </a>
                                </div>
                              </div>
                              <div className="mb-0">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/careers/list.html" className="menu-link">
                                    <span className="menu-title">Careers List</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/careers/apply.html" className="menu-link">
                                    <span className="menu-title">Careers Apply</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              <div className="mb-6">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/faq/classic.html" className="menu-link">
                                    <span className="menu-title">FAQ Classic</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/faq/extended.html" className="menu-link">
                                    <span className="menu-title">FAQ Extended</span>
                                  </a>
                                </div>
                              </div>
                              <div className="mb-6">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/blog/home.html" className="menu-link">
                                    <span className="menu-title">Blog Home</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/blog/post.html" className="menu-link">
                                    <span className="menu-title">Blog Post</span>
                                  </a>
                                </div>
                              </div>
                              <div className="mb-0">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/pricing/column.html" className="menu-link">
                                    <span className="menu-title">Column Pricing</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/pricing/table.html" className="menu-link">
                                    <span className="menu-title">Table Pricing</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mb-6 mb-lg-0">
                              <div className="mb-0">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/social/feeds.html" className="menu-link">
                                    <span className="menu-title">Feeds</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/social/activity.html" className="menu-link">
                                    <span className="menu-title">Activty</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/social/followers.html" className="menu-link">
                                    <span className="menu-title">Followers</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/pages/social/settings.html" className="menu-link">
                                    <span className="menu-title">Settings</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <img src="assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
                      <div className="row">
                        <div className="col-lg-5 mb-6 mb-lg-0">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/overview.html" className="menu-link">
                                  <span className="menu-title">Overview</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/settings.html" className="menu-link">
                                  <span className="menu-title">Settings</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/security.html" className="menu-link">
                                  <span className="menu-title">Security</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/activity.html" className="menu-link">
                                  <span className="menu-title">Activity</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/billing.html" className="menu-link">
                                  <span className="menu-title">Billing</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/statements.html" className="menu-link">
                                  <span className="menu-title">Statements</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/referrals.html" className="menu-link">
                                  <span className="menu-title">Referrals</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/api-keys.html" className="menu-link">
                                  <span className="menu-title">API Keys</span>
                                </a>
                              </div>
                              <div className="menu-item p-0 m-0">
                                <a href="../../demo11/dist/account/logs.html" className="menu-link">
                                  <span className="menu-title">Logs</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <img src="assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">
                      <div className="row">
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          <div className="mb-6">
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/corporate/sign-in.html" className="menu-link">
                                <span className="menu-title">Sign-in</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/corporate/sign-up.html" className="menu-link">
                                <span className="menu-title">Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/corporate/two-steps.html" className="menu-link">
                                <span className="menu-title">Two-steps</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/corporate/reset-password.html" className="menu-link">
                                <span className="menu-title">Reset Password</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/corporate/new-password.html" className="menu-link">
                                <span className="menu-title">New Password</span>
                              </a>
                            </div>
                          </div>
                          <div className="mb-0">
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/overlay/sign-in.html" className="menu-link">
                                <span className="menu-title">Sign-in</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/overlay/sign-up.html" className="menu-link">
                                <span className="menu-title">Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/overlay/two-steps.html" className="menu-link">
                                <span className="menu-title">Two-steps</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/overlay/reset-password.html" className="menu-link">
                                <span className="menu-title">Reset Password</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/overlay/new-password.html" className="menu-link">
                                <span className="menu-title">New Password</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          <div className="mb-6">
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/creative/sign-in.html" className="menu-link">
                                <span className="menu-title">Sign-in</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/creative/sign-up.html" className="menu-link">
                                <span className="menu-title">Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/creative/two-steps.html" className="menu-link">
                                <span className="menu-title">Two-steps</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/creative/reset-password.html" className="menu-link">
                                <span className="menu-title">Reset Password</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/creative/new-password.html" className="menu-link">
                                <span className="menu-title">New Password</span>
                              </a>
                            </div>
                          </div>
                          <div className="mb-6">
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/fancy/sign-in.html" className="menu-link">
                                <span className="menu-title">Sign-in</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/fancy/sign-up.html" className="menu-link">
                                <span className="menu-title">Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/fancy/two-steps.html" className="menu-link">
                                <span className="menu-title">Two-steps</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/fancy/reset-password.html" className="menu-link">
                                <span className="menu-title">Reset Password</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/layouts/fancy/new-password.html" className="menu-link">
                                <span className="menu-title">New Password</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          <div className="mb-0">
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/extended/multi-steps-sign-up.html" className="menu-link">
                                <span className="menu-title">Multi-steps Sign-up</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/extended/two-factor-auth.html" className="menu-link">
                                <span className="menu-title">Two Factor Auth</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/general/welcome.html" className="menu-link">
                                <span className="menu-title">Welcome Message</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/general/verify-email.html" className="menu-link">
                                <span className="menu-title">Verify Email</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/extended/coming-soon.html" className="menu-link">
                                <span className="menu-title">Coming Soon</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/general/password-confirmation.html" className="menu-link">
                                <span className="menu-title">Password Confirmation</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/general/account-deactivated.html" className="menu-link">
                                <span className="menu-title">Account Deactivation</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/general/error-404.html" className="menu-link">
                                <span className="menu-title">Error 404</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/general/error-500.html" className="menu-link">
                                <span className="menu-title">Error 500</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 mb-6 mb-lg-0">
                          <div className="mb-0">
                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/email/welcome-message.html" className="menu-link">
                                <span className="menu-title">Welcome Message</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/email/reset-password.html" className="menu-link">
                                <span className="menu-title">Reset Password</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/email/subscription-confirmed.html" className="menu-link">
                                <span className="menu-title">Subscription Confirmed</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/email/card-declined.html" className="menu-link">
                                <span className="menu-title">Credit Card Declined</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/email/promo-1.html" className="menu-link">
                                <span className="menu-title">Promo 1</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/email/promo-2.html" className="menu-link">
                                <span className="menu-title">Promo 2</span>
                              </a>
                            </div>
                            <div className="menu-item p-0 m-0">
                              <a href="../../demo11/dist/authentication/email/promo-3.html" className="menu-link">
                                <span className="menu-title">Promo 3</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="row">
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              <div className="mb-0">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/general/invite-friends.html" className="menu-link">
                                    <span className="menu-title">Invite Friends</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/general/view-users.html" className="menu-link">
                                    <span className="menu-title">View Users</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/general/select-users.html" className="menu-link">
                                    <span className="menu-title">Select Users</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/general/upgrade-plan.html" className="menu-link">
                                    <span className="menu-title">Upgrade Plan</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/general/share-earn.html" className="menu-link">
                                    <span className="menu-title">Share & Earn</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/forms/new-target.html" className="menu-link">
                                    <span className="menu-title">New Target</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/forms/new-card.html" className="menu-link">
                                    <span className="menu-title">New Card</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/forms/new-address.html" className="menu-link">
                                    <span className="menu-title">New Address</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/forms/create-api-key.html" className="menu-link">
                                    <span className="menu-title">Create API Key</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/forms/bidding.html" className="menu-link">
                                    <span className="menu-title">Bidding</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              <div className="mb-6">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/create-app.html" className="menu-link">
                                    <span className="menu-title">Create App</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/create-campaign.html" className="menu-link">
                                    <span className="menu-title">Create Campaign</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/create-account.html" className="menu-link">
                                    <span className="menu-title">Create Business Acc</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/create-project.html" className="menu-link">
                                    <span className="menu-title">Create Project</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                    <span className="menu-title">Top Up Wallet</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/offer-a-deal.html" className="menu-link">
                                    <span className="menu-title">Offer a Deal</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
                                    <span className="menu-title">Two Factor Auth</span>
                                  </a>
                                </div>
                              </div>
                              <div className="mb-0">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/search/horizontal.html" className="menu-link">
                                    <span className="menu-title">Horizontal</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/search/vertical.html" className="menu-link">
                                    <span className="menu-title">Vertical</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/search/users.html" className="menu-link">
                                    <span className="menu-title">Users</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/search/select-location.html" className="menu-link">
                                    <span className="menu-title">Select Location</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              <div className="mb-0">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/horizontal.html" className="menu-link">
                                    <span className="menu-title">Horizontal</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/vertical.html" className="menu-link">
                                    <span className="menu-title">Vertical</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/two-factor-authentication.html" className="menu-link">
                                    <span className="menu-title">Two Factor Auth</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/create-app.html" className="menu-link">
                                    <span className="menu-title">Create App</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/create-campaign.html" className="menu-link">
                                    <span className="menu-title">Create Campaign</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/create-account.html" className="menu-link">
                                    <span className="menu-title">Create Account</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/create-project.html" className="menu-link">
                                    <span className="menu-title">Create Project</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                    <span className="menu-title">Top Up Wallet</span>
                                  </a>
                                </div>
                                <div className="menu-item p-0 m-0">
                                  <a href="../../demo11/dist/utilities/wizards/offer-a-deal.html" className="menu-link">
                                    <span className="menu-title">Offer a Deal</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 pe-lg-5">
                          <img src="assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">
                      <div className="row">
                        <div className="col-lg-4 mb-6 mb-lg-0">
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/widgets/lists.html" className="menu-link">
                              <span className="menu-title">Lists</span>
                            </a>
                          </div>
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/widgets/statistics.html" className="menu-link">
                              <span className="menu-title">Statistics</span>
                            </a>
                          </div>
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/widgets/charts.html" className="menu-link">
                              <span className="menu-title">Charts</span>
                            </a>
                          </div>
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/widgets/mixed.html" className="menu-link">
                              <span className="menu-title">Mixed</span>
                            </a>
                          </div>
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/widgets/tables.html" className="menu-link">
                              <span className="menu-title">Tables</span>
                            </a>
                          </div>
                          <div className="menu-item p-0 m-0">
                            <a href="../../demo11/dist/widgets/feeds.html" className="menu-link">
                              <span className="menu-title">Feeds</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <img src="assets/media/stock/900x600/44.jpg" className="rounded mw-100" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
              <span className="menu-link py-3">
                <span className="menu-title">Apps</span>
                <span className="menu-arrow d-lg-none"></span>
              </span>
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor" />
                          <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Projects</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="/" onClick={(e) => handleNavigate(e, '/projects')}>
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">My Projects</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="/" onClick={(e) => handleNavigate(e, '/project-detail')}>
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">View Project</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/projects/targets.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Targets</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/projects/budget.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Budget</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/projects/users.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Users</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/projects/files.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Files</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/projects/activity.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Activity</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/projects/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z" fill="currentColor" />
                          <path opacity="0.3" d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z" fill="currentColor" />
                          <path opacity="0.3" d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z" fill="currentColor" />
                          <path d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">eCommerce</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Catalog</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/catalog/products.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Products</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/catalog/categories.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Categories</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/catalog/add-product.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Add Product</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/catalog/edit-product.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Edit Product</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/catalog/add-category.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Add Category</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/catalog/edit-category.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Edit Category</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Sales</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/sales/listing.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Orders Listing</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/sales/details.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Order Details</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/sales/add-order.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Add Order</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/sales/edit-order.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Edit Order</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Customers</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div className="menu-item">
                          <a className="menu-link py-3" onClick={(e) => handleNavigate(e, '/customers')} href="/">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Customers Listing</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/customers/details.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Customers Details</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Reports</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-accordion">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/reports/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Products Viewed</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/reports/sales.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Sales</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/reports/returns.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Returns</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/reports/customer-orders.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Customer Orders</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/reports/shipping.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Shipping</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/ecommerce/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                          <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Support Center</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/overview.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Overview</span>
                      </a>
                    </div>
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Tickets</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/tickets/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Ticket List</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/tickets/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Ticket View</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Tutorials</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/tutorials/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Tutorials List</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/tutorials/post.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Tutorials Post</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/faq.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">FAQ</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/licenses.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Licenses</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/support-center/contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                          <path d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">User Management</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Users</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/user-management/users/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Users List</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/user-management/users/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">View User</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Roles</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/user-management/roles/list.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Roles List</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/user-management/roles/view.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">View Roles</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/user-management/permissions.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Permissions</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z" fill="currentColor" />
                          <path opacity="0.3" d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z" fill="currentColor" />
                          <path d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Contacts</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/contacts/getting-started.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/contacts/add-contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Add Contact</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/contacts/edit-contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Edit Contact</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/contacts/view-contact.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">View Contact</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                          <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                          <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Subscriptions</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/subscriptions/getting-started.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/subscriptions/list.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Subscription List</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/subscriptions/add.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Add Subscription</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/subscriptions/view.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">View Subscription</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                          <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Customers</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/customers/getting-started.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Getting Started</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="/" onClick={(e) => handleNavigate(e, '/customers')}>
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Customer Listing</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="/" onClick={(e) => handleNavigate(e, '/customer-detail')}>
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Customer Details</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                          <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Invoice Management</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                      <span className="menu-link py-3">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Profile</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/invoices/view/invoice-1.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Invoice 1</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/invoices/view/invoice-2.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Invoice 2</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a className="menu-link py-3" href="../../demo11/dist/apps/invoices/view/invoice-3.html">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Invoice 3</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/invoices/create.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Create Invoice</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor" />
                          <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor" />
                          <path d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">File Manager</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/file-manager/folders.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Folders</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/file-manager/files.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Files</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/file-manager/blank.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Blank Directory</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/file-manager/settings.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Settings</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                          <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Inbox</span>
                    <span className="menu-arrow"></span>
                  </span>                
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/inbox/listing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Messages</span>
                        <span className="menu-badge">
                          <span className="badge badge-light-success">3</span>
                        </span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/inbox/compose.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Compose</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/inbox/reply.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">View & Reply</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                  <span className="menu-link py-3">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                          <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                          <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Chat</span>
                    <span className="menu-arrow"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/chat/private.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Private Chat</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/chat/group.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Group Chat</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="../../demo11/dist/apps/chat/drawer.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot"></span>
                        </span>
                        <span className="menu-title">Drawer Chat</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <a className="menu-link py-3" href="../../demo11/dist/apps/calendar.html">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                          <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                          <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Calendar</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
              <span className="menu-link py-3">
                <span className="menu-title">Help</span>
                <span className="menu-arrow d-lg-none"></span>
              </span>
              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                <div className="menu-item">
                  <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor" />
                          <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Components</span>
                  </a>
                </div>
                <div className="menu-item">
                  <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs" target="blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                          <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Documentation</span>
                  </a>
                </div>
                <div className="menu-item">
                  <a className="menu-link py-3" href="https://preview.keenthemes.com/metronic8/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                          <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Layout Builder</span>
                  </a>
                </div>
                <div className="menu-item">
                  <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="blank">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z" fill="currentColor" />
                          <path opacity="0.3" d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z" fill="currentColor" />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Changelog v8.1.5</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 p-4 p-lg-0 me-lg-2">
            <a href="https://preview.keenthemes.com/html/metronic/docs" className="btn btn-sm btn-light-primary fw-bold w-100 w-lg-auto" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">Docs & Components</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
