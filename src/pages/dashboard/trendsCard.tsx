import React, { FC } from 'react';

const TrendsCard: FC = () => {

  return (
    <div className="card">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-dark">Trends</span>
          <span className="text-muted mt-1 fw-semibold fs-7">Latest tech trends</span>
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
      <div className="card-body pt-5">
        <div className="d-flex align-items-sm-center mb-7">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label">
              <img src="/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
            </span>
          </div>
          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
            <div className="flex-grow-1 me-2">
              <a href="/" className="text-gray-800 text-hover-primary fs-6 fw-bold">Top Authors</a>
              <span className="text-muted fw-semibold d-block fs-7">Mark, Rowling, Esther</span>
            </div>
            <span className="badge badge-light fw-bold my-2">+82$</span>
          </div>
        </div>
        <div className="d-flex align-items-sm-center mb-7">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label">
              <img src="/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
            </span>
          </div>
          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
            <div className="flex-grow-1 me-2">
              <a href="/" className="text-gray-800 text-hover-primary fs-6 fw-bold">Popular Authors</a>
              <span className="text-muted fw-semibold d-block fs-7">Randy, Steve, Mike</span>
            </div>
            <span className="badge badge-light fw-bold my-2">+280$</span>
          </div>
        </div>
        <div className="d-flex align-items-sm-center mb-7">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label">
              <img src="/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
            </span>
          </div>
          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
            <div className="flex-grow-1 me-2">
              <a href="/" className="text-gray-800 text-hover-primary fs-6 fw-bold">New Users</a>
              <span className="text-muted fw-semibold d-block fs-7">John, Pat, Jimmy</span>
            </div>
            <span className="badge badge-light fw-bold my-2">+4500$</span>
          </div>
        </div>
        <div className="d-flex align-items-sm-center mb-7">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label">
              <img src="/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
            </span>
          </div>
          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
            <div className="flex-grow-1 me-2">
              <a href="/" className="text-gray-800 text-hover-primary fs-6 fw-bold">Active Customers</a>
              <span className="text-muted fw-semibold d-block fs-7">Mark, Rowling, Esther</span>
            </div>
            <span className="badge badge-light fw-bold my-2">+686$</span>
          </div>
        </div>
        <div className="d-flex align-items-sm-center mb-7">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label">
              <img src="/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
            </span>
          </div>
          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
            <div className="flex-grow-1 me-2">
              <a href="/" className="text-gray-800 text-hover-primary fs-6 fw-bold">Bestseller Theme</a>
              <span className="text-muted fw-semibold d-block fs-7">Disco, Retro, Sports</span>
            </div>
            <span className="badge badge-light fw-bold my-2">+726$</span>
          </div>
        </div>
        <div className="d-flex align-items-sm-center">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label">
              <img src="/media/svg/brand-logos/fox-hub.svg" className="h-50 align-self-center" alt="" />
            </span>
          </div>
          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
            <div className="flex-grow-1 me-2">
              <a href="/" className="text-gray-800 text-hover-primary fs-6 fw-bold">Fox Broker App</a>
              <span className="text-muted fw-semibold d-block fs-7">Finance, Corporate, Apps</span>
            </div>
            <span className="badge badge-light fw-bold my-2">+145$</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendsCard;
