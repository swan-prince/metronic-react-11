import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  tab: string;
  handleChangeTab: (val: string) => void;
}

const HeaderDetail: FC<Props> = (props) => {

  const { tab, handleChangeTab } = props;

  const handleSelectTab = (e: React.MouseEvent<HTMLAnchorElement>, val: string) => {
    e.preventDefault();
    handleChangeTab(val);
  }

  return (
    <div className="card mb-6 mb-xl-9">
      <div className="card-body pt-9 pb-0">
        <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
          <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
            <img className="mw-50px mw-lg-75px" src="/media/svg/brand-logos/volicity-9.svg" alt="image" />
          </div>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-1">
                  <a href="/" className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">CRM Dashboard</a>
                  <span className="badge badge-light-success me-auto">In Progress</span>
                </div>
                <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">#1 Tool to get started with Web Apps any Kind & size</div>
              </div>
              <div className="d-flex mb-4">
                <a href="/" className="btn btn-sm btn-bg-light btn-active-color-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add User</a>
                <a href="/" className="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Add Target</a>
                <div className="me-0">
                  <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <i className="bi bi-three-dots fs-3"></i>
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
            </div>
            <div className="d-flex flex-wrap justify-content-start">
              <div className="d-flex flex-wrap">
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="fs-4 fw-bold">29 Jan, 2022</div>
                  </div>
                  <div className="fw-semibold fs-6 text-gray-400">Due Date</div>
                </div>
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                  <div className="d-flex align-items-center">
                    <span className="svg-icon svg-icon-3 svg-icon-danger me-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                        <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="75">75</div>
                  </div>
                  <div className="fw-semibold fs-6 text-gray-400">Open Tasks</div>
                </div>
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                  <div className="d-flex align-items-center">
                    <span className="svg-icon svg-icon-3 svg-icon-success me-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="fs-4 fw-bold" data-kt-countup="true" data-kt-countup-value="15000" data-kt-countup-prefix="$">$15,000</div>
                  </div>
                  <div className="fw-semibold fs-6 text-gray-400">Budget Spent</div>
                </div>
              </div>
              <div className="symbol-group symbol-hover mb-3">
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                  <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                  <img alt="Pic" src="/media/avatars/300-11.jpg" />
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                  <img alt="Pic" src="/media/avatars/300-7.jpg" />
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                  <img alt="Pic" src="/media/avatars/300-20.jpg" />
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                  <img alt="Pic" src="/media/avatars/300-2.jpg" />
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                  <span className="symbol-label bg-info text-inverse-info fw-bold">P</span>
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                  <img alt="Pic" src="/media/avatars/300-12.jpg" />
                </div>
                <a href="/" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                  <span className="symbol-label bg-dark text-inverse-dark fs-8 fw-bold" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View more users">+42</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
          <li className="nav-item">
            <a className={clsx("nav-link text-active-primary py-5 me-6", {'active': tab === 'Overview'})} href="/" onClick={(e) => handleSelectTab(e, 'Overview')}>Overview</a>
          </li>
          <li className="nav-item">
            <a className={clsx("nav-link text-active-primary py-5 me-6", {'active': tab === 'Targets'})} href="/" onClick={(e) => handleSelectTab(e, 'Targets')}>Targets</a>
          </li>
          <li className="nav-item">
            <a className={clsx("nav-link text-active-primary py-5 me-6", {'active': tab === 'Budget'})} href="/" onClick={(e) => handleSelectTab(e, 'Budget')}>Budget</a>
          </li>
          <li className="nav-item">
            <a className={clsx("nav-link text-active-primary py-5 me-6", {'active': tab === 'Users'})} href="/" onClick={(e) => handleSelectTab(e, 'Users')}>Users</a>
          </li>
          <li className="nav-item">
            <a className={clsx("nav-link text-active-primary py-5 me-6", {'active': tab === 'Files'})} href="/" onClick={(e) => handleSelectTab(e, 'Files')}>Files</a>
          </li>
          <li className="nav-item">
            <a className={clsx("nav-link text-active-primary py-5 me-6", {'active': tab === 'Activity'})} href="/" onClick={(e) => handleSelectTab(e, 'Activity')}>Activity</a>
          </li>
          <li className="nav-item">
            <a className={clsx("nav-link text-active-primary py-5 me-6", {'active': tab === 'Settings'})} href="/" onClick={(e) => handleSelectTab(e, 'Settings')}>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderDetail;
