import React, { FC } from 'react';

const Profile: FC = () => {

  return (
    <div className="d-flex align-items-center ms-3 ms-lg-4" id="kt_header_user_menu_toggle">
      <div 
        className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-30px h-30px w-lg-40px h-lg-40px" 
        data-kt-menu-trigger="click" 
        data-kt-menu-attach="parent" 
        data-kt-menu-placement="bottom-end"
      >
        <span className="svg-icon svg-icon-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z" fill="currentColor" />
            <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="currentColor" />
          </svg>
        </span>
      </div>
      <div 
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" 
        data-kt-menu="true"
      >
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            <div className="symbol symbol-50px me-5">
              <img alt="Logo" src="/media/avatars/300-1.jpg" />
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold d-flex align-items-center fs-5">Max Smith
                <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
              <a href="/" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
            </div>
          </div>
        </div>
        <div className="separator my-2"></div>
        <div className="menu-item px-5">
          <a href="../../demo11/dist/account/overview.html" className="menu-link px-5">My Profile</a>
        </div>
        <div className="menu-item px-5">
          <a href="../../demo11/dist/apps/projects/list.html" className="menu-link px-5">
            <span className="menu-text">My Projects</span>
            <span className="menu-badge">
              <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
            </span>
          </a>
        </div>
        <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
          <a href="/" className="menu-link px-5">
            <span className="menu-title">My Subscription</span>
            <span className="menu-arrow"></span>
          </a>
          <div className="menu-sub menu-sub-dropdown w-175px py-4">
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
            </div>
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/billing.html" className="menu-link px-5">Billing</a>
            </div>
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/statements.html" className="menu-link px-5">Payments</a>
            </div>
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i></a>
            </div>
            <div className="separator my-2"></div>
            <div className="menu-item px-3">
              <div className="menu-content px-3">
                <label className="form-check form-switch form-check-custom form-check-solid">
                  <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
                  <span className="form-check-label text-muted fs-7">Notifications</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item px-5">
          <a href="../../demo11/dist/account/statements.html" className="menu-link px-5">My Statements</a>
        </div>
        <div className="separator my-2"></div>
        <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
          <a href="/" className="menu-link px-5">
            <span className="menu-title position-relative">Language
              <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                <img className="w-15px h-15px rounded-1 ms-2" src="/media/flags/united-states.svg" alt="" /></span></span>
          </a>
          <div className="menu-sub menu-sub-dropdown w-175px py-4">
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/settings.html" className="menu-link d-flex px-5 active">
                <span className="symbol symbol-20px me-4">
                  <img className="rounded-1" src="/media/flags/united-states.svg" alt="" />
                </span>English</a>
            </div>
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/settings.html" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                  <img className="rounded-1" src="/media/flags/spain.svg" alt="" />
                </span>Spanish</a>
            </div>
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/settings.html" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                  <img className="rounded-1" src="/media/flags/germany.svg" alt="" />
                </span>German</a>
            </div>
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/settings.html" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                  <img className="rounded-1" src="/media/flags/japan.svg" alt="" />
                </span>Japanese</a>
            </div>
            <div className="menu-item px-3">
              <a href="../../demo11/dist/account/settings.html" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                  <img className="rounded-1" src="/media/flags/france.svg" alt="" />
                </span>French</a>
            </div>
          </div>
        </div>
        <div className="menu-item px-5 my-1">
          <a href="../../demo11/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
        </div>
        <div className="menu-item px-5">
          <a href="../../demo11/dist/authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
        </div>
      </div>
    </div>
  )
}

export default Profile;
