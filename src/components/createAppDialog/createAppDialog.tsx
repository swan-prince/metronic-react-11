import React, { FC, useState } from 'react';
import { Modal } from 'react-bootstrap-v5';
import clsx from 'clsx';

import StepperItem from 'components/stepperItem';

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateAppDialog: FC<Props> = (props) => {

  const { show, onHide } = props;

  const [step, setStep] = useState(1);

  const handleContinue = () => {
    setStep(step + 1);
  }

  return (
    <Modal id='kt_modal_create_app' tabIndex={-1} aria-hidden='true'
      dialogClassName='modal-dialog-centered mw-900px'
      show={show}
      onHide={onHide}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create App</h2>
          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal" onClick={onHide}>
            <span className="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
        <div className="modal-body py-lg-10 px-lg-10">
          <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
            <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              <div className="stepper-nav ps-lg-10">
                <StepperItem
                  number={1}
                  title='Details'
                  description='Name your App'
                  active={step === 1}
                />
                <StepperItem
                  number={2}
                  title='Frameworks'
                  description='Define your app framework'
                  active={step === 2}
                />
                <StepperItem
                  number={3}
                  title='Database'
                  description='Select the app database type'
                  active={step === 3}
                />
                <StepperItem
                  number={4}
                  title='Billing'
                  description='Provide payment details'
                  active={step === 4}
                />
                <StepperItem
                  number={5}
                  title='Completed'
                  description='Review and Submit'
                  active={step === 5}
                />
              </div>
            </div>
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              <form className="form" noValidate id="kt_modal_create_app_form">
                <div className={clsx({"current": step === 1})} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="fv-row mb-10">
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                        <span className="required">App Name</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
                      </label>
                      <input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder="" />
                    </div>
                    <div className="fv-row">
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span className="required">Category</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app category"></i>
                      </label>
                      <div className="fv-row">
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          <span className="d-flex align-items-center me-2">
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-primary">
                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor" />
                                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor" />
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="d-flex flex-column">
                              <span className="fw-bold fs-6">Quick Online Courses</span>
                              <span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
                            </span>
                          </span>
                          <span className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="radio" name="category" value="1" />
                          </span>
                        </label>
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          <span className="d-flex align-items-center me-2">
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-danger">
                                <span className="svg-icon svg-icon-1 svg-icon-danger">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="d-flex flex-column">
                              <span className="fw-bold fs-6">Face to Face Discussions</span>
                              <span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
                            </span>
                          </span>
                          <span className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="radio" name="category" value="2" />
                          </span>
                        </label>
                        <label className="d-flex flex-stack cursor-pointer">
                          <span className="d-flex align-items-center me-2">
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-success">
                                <span className="svg-icon svg-icon-1 svg-icon-success">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z" fill="currentColor" />
                                    <path d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z" fill="currentColor" />
                                  </svg>
                                </span>
                              </span>
                            </span>
                            <span className="d-flex flex-column">
                              <span className="fw-bold fs-6">Full Intro Training</span>
                              <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                            </span>
                          </span>
                          <span className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="radio" name="category" value="3" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={clsx({"current": step === 2})} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="fv-row">
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span className="required">Select Framework</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your apps framework"></i>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-html5 text-warning fs-2x"></i>
                            </span>
                          </span>
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">HTML5</span>
                            <span className="fs-7 text-muted">Base Web Projec</span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" checked name="framework" value="1" />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fab fa-react text-success fs-2x"></i>
                            </span>
                          </span>
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">ReactJS</span>
                            <span className="fs-7 text-muted">Robust and flexible app framework</span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="framework" value="2" />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-angular text-danger fs-2x"></i>
                            </span>
                          </span>
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Angular</span>
                            <span className="fs-7 text-muted">Powerful data mangement</span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="framework" value="3" />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                              <i className="fab fa-vuejs text-primary fs-2x"></i>
                            </span>
                          </span>
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Vue</span>
                            <span className="fs-7 text-muted">Lightweight and responsive framework</span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="framework" value="4" />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={clsx({"current": step === 3})} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="fv-row mb-10">
                      <label className="required fs-5 fw-semibold mb-2">Database Name</label>
                      <input type="text" className="form-control form-control-lg form-control-solid" name="dbname" placeholder="" value="master_db" />
                    </div>
                    <div className="fv-row">
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span className="required">Select Database Engine</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app database engine"></i>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fas fa-database text-success fs-2x"></i>
                            </span>
                          </span>
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">MySQL</span>
                            <span className="fs-7 text-muted">Basic MySQL database</span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="dbengine" checked value="1" />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-google text-danger fs-2x"></i>
                            </span>
                          </span>
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Firebase</span>
                            <span className="fs-7 text-muted">Google based app data management</span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="dbengine" value="2" />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer">
                        <span className="d-flex align-items-center me-2">
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-amazon text-warning fs-2x"></i>
                            </span>
                          </span>
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">DynamoDB</span>
                            <span className="fs-7 text-muted">Amazon Fast NoSQL Database</span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="dbengine" value="3" />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={clsx({"current": step === 4})} data-kt-stepper-element="content">
                  <div className="w-100">
                    <div className="d-flex flex-column mb-7 fv-row">
                      <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                        <span className="required">Name On Card</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
                      </label>
                      <input type="text" className="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe" />
                    </div>
                    <div className="d-flex flex-column mb-7 fv-row">
                      <label className="required fs-6 fw-semibold form-label mb-2">Card Number</label>
                      <div className="position-relative">
                        <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111" />
                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                          <img src="assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                          <img src="assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                          <img src="assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-10">
                      <div className="col-md-8 fv-row">
                        <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
                        <div className="row fv-row">
                          <div className="col-6">
                            <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                              <option></option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                              <option></option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                              <option value="2028">2028</option>
                              <option value="2029">2029</option>
                              <option value="2030">2030</option>
                              <option value="2031">2031</option>
                              <option value="2032">2032</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 fv-row">
                        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                          <span className="required">CVV</span>
                          <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
                        </label>
                        <div className="position-relative">
                          <input type="text" className="form-control form-control-solid" minLength={3} maxLength={4} placeholder="CVV" name="card_cvv" />
                          <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                            <span className="svg-icon svg-icon-2hx">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                                <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-stack">
                      <div className="me-5">
                        <label className="fs-6 fw-semibold form-label">Save Card for further billing?</label>
                        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                      </div>
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="1" checked />
                        <span className="form-check-label fw-semibold text-muted">Save Card</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={clsx({"current": step === 5})} data-kt-stepper-element="content">
                  <div className="w-100 text-center">
                    <h1 className="fw-bold text-dark mb-3">Release!</h1>
                    <div className="text-muted fw-semibold fs-3">Submit your app to kickstart your project.</div>
                    <div className="text-center px-4 py-15">
                      <img src="assets/media/illustrations/sketchy-1/9.png" alt="" className="mw-100 mh-300px" />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-stack pt-10">
                  <div className="me-2">
                    <button
                      type="button"
                      className={clsx("btn btn-lg btn-light-primary me-3", { 'd-inline-block': step > 1 })}
                      data-kt-stepper-action="previous"
                      onClick={() => setStep(step - 1)}
                    >
                      <span className="svg-icon svg-icon-3 me-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="currentColor" />
                          <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor" />
                        </svg>
                      </span>
                      Back
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className={clsx("btn btn-lg btn-primary", { 'd-inline-block': step === 5 })}
                      data-kt-stepper-action="submit"
                      onClick={() => {
                        setStep(1);
                        onHide();
                      }}
                    >
                      <span className="indicator-label">Submit
                        <span className="svg-icon svg-icon-3 ms-2 me-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                          </svg>
                        </span>
                      </span>
                      <span className="indicator-progress">Por favor espere...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={clsx("btn btn-lg btn-primary", { 'd-none': step === 5 })}
                      data-kt-stepper-action="next"
                      onClick={handleContinue}
                    >
                      Continuar
                      <span className="svg-icon svg-icon-3 ms-1 me-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                          <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                        </svg>
                      </span>
                    </button>
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

export default CreateAppDialog;
