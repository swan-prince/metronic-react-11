import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Modal } from 'react-bootstrap-v5';

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateProject: FC<Props> = (props) => {

  const { show, onHide } = props;

  const [tab, setTab] = useState(1);

  const [projectType, setProjectType] = useState('1');

  const [budget, setBudget] = useState(50);
  const [budgetOption, setBudgetOption] = useState('1');
  const [allowChangeBudget, setAllowChangeBudget] = useState(true);

  const [addUsersByTeam, setAddUsersByTeam] = useState(true);

  return (
    <Modal id='kt_modal_create_app' tabIndex={-1} aria-hidden='true'
      dialogClassName='modal-dialog modal-fullscreen p-9'
      show={show}
      onHide={onHide}
    >
      <div className="modal-content">
        <div className="modal-header header-bg" style={{ backgroundImage: 'url(media/misc/header-bg.png)' }}>
          <h2 className="text-white">New Project
            <small className="ms-2 fs-7 fw-normal text-white opacity-50">Create, Edit, Manage projects</small></h2>
          <div className="btn btn-sm btn-icon btn-color-white btn-active-color-primary" data-bs-dismiss="modal" onClick={onHide}>
            <span className="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
        <div className="modal-body scroll-y m-5">
          <div className="stepper stepper-links d-flex flex-column" id="kt_modal_create_project_stepper">
            <div className="container">
              <div className="stepper-nav justify-content-center py-2">
                <div className={clsx("stepper-item me-5 me-md-15", { 'current': tab === 1 })} data-kt-stepper-element="nav">
                  <h3 className="stepper-title">Project Type</h3>
                </div>
                <div className={clsx("stepper-item me-5 me-md-15", { 'current': tab === 2 })} data-kt-stepper-element="nav">
                  <h3 className="stepper-title">Project Settings</h3>
                </div>
                <div className={clsx("stepper-item me-5 me-md-15", { 'current': tab === 3 })} data-kt-stepper-element="nav">
                  <h3 className="stepper-title">Budget</h3>
                </div>
                <div className={clsx("stepper-item me-5 me-md-15", { 'current': tab === 4 })} data-kt-stepper-element="nav">
                  <h3 className="stepper-title">Build A Team</h3>
                </div>
                <div className={clsx("stepper-item me-5 me-md-15", { 'current': tab === 5 })} data-kt-stepper-element="nav">
                  <h3 className="stepper-title">Set First Target</h3>
                </div>
                <div className={clsx("stepper-item me-5 me-md-15", { 'current': tab === 6 })} data-kt-stepper-element="nav">
                  <h3 className="stepper-title">Upload Files</h3>
                </div>
                <div className={clsx("stepper-item", { 'current': tab === 7 })} data-kt-stepper-element="nav">
                  <h3 className="stepper-title">Completed</h3>
                </div>
              </div>
              <form className="mx-auto w-100 mw-600px pt-15 pb-10" noValidate id="kt_modal_create_project_form" method="post">
                <div className={clsx({ "current": tab === 1 })} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="pb-7 pb-lg-12">
                      <h1 className="fw-bold text-dark">Project Type</h1>
                      <div className="text-muted fw-semibold fs-4">If you need more info, please check out
                        <a href="#" className="link-primary fw-bold">FAQ Page</a></div>
                    </div>
                    <div className="fv-row mb-15" data-kt-buttons="true">
                      <label
                        className={clsx("btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6", { 'active': projectType === '1' })}
                        onClick={() => setProjectType('1')}
                      >
                        <input className="btn-check" type="radio" checked={projectType === '1'} name="project_type" value="1" />
                        <span className="d-flex">
                          <span className="svg-icon svg-icon-3hx">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z" fill="currentColor" />
                              <path d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z" fill="currentColor" />
                              <rect x="7" y="6" width="4" height="4" rx="2" fill="currentColor" />
                            </svg>
                          </span>
                          <span className="ms-4">
                            <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Project</span>
                            <span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
                          </span>
                        </span>
                      </label>
                      <label
                        className={clsx("btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6", { 'active': projectType === '2' })}
                        onClick={() => setProjectType('2')}
                      >
                        <input className="btn-check" type="radio" name="project_type" value="2" checked={projectType === '2'} />
                        <span className="d-flex">
                          <span className="svg-icon svg-icon-3hx">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="currentColor" />
                              <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="currentColor" />
                            </svg>
                          </span>
                          <span className="ms-4">
                            <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Team Project</span>
                            <span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next" onClick={() => setTab(2)}>
                        <span className="indicator-label">Project Settings</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clsx({ "current": tab === 2 })} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="pb-12">
                      <h1 className="fw-bold text-dark">Project Settings</h1>
                      <div className="text-muted fw-semibold fs-4">If you need more info, please check
                        <a href="#" className="link-primary">Project Guidelines</a></div>
                    </div>
                    <div className="fv-row mb-8">
                      <div className="dropzone dz-clickable" id="kt_modal_create_project_settings_logo">
                        <div className="dz-message needsclick">
                          <span className="svg-icon svg-icon-3hx svg-icon-primary">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z" fill="currentColor" />
                              <path d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z" fill="currentColor" />
                              <path d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z" fill="currentColor" />
                              <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                          </span>
                          <div className="ms-4">
                            <h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                            <span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="required fs-6 fw-semibold mb-2">Customer</label>
                      <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Select..." name="settings_customer">
                        <option></option>
                        <option value="1">Keenthemes</option>
                        <option value="2">CRM App</option>
                      </select>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                        <span className="required">Project Name</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify project name"></i>
                      </label>
                      <input type="text" className="form-control form-control-solid" placeholder="Enter Project Name" value="StockPro Mobile App" name="settings_name" />
                    </div>
                    <div className="fv-row mb-8">
                      <label className="required fs-6 fw-semibold mb-2">Project Description</label>
                      <textarea className="form-control form-control-solid" rows={3} placeholder="Enter Project Description" name="settings_description">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="required fs-6 fw-semibold mb-2">Release Date</label>
                      <div className="position-relative d-flex align-items-center">
                        <span className="svg-icon svg-icon-2 position-absolute mx-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                            <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                            <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                          </svg>
                        </span>
                        <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="settings_release_date" />
                      </div>
                    </div>
                    <div className="fv-row mb-15">
                      <div className="d-flex flex-stack">
                        <div className="me-5">
                          <label className="required fs-6 fw-semibold">Notifications</label>
                          <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                        </div>
                        <div className="d-flex">
                          <label className="form-check form-check-custom form-check-solid me-10">
                            <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="settings_notifications[]" />
                            <span className="form-check-label fw-semibold">Email</span>
                          </label>
                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" checked name="settings_notifications[]" />
                            <span className="form-check-label fw-semibold">Phone</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-stack">
                      <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="settings-previous" onClick={() => setTab(1)}>Project Type</button>
                      <button type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next" onClick={() => setTab(3)}>
                        <span className="indicator-label">Budget</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clsx({ "current": tab === 3 })} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="pb-10 pb-lg-12">
                      <h1 className="fw-bold text-dark">Budget</h1>
                      <div className="text-muted fw-semibold fs-4">If you need more info, please check
                        <a href="#" className="link-primary">Project Guidelines</a></div>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                        <span className="required">Setup Budget</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div class='p-4 rounded bg-light'&gt; &lt;div class='d-flex flex-stack text-muted mb-4'&gt; &lt;i class='fas fa-university fs-3 me-3'&gt;&lt;/i&gt; &lt;div class='fw-bold'&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div class='d-flex flex-stack fw-semibold text-gray-600'&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div class='separator separator-dashed my-2'&gt;&lt;/div&gt; &lt;div class='d-flex flex-stack text-dark fw-bold mb-2'&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div class='d-flex flex-stack text-muted mb-2'&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div class='d-flex flex-stack text-muted'&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;"></i>
                      </label>
                      <div className="position-relative w-lg-250px" id="kt_modal_create_project_budget_setup" data-kt-dialer="true" data-kt-dialer-min="50" data-kt-dialer-max="50000" data-kt-dialer-step="100" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
                        <button
                          type="button"
                          className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                          onClick={() => setBudget(budget - 100)}
                        >
                          <span className="svg-icon svg-icon-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                              <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                            </svg>
                          </span>
                        </button>
                        <input
                          type="text"
                          className="form-control form-control-solid border-0 ps-12"
                          data-kt-dialer-control="input"
                          placeholder="Amount"
                          name="budget_setup"
                          readOnly
                          value={`$${budget}`}
                        />
                        <button type="button"
                          className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                          onClick={() => setBudget(budget + 100)}
                        >
                          <span className="svg-icon svg-icon-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                              <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                              <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="fs-6 fw-semibold mb-2">Budget Usage</label>
                      <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                        <div className="col-md-6 col-lg-12 col-xxl-6">
                          <label
                            className={clsx("btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6", { 'active': budgetOption === '1' })}
                            data-kt-button="true"
                            onClick={() => setBudgetOption('1')}
                          >
                            <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                              <input className="form-check-input" type="radio" name="budget_usage" value="1" checked={budgetOption === '1'} />
                            </span>
                            <span className="ms-5">
                              <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
                              <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                            </span>
                          </label>
                        </div>
                        <div className="col-md-6 col-lg-12 col-xxl-6">
                          <label
                            className={clsx("btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6", { 'active': budgetOption === '2' })}
                            data-kt-button="true"
                            onClick={() => setBudgetOption('2')}
                          >
                            <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                              <input className="form-check-input" type="radio" name="budget_usage" value="2" checked={budgetOption === '2'} />
                            </span>
                            <span className="ms-5">
                              <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
                              <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="fv-row mb-15">
                      <div className="d-flex flex-stack">
                        <div className="me-5">
                          <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                          <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                        </div>
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          <input
                            className="form-check-input" type="checkbox" value="1" name="budget_allow"
                            checked={allowChangeBudget}
                            onChange={(e) => setAllowChangeBudget(e.target.checked)}
                          />
                          <span className="form-check-label fw-semibold text-muted">Allowed</span>
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-stack">
                      <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="budget-previous" onClick={() => setTab(2)}>Project Settings</button>
                      <button type="button" className="btn btn-lg btn-primary" data-kt-element="budget-next" onClick={() => setTab(4)}>
                        <span className="indicator-label">Build Team</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clsx({ "current": tab === 4 })} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="pb-12">
                      <h1 className="fw-bold text-dark">Build a Team</h1>
                      <div className="text-muted fw-semibold fs-4">If you need more info, please check
                        <a href="#" className="link-primary">Project Guidelines</a></div>
                    </div>
                    <div className="mb-8">
                      <label className="fs-6 fw-semibold mb-2">Invite Teammates</label>
                      <input type="text" className="form-control form-control-solid" placeholder="Add project memnbers by name or email.." name="invite_teammates" />
                    </div>
                    <div className="mb-8">
                      <div className="fs-6 fw-semibold mb-2">Team Members</div>
                      <div className="mh-300px scroll-y me-n7 pe-7">
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-6.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                              <div className="fw-semibold text-muted">smith@kpmg.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                              <div className="fw-semibold text-muted">melody@altbox.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-1.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                              <div className="fw-semibold text-muted">max@kt.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-5.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                              <div className="fw-semibold text-muted">sean@dellito.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-25.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                              <div className="fw-semibold text-muted">brian@exchange.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                              <div className="fw-semibold text-muted">mik@pex.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-9.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                              <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                              <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                              <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-23.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                              <div className="fw-semibold text-muted">dam@consilting.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                              <div className="fw-semibold text-muted">emma@intenso.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-12.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                              <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                              <div className="fw-semibold text-muted">robert@benko.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-13.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                              <div className="fw-semibold text-muted">miller@mapple.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                              <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2" selected>Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-21.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                              <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1" selected>Guest</option>
                              <option value="2">Owner</option>
                              <option value="3">Can Edit</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="/media/avatars/300-5.jpg" />
                            </div>
                            <div className="ms-5">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                              <div className="fw-semibold text-muted">sean@dellito.com</div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                              <option value="1">Guest</option>
                              <option value="2">Owner</option>
                              <option value="3" selected>Can Edit</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-stack mb-15">
                      <div className="me-5 fw-semibold">
                        <label className="fs-6">Adding Users by Team Members</label>
                        <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                      </div>
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" checked={addUsersByTeam} onChange={(e) => setAddUsersByTeam(e.target.checked)} />
                      </label>
                    </div>
                    <div className="d-flex flex-stack">
                      <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="team-previous" onClick={() => setTab(3)}>Budget</button>
                      <button type="button" className="btn btn-lg btn-primary" data-kt-element="team-next" onClick={() => setTab(5)}>
                        <span className="indicator-label">Set Target</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clsx({ "current": tab === 5 })} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="pb-12">
                      <h1 className="fw-bold text-dark">Set First Target</h1>
                      <div className="text-muted fw-semibold fs-4">If you need more info, please check
                        <a href="#" className="link-primary">Project Guidelines</a></div>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="fs-6 fw-semibold mb-2">Target Title</label>
                      <input type="text" className="form-control form-control-solid" placeholder="Enter Target Title" name="Project Launch" />
                    </div>
                    <div className="row g-9 mb-8">
                      <div className="col-md-6 fv-row">
                        <label className="required fs-6 fw-semibold mb-2">Assign</label>
                        <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Select a Team Member" name="target_assign">
                          <option></option>
                          <option value="1">Karina Clark</option>
                          <option value="2" selected>Robert Doe</option>
                          <option value="3">Niel Owen</option>
                          <option value="4">Olivia Wild</option>
                          <option value="5">Sean Bean</option>
                        </select>
                      </div>
                      <div className="col-md-6 fv-row">
                        <label className="required fs-6 fw-semibold mb-2">Due Date</label>
                        <div className="position-relative d-flex align-items-center">
                          <span className="svg-icon svg-icon-2 position-absolute mx-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                              <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                              <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                            </svg>
                          </span>
                          <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="target_due_date" />
                        </div>
                      </div>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="fs-6 fw-semibold mb-2">Target Details</label>
                      <textarea className="form-control form-control-solid" rows={2} name="target_details" placeholder="Type Target Details">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>
                    </div>
                    <div className="fv-row mb-8">
                      <label className="required fs-6 fw-semibold mb-2">Tags</label>
                      <input className="form-control form-control-solid" value="Important, Urgent" name="target_tags" />
                    </div>
                    <div className="fv-row mb-8">
                      <div className="d-flex flex-stack">
                        <div className="me-5">
                          <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                          <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                        </div>
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="1" name="target_allow" checked={allowChangeBudget} onChange={(e) => setAllowChangeBudget(e.target.checked)} />
                          <span className="form-check-label fw-semibold text-muted">Allowed</span>
                        </label>
                      </div>
                    </div>
                    <div className="fv-row mb-15">
                      <div className="d-flex flex-stack">
                        <div className="me-5">
                          <label className="fs-6 fw-semibold">Notifications</label>
                          <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                        </div>
                        <div className="d-flex">
                          <label className="form-check form-check-custom form-check-solid me-10">
                            <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="target_notifications[]" />
                            <span className="form-check-label fw-semibold">Email</span>
                          </label>
                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" checked name="target_notifications[]" />
                            <span className="form-check-label fw-semibold">Phone</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-stack">
                      <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="targets-previous" onClick={() => setTab(4)}>Build a Team</button>
                      <button type="button" className="btn btn-lg btn-primary" data-kt-element="targets-next" onClick={() => setTab(6)}>
                        <span className="indicator-label">Upload Files</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clsx({ "current": tab === 6 })} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="pb-10 pb-lg-12">
                      <h1 className="fw-bold text-dark">Upload Files</h1>
                      <div className="text-muted fw-semibold fs-4">If you need more info, please check
                        <a href="#" className="link-primary">Project Guidelines</a></div>
                    </div>
                    <div className="fv-row mb-8">
                      <div className="dropzone" id="kt_modal_create_project_files_upload">
                        <div className="dz-message needsclick">
                          <span className="svg-icon svg-icon-3hx svg-icon-primary">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z" fill="currentColor" />
                              <path d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z" fill="currentColor" />
                              <path d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z" fill="currentColor" />
                              <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                          </span>
                          <div className="ms-4">
                            <h3 className="dfs-3 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                            <span className="fw-semibold fs-4 text-muted">Upload up to 10 files</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <label className="fs-6 fw-semibold mb-2">Uploaded File</label>
                      <div className="mh-300px scroll-y me-n7 pe-7">
                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px">
                              <img src="/media/svg/files/pdf.svg" alt="icon" />
                            </div>
                            <div className="ms-6">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Avionica Technical Requirements</a>
                              <div className="fw-semibold text-muted">230kb</div>
                            </div>
                          </div>
                          <div className="min-w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                              <option value="1">Remove</option>
                              <option value="2">Modify</option>
                              <option value="3">Select</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px">
                              <img src="/media/svg/files/doc.svg" alt="icon" />
                            </div>
                            <div className="ms-6">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">9 Degree CURD draftplan</a>
                              <div className="fw-semibold text-muted">3.6mb</div>
                            </div>
                          </div>
                          <div className="min-w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                              <option value="1">Remove</option>
                              <option value="2">Modify</option>
                              <option value="3">Select</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px">
                              <img src="/media/svg/files/css.svg" alt="icon" />
                            </div>
                            <div className="ms-6">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">User CRUD Styles</a>
                              <div className="fw-semibold text-muted">85kb</div>
                            </div>
                          </div>
                          <div className="min-w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                              <option value="1">Remove</option>
                              <option value="2">Modify</option>
                              <option value="3">Select</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px">
                              <img src="/media/svg/files/ai.svg" alt="icon" />
                            </div>
                            <div className="ms-6">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Design Initial Logo</a>
                              <div className="fw-semibold text-muted">40kb</div>
                            </div>
                          </div>
                          <div className="min-w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                              <option value="1">Remove</option>
                              <option value="2">Modify</option>
                              <option value="3">Select</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex flex-stack py-4">
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-35px">
                              <img src="/media/svg/files/tif.svg" alt="icon" />
                            </div>
                            <div className="ms-6">
                              <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Tower Hill Bilboard</a>
                              <div className="fw-semibold text-muted">27mb</div>
                            </div>
                          </div>
                          <div className="min-w-100px">
                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true" data-placeholder="Edit">
                              <option value="1">Remove</option>
                              <option value="2">Modify</option>
                              <option value="3">Select</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fv-row mb-8">
                      <div className="d-flex flex-stack">
                        <div className="me-5">
                          <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                          <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                        </div>
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" value="1" name="target_allow" checked={allowChangeBudget} onChange={(e) => setAllowChangeBudget(e.target.checked)} />
                          <span className="form-check-label fw-semibold text-muted">Allowed</span>
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-stack">
                      <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="files-previous" onClick={() => setTab(5)}>Set First Target</button>
                      <button type="button" className="btn btn-lg btn-primary" data-kt-element="files-next" onClick={() => setTab(7)}>
                        <span className="indicator-label">Complete</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={clsx({ "current": tab === 7 })} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="pb-12 text-center">
                      <h1 className="fw-bold text-dark">Project Created!</h1>
                      <div className="text-muted fw-semibold fs-4">If you need more info, please check how to create project</div>
                    </div>
                    <div className="d-flex flex-center pb-20">
                      <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start" onClick={() => setTab(1)}>Create New Project</button>
                      <a href="" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Project</a>
                    </div>
                    <div className="text-center px-4">
                      <img src="/media/illustrations/sigma-1/9.png" alt="" className="mww-100 mh-350px" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CreateProject;
