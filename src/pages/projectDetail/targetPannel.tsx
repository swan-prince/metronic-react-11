import React, { FC, useState } from 'react';
import clsx from 'clsx';

const TargetPannel: FC = () => {

  const [tab, setTab] = useState('card');

  return (
    <div>
      <div className="d-flex flex-wrap flex-stack pt-10 pb-8">
        <h3 className="fw-bold my-2">Project Targets
          <span className="fs-6 text-gray-400 fw-semibold ms-1">by Recent Updates ↓</span></h3>
        <div className="d-flex flex-wrap my-1">
          <ul className="nav nav-pills me-5">
            <li className="nav-item m-0">
              <a
                href='/'
                className={clsx("btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3", { 'active': tab === 'card' })}
                onClick={(e) => {
                  e.preventDefault();
                  setTab('card');
                }}
              >
                <span className="svg-icon svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                      <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                      <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav-item m-0">
              <a
                href='/'
                className={clsx("btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3", { 'active': tab === 'table' })}
                onClick={(e) => {
                  e.preventDefault();
                  setTab('table');
                }}
              >
                <span className="svg-icon svg-icon-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <div className="my-0">
            <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-sm form-select-solid w-150px">
              <option value="1">Recently Updated</option>
              <option value="2">Last Month</option>
              <option value="3">Last Quarter</option>
              <option value="4">Last Year</option>
            </select>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className={clsx("tab-pane fade", { 'show active': tab === 'card' })}>
          <div className="row g-9">
            <div className="col-md-4 col-lg-12 col-xl-4">
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">Yet to start
                    <span className="fs-6 text-gray-400 ms-2">2</span></div>
                  <div>
                    <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                      <span className="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                          <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          </g>
                        </svg>
                      </span>
                    </button>
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_633e70e1c7bfb">
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      <div className="separator border-gray-200"></div>
                      <div className="px-7 py-5">
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Status:</label>
                          <div>
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_633e70e1c7bfb" data-allow-clear="true">
                              <option></option>
                              <option value="1">Approved</option>
                              <option value="2">Pending</option>
                              <option value="2">In Process</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Member Type:</label>
                          <div className="d-flex">
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" value="1" />
                              <span className="form-check-label">Author</span>
                            </label>
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" value="2" checked />
                              <span className="form-check-label">Customer</span>
                            </label>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Notifications:</label>
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="notifications" checked />
                            <label className="form-check-label">Enabled</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                          <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-3px w-100 bg-warning"></div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">UI Design</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">Meeting with customer</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                        <img alt="Pic" src="/media/avatars/300-2.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Harry Mcpherson">
                        <img alt="Pic" src="/media/avatars/300-19.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">1</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">Phase 2.6 QA</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">User Module Testing</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer – the entire process writing a blog post often.</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                        <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">3</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/" className="btn btn-primary er w-100 fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Create New Target</a>
            </div>
            <div className="col-md-4 col-lg-12 col-xl-4">
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">In Progress
                    <span className="fs-6 text-gray-400 ms-2">4</span></div>
                  <div>
                    <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                      <span className="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                          <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          </g>
                        </svg>
                      </span>
                    </button>
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_633e70e1ca385">
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      <div className="separator border-gray-200"></div>
                      <div className="px-7 py-5">
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Status:</label>
                          <div>
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_633e70e1ca385" data-allow-clear="true">
                              <option></option>
                              <option value="1">Approved</option>
                              <option value="2">Pending</option>
                              <option value="2">In Process</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Member Type:</label>
                          <div className="d-flex">
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" value="1" />
                              <span className="form-check-label">Author</span>
                            </label>
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" value="2" checked />
                              <span className="form-check-label">Customer</span>
                            </label>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Notifications:</label>
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="notifications" checked />
                            <label className="form-check-label">Enabled</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                          <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-3px w-100 bg-primary"></div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">Development</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">Sales report page</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer takes a couple hours</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                        <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                        <img alt="Pic" src="/media/avatars/300-7.jpg" />
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">Testing</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">Meeting with customer</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                        <img alt="Pic" src="/media/avatars/300-20.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Harry Mcpherson">
                        <img alt="Pic" src="/media/avatars/300-19.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">UI Design</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">Design main Dashboard</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer takes a couple hours</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                        <img alt="Pic" src="/media/avatars/300-20.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                        <img alt="Pic" src="/media/avatars/300-7.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">1</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">Phase 2.6 QA</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">User Module Testing</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer – the entire process writing a blog post often.</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                        <img alt="Pic" src="/media/avatars/300-2.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                        <img alt="Pic" src="/media/avatars/300-12.jpg" />
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">6</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-12 col-xl-4">
              <div className="mb-9">
                <div className="d-flex flex-stack">
                  <div className="fw-bold fs-4">Completed
                    <span className="fs-6 text-gray-400 ms-2">3</span></div>
                  <div>
                    <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                      <span className="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                          <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          </g>
                        </svg>
                      </span>
                    </button>
                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_633e70e1ce22c">
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                      </div>
                      <div className="separator border-gray-200"></div>
                      <div className="px-7 py-5">
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Status:</label>
                          <div>
                            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_633e70e1ce22c" data-allow-clear="true">
                              <option></option>
                              <option value="1">Approved</option>
                              <option value="2">Pending</option>
                              <option value="2">In Process</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Member Type:</label>
                          <div className="d-flex">
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input className="form-check-input" type="checkbox" value="1" />
                              <span className="form-check-label">Author</span>
                            </label>
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input className="form-check-input" type="checkbox" value="2" checked />
                              <span className="form-check-label">Customer</span>
                            </label>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-semibold">Notifications:</label>
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="notifications" checked />
                            <label className="form-check-label">Enabled</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                          <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-3px w-100 bg-success"></div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">UI Design</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">Branding Logo</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                        <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                        <img alt="Pic" src="/media/avatars/300-12.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">8</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">QA</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">To check User Management</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer takes a couple hours</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                        <img alt="Pic" src="/media/avatars/300-2.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                        <span className="symbol-label bg-info text-inverse-info fw-bold">P</span>
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">1</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-6 mb-xl-9">
                <div className="card-body">
                  <div className="d-flex flex-stack mb-3">
                    <div className="badge badge-light">Phase 2.6 QA</div>
                    <div>
                      <button type="button" className="btn btn-sm btn-icon btn-color-light-dark btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        <span className="svg-icon svg-icon-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                              <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                              <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                              <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                            </g>
                          </svg>
                        </span>
                      </button>
                      <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                        <div className="menu-item px-3">
                          <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Create Invoice</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link flex-stack px-3">Create Payment
                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-3">Generate Bill</a>
                        </div>
                        <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                          <a href="/" className="menu-link px-3">
                            <span className="menu-title">Subscription</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Plans</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Billing</a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="/" className="menu-link px-3">Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                                  <span className="form-check-label text-muted fs-6">Recuring</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-3 my-1">
                          <a href="/" className="menu-link px-3">Settings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <a href="/" className="fs-4 fw-bold mb-1 text-gray-900 text-hover-primary">User Module Testing</a>
                  </div>
                  <div className="fs-6 fw-semibold text-gray-600 mb-5">First, a disclaimer – the entire process writing a blog post often.</div>
                  <div className="d-flex flex-stack flex-wrapr">
                    <div className="symbol-group symbol-hover my-1">
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                        <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                        <img alt="Pic" src="/media/avatars/300-2.jpg" />
                      </div>
                      <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                        <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                      </div>
                    </div>
                    <div className="d-flex my-1">
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M4.425 20.525C2.525 18.625 2.525 15.525 4.425 13.525L14.825 3.125C16.325 1.625 18.825 1.625 20.425 3.125C20.825 3.525 20.825 4.12502 20.425 4.52502C20.025 4.92502 19.425 4.92502 19.025 4.52502C18.225 3.72502 17.025 3.72502 16.225 4.52502L5.82499 14.925C4.62499 16.125 4.62499 17.925 5.82499 19.125C7.02499 20.325 8.82501 20.325 10.025 19.125L18.425 10.725C18.825 10.325 19.425 10.325 19.825 10.725C20.225 11.125 20.225 11.725 19.825 12.125L11.425 20.525C9.525 22.425 6.425 22.425 4.425 20.525Z" fill="currentColor" />
                            <path d="M9.32499 15.625C8.12499 14.425 8.12499 12.625 9.32499 11.425L14.225 6.52498C14.625 6.12498 15.225 6.12498 15.625 6.52498C16.025 6.92498 16.025 7.525 15.625 7.925L10.725 12.8249C10.325 13.2249 10.325 13.8249 10.725 14.2249C11.125 14.6249 11.725 14.6249 12.125 14.2249L19.125 7.22493C19.525 6.82493 19.725 6.425 19.725 5.925C19.725 5.325 19.525 4.825 19.125 4.425C18.725 4.025 18.725 3.42498 19.125 3.02498C19.525 2.62498 20.125 2.62498 20.525 3.02498C21.325 3.82498 21.725 4.825 21.725 5.925C21.725 6.925 21.325 7.82498 20.525 8.52498L13.525 15.525C12.325 16.725 10.525 16.725 9.32499 15.625Z" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">10</span>
                      </div>
                      <div className="border border-dashed border-gray-300 rounded py-2 px-3 ms-3">
                        <span className="svg-icon svg-icon-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span className="ms-1 fs-7 fw-bold text-gray-600">7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx("tab-pane fade", { 'show active': tab === 'table' })}>
          <div className="card card-flush">
            <div className="card-body pt-3">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                  <table id="kt_profile_overview_table" className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold">
                    <thead className="fs-7 text-gray-400 text-uppercase">
                      <tr>
                        <th className="min-w-250px">Target</th>
                        <th className="min-w-90px">Section</th>
                        <th className="min-w-150px">Due Date</th>
                        <th className="min-w-90px">Members</th>
                        <th className="min-w-90px">Status</th>
                        <th className="min-w-50px"></th>
                      </tr>
                    </thead>
                    <tbody className="fs-6">
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">Meeting with customer</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">UI Design</span>
                        </td>
                        <td>Apr 19, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                              <img alt="Pic" src="/media/avatars/300-2.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="John Mixin">
                              <img alt="Pic" src="/media/avatars/300-14.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                              <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-primary fw-bold me-auto">In Progress</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">User Module Testing</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">Phase 2.6 QA</span>
                        </td>
                        <td>Mar 6, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                              <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Robin Watterman">
                              <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">Completed</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">Sales report page</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">QA</span>
                        </td>
                        <td>May 28, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                              <img alt="Pic" src="/media/avatars/300-2.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Kristen Goodwin">
                              <img alt="Pic" src="/media/avatars/300-9.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Mikaela Collins">
                              <span className="symbol-label bg-info text-inverse-info fw-bold">M</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">Yet to start</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">Meeting with customer</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">Prototype</span>
                        </td>
                        <td>Mar 20, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Robin Watterman">
                              <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Brian Cox">
                              <img alt="Pic" src="/media/avatars/300-5.jpg" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">Completed</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">Design main Dashboard</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">UI Design</span>
                        </td>
                        <td>Jun 14, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                              <img alt="Pic" src="/media/avatars/300-2.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Emma Smith">
                              <img alt="Pic" src="/media/avatars/300-6.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Lucy Matthews">
                              <img alt="Pic" src="/media/avatars/300-21.jpg" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-success fw-bold me-auto">Completed</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">User Module Testing</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">Development</span>
                        </td>
                        <td>May 26, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                              <img alt="Pic" src="/media/avatars/300-20.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Deanna Taylor">
                              <img alt="Pic" src="/media/avatars/300-23.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Mikaela Collins">
                              <span className="symbol-label bg-info text-inverse-info fw-bold">M</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light-primary fw-bold me-auto">In Progress</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">To check User Management</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">Pahse 3.2</span>
                        </td>
                        <td>Jun 17, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Lucy Matthews">
                              <img alt="Pic" src="/media/avatars/300-21.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Kristen Goodwin">
                              <img alt="Pic" src="/media/avatars/300-9.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                              <img alt="Pic" src="/media/avatars/300-7.jpg" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">Yet to start</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">
                          <a href="/" className="text-gray-900 text-hover-primary">Create Roles Module</a>
                        </td>
                        <td>
                          <span className="badge badge-light fw-semibold me-auto">Branding</span>
                        </td>
                        <td>Sep 1, 2020</td>
                        <td>
                          <div className="symbol-group symbol-hover fs-8">
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                              <img alt="Pic" src="/media/avatars/300-7.jpg" />
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Robin Watterman">
                              <span className="symbol-label bg-success text-inverse-success fw-bold">R</span>
                            </div>
                            <div className="symbol symbol-25px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                              <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-light fw-bold me-auto">Yet to start</span>
                        </td>
                        <td className="text-end">
                          <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TargetPannel;
