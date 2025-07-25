import React, { FC, useState, useRef } from 'react';
import clsx from 'clsx';

import useOutsideClick from 'hooks/useOutsideClick';

const SearchForm: FC = () => {

  const ref = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [tab, setTab] = useState('recent');

  const handleOpenForm = () => {
    setTab('recent');
    setShowForm(true);
  }

  useOutsideClick(ref, () => setShowForm(false));

  return (
    <div
      id="kt_header_search"
      ref={ref}
      className="header-search d-flex align-items-center w-lg-250px position-relative" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="lg" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
      <div
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        className="d-flex d-lg-none align-items-center"
      >
        <div
          className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px"
          onClick={handleOpenForm}
        >
          <span className="svg-icon svg-icon-1 svg-icon-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
              <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>

      <form data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end" className="d-none d-lg-block w-100 position-relative mb-2 mb-lg-0" autoComplete="off">
        <input type="hidden" />
        <span className="svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="currentColor" />
            <path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="currentColor" />
          </svg>
        </span>

        <input
          type="text"
          className="form-control bg-transparent ps-13 fs-7 h-40px"
          name="search" defaultValue="" placeholder="Quick Search" data-kt-search-element="input"
          onClick={handleOpenForm}
        />
        <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
          <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
        </span>
        <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
          <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
              <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
            </svg>
          </span>
        </span>
      </form>
      <div
        data-kt-search-element="content"
        data-kt-menu="true"
        className={clsx("menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden position-absolute", { 'show': showForm })}
        style={{ zIndex: '107', top: '50px', left: '-150px' }}
      >
        {
          tab === 'recent' && (
            <div data-kt-search-element="wrapper">
              <div data-kt-search-element="results" className="d-none">
                <div className="scroll-y mh-200px mh-lg-350px">
                  <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>

                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <img src="assets/media/avatars/300-6.jpg" alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Karina Clark</span>
                      <span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <img src="assets/media/avatars/300-2.jpg" alt="" />
                    </div>

                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Olivia Bold</span>
                      <span className="fs-7 fw-semibold text-muted">Software Engineer</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <img src="assets/media/avatars/300-9.jpg" alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Ana Clark</span>
                      <span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <img src="assets/media/avatars/300-14.jpg" alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Nick Pitola</span>
                      <span className="fs-7 fw-semibold text-muted">Art Director</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <img src="assets/media/avatars/300-11.jpg" alt="" />
                    </div>

                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Edward Kulnic</span>
                      <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                    </div>
                  </a>
                  <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
                      </span>
                    </div>

                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Company Rbranding</span>
                      <span className="fs-7 fw-semibold text-muted">UI Design</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
                      </span>
                    </div>
                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Company Re-branding</span>
                      <span className="fs-7 fw-semibold text-muted">Web Development</span>
                    </div>
                  </a>

                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
                      </span>
                    </div>

                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Business Analytics App</span>
                      <span className="fs-7 fw-semibold text-muted">Administration</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
                      </span>
                    </div>
                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                      <span className="fs-7 fw-semibold text-muted">Marketing</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
                      </span>
                    </div>
                    <div className="d-flex flex-column justify-content-start fw-semibold">
                      <span className="fs-6 fw-semibold">Tower Group Website</span>
                      <span className="fs-7 fw-semibold text-muted">Google Adwords</span>
                    </div>
                  </a>
                  <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor" />
                            <rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor" />
                            <rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor" />
                            <rect x="7" y="7" width="6" height="2" rx="1" fill="currentColor" />
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                      <span className="fs-7 fw-semibold text-muted">#45670</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                            <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                            <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                            <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                      <span className="fs-7 fw-semibold text-muted">#45690</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="currentColor" />
                            <rect x="6" y="12" width="7" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                      <span className="fs-7 fw-semibold text-muted">#21090</span>
                    </div>
                  </a>
                  <a href="/" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                            <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                            <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                      <span className="fs-7 fw-semibold text-muted">#34560</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="" data-kt-search-element="main">
                <div className="d-flex flex-stack fw-semibold mb-4">
                  <span className="text-muted fs-6 me-2">Recently Searched:</span>
                  <div className="d-flex" data-kt-search-element="toolbar">
                    <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle=" title="Show search preferences">
                      <span className="svg-icon svg-icon-1"
                        onClick={() => {
                          setTab('preferences');
                          return;
                        }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="currentColor" />
                          <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="currentColor" />
                        </svg>
                      </span>
                    </div>
                    <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1" data-bs-toggle="tooltip" title="Show more search options">
                      <span className="svg-icon svg-icon-2" onClick={() => setTab('advanced-options')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="scroll-y mh-200px mh-lg-325px">
                  <div className="d-flex align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z" fill="currentColor" />
                            <path opacity="0.3" d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z" fill="currentColor" />
                            <path opacity="0.3" d="M15 17H9V20H15V17Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                      <span className="fs-7 text-muted fw-semibold">#45789</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z" fill="currentColor" />
                            <path d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
                      <span className="fs-7 text-muted fw-semibold">#84050</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor" />
                            <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
                      <span className="fs-7 text-muted fw-semibold">#84250</span>
                    </div>

                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="currentColor" />
                            <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
                      <span className="fs-7 text-muted fw-semibold">#67945</span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                            <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
                      <span className="fs-7 text-muted fw-semibold">#84250</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="currentColor" />
                            <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                      <span className="fs-7 text-muted fw-semibold">#45690</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-5">
                    <div className="symbol symbol-40px me-4">
                      <span className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="currentColor" />
                            <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <a href="/" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
                      <span className="fs-7 text-muted fw-semibold">#24005</span>
                    </div>
                  </div>
                </div>
              </div>
              <div data-kt-search-element="empty" className="text-center d-none">
                <div className="pt-10 pb-10">
                  <span className="svg-icon svg-icon-4x opacity-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor" />
                      <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor" />
                      <rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="currentColor" />
                      <path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className="pb-15 fw-semibold">
                  <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                  <div className="text-muted fs-7">Please try again with a different query</div>
                </div>
              </div>
            </div>
          )
        }
        {
          tab === 'advanced-options' && (
            <form data-kt-search-element="advanced-options-form" className="pt-1">
              <h3 className="fw-semibold text-dark mb-7">Advanced Search</h3>
              <div className="mb-5">
                <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
              </div>
              <div className="mb-5">
                <div className="nav-group nav-group-fluid">
                  <label>
                    <input type="radio" className="btn-check" name="type" value="has" defaultChecked />
                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                  </label>
                  <label>
                    <input type="radio" className="btn-check" name="type" value="users" />
                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                  </label>
                  <label>
                    <input type="radio" className="btn-check" name="type" value="orders" />
                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                  </label>
                  <label>
                    <input type="radio" className="btn-check" name="type" value="projects" />
                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
              </div>
              <div className="mb-5">
                <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
              </div>
              <div className="mb-5">
                <div className="nav-group nav-group-fluid">
                  <label>
                    <input type="radio" className="btn-check" name="attachment" value="has" checked />
                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                  </label>
                  <label>
                    <input type="radio" className="btn-check" name="attachment" value="any" />
                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                  <option value="next">Within the next</option>
                  <option value="last">Within the last</option>
                  <option value="between">Between</option>
                  <option value="on">On</option>
                </select>
              </div>
              <div className="row mb-8">
                <div className="col-6">
                  <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
                </div>
                <div className="col-6">
                  <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                  data-kt-search-element="advanced-options-form-cancel"
                  onClick={() => {
                    console.log('asdf')
                    setTab('recent')
                  }}
                >
                  Cancel
                </button>
                <a
                  href="../../demo11/dist/pages/search/horizontal.html"
                  className="btn btn-sm fw-bold btn-primary"
                  data-kt-search-element="advanced-options-form-search"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForm(false);
                  }}
                >
                  Search
                </a>
              </div>
            </form>
          )
        }
        {
          tab === 'preferences' && (
            <form data-kt-search-element="preferences" className="pt-1">
              <h3 className="fw-semibold text-dark mb-7">Search Preferences</h3>
              <div className="pb-4 border-bottom">
                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                  <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
                  <input className="form-check-input" type="checkbox" value="1" checked />
                </label>
              </div>
              <div className="py-4 border-bottom">
                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                  <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
                  <input className="form-check-input" type="checkbox" value="1" checked />
                </label>
              </div>
              <div className="py-4 border-bottom">
                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                  <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
                  <input className="form-check-input" type="checkbox" value="1" />
                </label>
              </div>
              <div className="py-4 border-bottom">
                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                  <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
                  <input className="form-check-input" type="checkbox" value="1" checked />
                </label>
              </div>
              <div className="py-4 border-bottom">
                <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                  <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
                  <input className="form-check-input" type="checkbox" value="1" />
                </label>
              </div>
              <div className="d-flex justify-content-end pt-7">
                <button
                  className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                  data-kt-search-element="preferences-dismiss"
                  onClick={() => setTab('recent')}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-sm fw-bold btn-primary"
                  onClick={() => setShowForm(false)}
                >
                  Save Changes
                </button>
              </div>
            </form>
          )
        }
      </div>
    </div>
  )
}

export default SearchForm;
