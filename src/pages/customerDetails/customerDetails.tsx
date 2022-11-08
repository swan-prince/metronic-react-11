import React, { FC, useState } from 'react';
import clsx from 'clsx';

import BreadToolbar from 'components/breadToolbar';
import UserDetailsCard from './userDetailsCard';
import ConnectedAccountsCard from './connectedAccountsCard';
import OverviewPannel from './overviewPannel';
import EventsPannel from './eventsPannel';
import StatementsPannel from './statementsPannel';
import CreateAppDialog from 'components/createAppDialog';

const CustomerDetails: FC = () => {

  const [tab, setTab] = useState('overview');
  const [openCreateApp, setOpenCreateApp] = useState(false);

  const handleChangeTab = (e: React.MouseEvent<HTMLAnchorElement>, val: string) => {
    e.preventDefault();
    setTab(val);
  }

  return (
    <div>
      <BreadToolbar 
        breadcrumb={['Customers', 'Customer Details']} 
        pageTitle='Customer Details' 
        handleCreate={() => setOpenCreateApp(true)}
      />
      <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
        <div className="content flex-row-fluid" id="kt_content">
          <div className="d-flex flex-column flex-xl-row">
            <div className="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
              <UserDetailsCard />
              <ConnectedAccountsCard />
            </div>
            <div className="flex-lg-row-fluid ms-lg-15">
              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">
                <li className="nav-item">
                  <a
                    className={clsx("nav-link text-active-primary pb-4", { 'active': tab === 'overview' })}
                    data-bs-toggle="tab"
                    onClick={(e) => handleChangeTab(e, 'overview')}
                    href='/'
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={clsx("nav-link text-active-primary pb-4", { 'active': tab === 'events' })}
                    data-bs-toggle="tab" 
                    href="/"
                    onClick={(e) => handleChangeTab(e, 'events')}
                  >
                    Events & Logs
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={clsx("nav-link text-active-primary pb-4", { 'active': tab === 'statements' })}
                    data-kt-countup-tabs="true" 
                    data-bs-toggle="tab" 
                    href="/"
                    onClick={(e) => handleChangeTab(e, 'statements')}
                  >
                    Statements
                  </a>
                </li>
                <li className="nav-item ms-auto">
                  <a href="/" className="btn btn-primary ps-7" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">Actions
                    <span className="svg-icon svg-icon-2 me-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                      </svg>
                    </span>
                  </a>
                  <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold py-4 w-250px fs-6" data-kt-menu="true">
                    <div className="menu-item px-5">
                      <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">Payments</div>
                    </div>
                    <div className="menu-item px-5">
                      <a href="/" className="menu-link px-5">Create invoice</a>
                    </div>
                    <div className="menu-item px-5">
                      <a href="/" className="menu-link flex-stack px-5">Create payments
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                    </div>
                    <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                      <a href="/" className="menu-link px-5">
                        <span className="menu-title">Subscription</span>
                        <span className="menu-arrow"></span>
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-5">Apps</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-5">Billing</a>
                        </div>
                        <div className="menu-item px-3">
                          <a href="/" className="menu-link px-5">Statements</a>
                        </div>
                        <div className="separator my-2"></div>
                        <div className="menu-item px-3">
                          <div className="menu-content px-3">
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input className="form-check-input w-30px h-20px" type="checkbox" value="" name="notifications" checked id="kt_user_menu_notifications" />
                              <span className="form-check-label text-muted fs-6">Notifications</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="separator my-3"></div>
                    <div className="menu-item px-5">
                      <div className="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">Account</div>
                    </div>
                    <div className="menu-item px-5">
                      <a href="/" className="menu-link px-5">Reports</a>
                    </div>
                    <div className="menu-item px-5 my-1">
                      <a href="/" className="menu-link px-5">Account Settings</a>
                    </div>
                    <div className="menu-item px-5">
                      <a href="/" className="menu-link text-danger px-5">Delete customer</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <OverviewPannel active={tab === 'overview'} />
                <EventsPannel active={tab === 'events'} />
                <StatementsPannel active={tab === 'statements'} />
              </div>
            </div>
          </div>
          <div className="modal fade" id="kt_modal_add_payment" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog mw-650px">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="fw-bold">Add a Payment Record</h2>
                  <div id="kt_modal_add_payment_close" className="btn btn-icon btn-sm btn-active-icon-primary">
                    <span className="svg-icon svg-icon-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                  <form id="kt_modal_add_payment_form" className="form" action="#">
                    <div className="fv-row mb-7">
                      <label className="fs-6 fw-semibold form-label mb-2">
                        <span className="required">Invoice Number</span>
                        <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="The invoice number must be unique."></i>
                      </label>
                      <input type="text" className="form-control form-control-solid" name="invoice" value="" />
                    </div>
                    <div className="fv-row mb-7">
                      <label className="required fs-6 fw-semibold form-label mb-2">Status</label>
                      <select className="form-select form-select-solid fw-bold" name="status" data-control="select2" data-placeholder="Select an option" data-hide-search="true">
                        <option></option>
                        <option value="0">Approved</option>
                        <option value="1">Pending</option>
                        <option value="2">Rejected</option>
                        <option value="3">In progress</option>
                        <option value="4">Completed</option>
                      </select>
                    </div>
                    <div className="fv-row mb-7">
                      <label className="required fs-6 fw-semibold form-label mb-2">Invoice Amount</label>
                      <input type="text" className="form-control form-control-solid" name="amount" value="" />
                    </div>
                    <div className="fv-row mb-15">
                      <label className="fs-6 fw-semibold form-label mb-2">
                        <span className="required">Additional Information</span>
                        <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Information such as description of invoice or product purchased."></i>
                      </label>
                      <textarea className="form-control form-control-solid rounded-3" name="additional_info"></textarea>
                    </div>
                    <div className="text-center">
                      <button type="reset" id="kt_modal_add_payment_cancel" className="btn btn-light me-3">Discard</button>
                      <button type="submit" id="kt_modal_add_payment_submit" className="btn btn-primary">
                        <span className="indicator-label">Submit</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="kt_modal_adjust_balance" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mw-650px">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="fw-bold">Adjust Balance</h2>
                  <div id="kt_modal_adjust_balance_close" className="btn btn-icon btn-sm btn-active-icon-primary">
                    <span className="svg-icon svg-icon-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                  <div className="d-flex text-center mb-9">
                    <div className="w-50 border border-dashed border-gray-300 rounded mx-2 p-4">
                      <div className="fs-6 fw-semibold mb-2 text-muted">Current Balance</div>
                      <div className="fs-2 fw-bold" kt-modal-adjust-balance="current_balance">US$ 32,487.57</div>
                    </div>
                    <div className="w-50 border border-dashed border-gray-300 rounded mx-2 p-4">
                      <div className="fs-6 fw-semibold mb-2 text-muted">New Balance
                        <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Enter an amount to preview the new balance."></i></div>
                      <div className="fs-2 fw-bold" kt-modal-adjust-balance="new_balance">--</div>
                    </div>
                  </div>
                  <form id="kt_modal_adjust_balance_form" className="form" action="#">
                    <div className="fv-row mb-7">
                      <label className="required fs-6 fw-semibold form-label mb-2">Adjustment type</label>
                      <select className="form-select form-select-solid fw-bold" name="adjustment" aria-label="Select an option" data-control="select2" data-dropdown-parent="#kt_modal_adjust_balance" data-placeholder="Select an option" data-hide-search="true">
                        <option></option>
                        <option value="1">Credit</option>
                        <option value="2">Debit</option>
                      </select>
                    </div>
                    <div className="fv-row mb-7">
                      <label className="required fs-6 fw-semibold form-label mb-2">Amount</label>
                      <input id="kt_modal_inputmask" type="text" className="form-control form-control-solid" name="amount" value="" />
                    </div>
                    <div className="fv-row mb-7">
                      <label className="fs-6 fw-semibold form-label mb-2">Add adjustment note</label>
                      <textarea className="form-control form-control-solid rounded-3 mb-5"></textarea>
                    </div>
                    <div className="fs-7 text-muted mb-15">Please be aware that all manual balance changes will be audited by the financial team every fortnight. Please maintain your invoices and receipts until then. Thank you.</div>
                    <div className="text-center">
                      <button type="reset" id="kt_modal_adjust_balance_cancel" className="btn btn-light me-3">Discard</button>
                      <button type="submit" id="kt_modal_adjust_balance_submit" className="btn btn-primary">
                        <span className="indicator-label">Submit</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="kt_modal_update_customer" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mw-650px">
              <div className="modal-content">
                <form className="form" action="#" id="kt_modal_update_customer_form">
                  <div className="modal-header" id="kt_modal_update_customer_header">
                    <h2 className="fw-bold">Update Customer</h2>
                    <div id="kt_modal_update_customer_close" className="btn btn-icon btn-sm btn-active-icon-primary">
                      <span className="svg-icon svg-icon-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                          <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="modal-body py-10 px-lg-17">
                    <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_customer_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_customer_header" data-kt-scroll-wrappers="#kt_modal_update_customer_scroll" data-kt-scroll-offset="300px">
                      <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
                        <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                            <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor" />
                            <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor" />
                          </svg>
                        </span>
                        <div className="d-flex flex-stack flex-grow-1">
                          <div className="fw-semibold">
                            <div className="fs-6 text-gray-700">Updating customer details will receive a privacy audit. For more info, please read our
                              <a href="/">Privacy Policy</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse" data-href="#kt_modal_update_customer_user_info" role="button" aria-expanded="false" aria-controls="kt_modal_update_customer_user_info">User Information
                        <span className="ms-2 rotate-180">
                          <span className="svg-icon svg-icon-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                            </svg>
                          </span>
                        </span></div>
                      <div id="kt_modal_update_customer_user_info" className="collapse show">
                        <div className="mb-7">
                          <label className="fs-6 fw-semibold mb-2">
                            <span>Update Avatar</span>
                            <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allowed file types: png, jpg, jpeg."></i>
                          </label>
                          <div className="mt-1">
                            <div className="image-input image-input-outline" data-kt-image-input="true" style={{ backgroundImage: `url('/media/svg/avatars/blank.svg')` }}>
                              <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: `url('/media/avatars/300-1.jpg')` }}></div>
                              <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                <i className="bi bi-pencil-fill fs-7"></i>
                                <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                <input type="hidden" name="avatar_remove" />
                              </label>
                              <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                <i className="bi bi-x fs-2"></i>
                              </span>
                              <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                <i className="bi bi-x fs-2"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="fv-row mb-7">
                          <label className="fs-6 fw-semibold mb-2">Name</label>
                          <input type="text" className="form-control form-control-solid" placeholder="" name="name" value="Sean Bean" />
                        </div>
                        <div className="fv-row mb-7">
                          <label className="fs-6 fw-semibold mb-2">
                            <span>Email</span>
                            <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Email address must be active"></i>
                          </label>
                          <input type="email" className="form-control form-control-solid" placeholder="" name="email" value="sean@dellito.com" />
                        </div>
                        <div className="fv-row mb-15">
                          <label className="fs-6 fw-semibold mb-2">Description</label>
                          <input type="text" className="form-control form-control-solid" placeholder="" name="description" />
                        </div>
                      </div>
                      <div className="fw-bold fs-3 rotate collapsible collapsed mb-7" data-bs-toggle="collapse" data-href="#kt_modal_update_customer_billing_info" role="button" aria-expanded="false" aria-controls="kt_modal_update_customer_billing_info">Shipping Information
                        <span className="ms-2 rotate-180">
                          <span className="svg-icon svg-icon-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                            </svg>
                          </span>
                        </span></div>
                      <div id="kt_modal_update_customer_billing_info" className="collapse">
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="fs-6 fw-semibold mb-2">Address Line 1</label>
                          <input className="form-control form-control-solid" placeholder="" name="address1" value="101, Collins Street" />
                        </div>
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="fs-6 fw-semibold mb-2">Address Line 2</label>
                          <input className="form-control form-control-solid" placeholder="" name="address2" />
                        </div>
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="fs-6 fw-semibold mb-2">Town</label>
                          <input className="form-control form-control-solid" placeholder="" name="city" value="Melbourne" />
                        </div>
                        <div className="row g-9 mb-7">
                          <div className="col-md-6 fv-row">
                            <label className="fs-6 fw-semibold mb-2">State / Province</label>
                            <input className="form-control form-control-solid" placeholder="" name="state" value="Victoria" />
                          </div>
                          <div className="col-md-6 fv-row">
                            <label className="fs-6 fw-semibold mb-2">Post Code</label>
                            <input className="form-control form-control-solid" placeholder="" name="postcode" value="3000" />
                          </div>
                        </div>
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="fs-6 fw-semibold mb-2">
                            <span>Country</span>
                            <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination"></i>
                          </label>
                          <select name="country" aria-label="Select a Country" data-control="select2" data-placeholder="Select a Country..." data-dropdown-parent="#kt_modal_update_customer" className="form-select form-select-solid fw-bold">
                            <option value="">Select a Country...</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia, Plurinational State of</option>
                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">British Indian Ocean Territory</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">Falkland Islands (Malvinas)</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="HT">Haiti</option>
                            <option value="VA">Holy See (Vatican City State)</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">Iran, Islamic Republic of</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">Korea, Democratic People's Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">Lao People's Democratic Republic</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">Micronesia, Federated States of</option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">Palestinian Territory, Occupied</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">Saint Martin (French part)</option>
                            <option value="VC">Saint Vincent and the Grenadines</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">Sint Maarten (Dutch part)</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="KR">South Korea</option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">Tanzania, United Republic of</option>
                            <option value="TH">Thailand</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                            <option value="VN">Vietnam</option>
                            <option value="VI">Virgin Islands</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </div>
                        <div className="fv-row mb-7">
                          <div className="d-flex flex-stack">
                            <div className="me-5">
                              <label className="fs-6 fw-semibold">Use as a billing adderess?</label>
                              <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                            </div>
                            <label className="form-check form-switch form-check-custom form-check-solid">
                              <input className="form-check-input" name="billing" type="checkbox" value="1" id="kt_modal_update_customer_billing" checked />
                              <span className="form-check-label fw-semibold text-muted">Yes</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer flex-center">
                    <button type="reset" id="kt_modal_update_customer_cancel" className="btn btn-light me-3">Discard</button>
                    <button type="submit" id="kt_modal_update_customer_submit" className="btn btn-primary">
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal fade" id="kt_modal_new_card" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mw-650px">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Add New Card</h2>
                  <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    <span className="svg-icon svg-icon-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                  <form id="kt_modal_new_card_form" className="form" action="#">
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
                          <img src="/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                          <img src="/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                          <img src="/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
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
                    <div className="text-center pt-15">
                      <button type="reset" id="kt_modal_new_card_cancel" className="btn btn-light me-3">Discard</button>
                      <button type="submit" id="kt_modal_new_card_submit" className="btn btn-primary">
                        <span className="indicator-label">Submit</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateAppDialog show={openCreateApp} onHide={() => setOpenCreateApp(false)} />
    </div>
  )
}

export default CustomerDetails;
