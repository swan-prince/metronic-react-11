import React, { FC, useState } from 'react';
import clsx from 'clsx';

const PaymentMethodsCard: FC = () => {

  const [collapse, setCollapse] = useState('mastercard');

  return (
    <div className="card pt-4 mb-6 mb-xl-9">
      <div className="card-header border-0">
        <div className="card-title">
          <h2 className="fw-bold mb-0">Payment Methods</h2>
        </div>
        <div className="card-toolbar">
          <a href="/" className="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
            <span className="svg-icon svg-icon-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
              </svg>
            </span>
            Add new method</a>
        </div>
      </div>
      <div id="kt_customer_view_payment_method" className="card-body pt-0">
        <div className="py-0" data-kt-customer-payment-method="row">
          <div className="py-3 d-flex flex-stack flex-wrap">
            <div
              className="d-flex align-items-center collapsible rotate"
              data-bs-toggle="collapse"
              role="button" aria-expanded="false"
              aria-controls="kt_customer_view_payment_method_1"
              onClick={() => setCollapse(collapse === 'mastercard' ? '' : 'mastercard')}
            >
              <div className={clsx("me-3", { 'rotate-90': collapse === 'mastercard' })}>
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <img src="/media/svg/card-logos/mastercard.svg" className="w-40px me-3" alt="" />
              <div className="me-3">
                <div className="d-flex align-items-center">
                  <div className="text-gray-800 fw-bold">Mastercard</div>
                  <div className="badge badge-light-primary ms-5">Primary</div>
                </div>
                <div className="text-muted">Expires Dec 2024</div>
              </div>
            </div>
            <div className="d-flex my-3 ms-9">
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit">
                  <span className="svg-icon svg-icon-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                      <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
              </a>
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="tooltip" title="Delete" data-kt-customer-payment-method="delete">
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px" data-bs-toggle="tooltip" title="More Options" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3" data-kt-menu="true">
                <div className="menu-item px-3">
                  <a href="/" className="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as Primary</a>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("collapse fs-6 ps-10", { 'show': collapse === 'mastercard' })}>
            <div className="d-flex flex-wrap py-5">
              <div className="flex-equal me-5">
                <table className="table table-flush fw-semibold gy-1">
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Name</td>
                    <td className="text-gray-800">Emma Smith</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Number</td>
                    <td className="text-gray-800">**** 9420</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Expires</td>
                    <td className="text-gray-800">12/2024</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Type</td>
                    <td className="text-gray-800">Mastercard credit card</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Issuer</td>
                    <td className="text-gray-800">VICBANK</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">ID</td>
                    <td className="text-gray-800">id_4325df90sdf8</td>
                  </tr>
                </table>
              </div>
              <div className="flex-equal">
                <table className="table table-flush fw-semibold gy-1">
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Billing address</td>
                    <td className="text-gray-800">AU</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Phone</td>
                    <td className="text-gray-800">No phone provided</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Email</td>
                    <td className="text-gray-800">
                      <a href="/" className="text-gray-900 text-hover-primary">smith@kpmg.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Origin</td>
                    <td className="text-gray-800">Australia
                      <div className="symbol symbol-20px symbol-circle ms-2">
                        <img src="/media/flags/australia.svg" alt='' />
                      </div></td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">CVC check</td>
                    <td className="text-gray-800">Passed
                      <span className="svg-icon svg-icon-2 svg-icon-success">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor" />
                          <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                        </svg>
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-dashed"></div>
        <div className="py-0" data-kt-customer-payment-method="row">
          <div className="py-3 d-flex flex-stack flex-wrap">
            <div
              className="d-flex align-items-center collapsible collapsed rotate"
              data-bs-toggle="collapse" data-href="#kt_customer_view_payment_method_2"
              role="button" aria-expanded="false" aria-controls="kt_customer_view_payment_method_2"
              onClick={() => setCollapse(collapse === 'visa' ? '' : 'visa')}
            >
              <div className={clsx("me-3", { 'rotate-90': collapse === 'visa' })}>
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <img src="/media/svg/card-logos/visa.svg" className="w-40px me-3" alt="" />
              <div className="me-3">
                <div className="d-flex align-items-center">
                  <div className="text-gray-800 fw-bold">Visa</div>
                </div>
                <div className="text-muted">Expires Feb 2022</div>
              </div>
            </div>
            <div className="d-flex my-3 ms-9">
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit">
                  <span className="svg-icon svg-icon-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                      <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
              </a>
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="tooltip" title="Delete" data-kt-customer-payment-method="delete">
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px" data-bs-toggle="tooltip" title="More Options" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3" data-kt-menu="true">
                <div className="menu-item px-3">
                  <a href="/" className="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as Primary</a>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("collapse fs-6 ps-10", { 'show': collapse === 'visa' })}>
            <div className="d-flex flex-wrap py-5">
              <div className="flex-equal me-5">
                <table className="table table-flush fw-semibold gy-1">
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Name</td>
                    <td className="text-gray-800">Melody Macy</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Number</td>
                    <td className="text-gray-800">**** 6809</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Expires</td>
                    <td className="text-gray-800">02/2022</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Type</td>
                    <td className="text-gray-800">Visa credit card</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Issuer</td>
                    <td className="text-gray-800">ENBANK</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">ID</td>
                    <td className="text-gray-800">id_w2r84jdy723</td>
                  </tr>
                </table>
              </div>
              <div className="flex-equal">
                <table className="table table-flush fw-semibold gy-1">
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Billing address</td>
                    <td className="text-gray-800">UK</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Phone</td>
                    <td className="text-gray-800">No phone provided</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Email</td>
                    <td className="text-gray-800">
                      <a href="/" className="text-gray-900 text-hover-primary">melody@altbox.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Origin</td>
                    <td className="text-gray-800">United Kingdom
                      <div className="symbol symbol-20px symbol-circle ms-2">
                        <img src="/media/flags/united-kingdom.svg" alt='' />
                      </div></td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">CVC check</td>
                    <td className="text-gray-800">Passed
                      <span className="svg-icon svg-icon-2 svg-icon-success">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                          <path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="currentColor" />
                        </svg>
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-dashed"></div>
        <div className="py-0" data-kt-customer-payment-method="row">
          <div className="py-3 d-flex flex-stack flex-wrap">
            <div
              onClick={() => setCollapse(collapse === 'american-express' ? '' : 'american-express')}
              className="d-flex align-items-center collapsible collapsed rotate" 
              data-bs-toggle="collapse" data-href="#kt_customer_view_payment_method_3" role="button" 
              aria-expanded="false" aria-controls="kt_customer_view_payment_method_3"
            >
              <div className={clsx("me-3", { 'rotate-90': collapse === 'american-express' })}>
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <img src="/media/svg/card-logos/american-express.svg" className="w-40px me-3" alt="" />
              <div className="me-3">
                <div className="d-flex align-items-center">
                  <div className="text-gray-800 fw-bold">American Express</div>
                  <div className="badge badge-light-danger ms-5">Expired</div>
                </div>
                <div className="text-muted">Expires Aug 2021</div>
              </div>
            </div>
            <div className="d-flex my-3 ms-9">
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">
                <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit">
                  <span className="svg-icon svg-icon-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                      <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
              </a>
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="tooltip" title="Delete" data-kt-customer-payment-method="delete">
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
              <a href="/" className="btn btn-icon btn-active-light-primary w-30px h-30px" data-bs-toggle="tooltip" title="More Options" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <span className="svg-icon svg-icon-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-150px py-3" data-kt-menu="true">
                <div className="menu-item px-3">
                  <a href="/" className="menu-link px-3" data-kt-payment-mehtod-action="set_as_primary">Set as Primary</a>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("collapse fs-6 ps-10", { 'show': collapse === 'american-express' })}>
            <div className="d-flex flex-wrap py-5">
              <div className="flex-equal me-5">
                <table className="table table-flush fw-semibold gy-1">
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Name</td>
                    <td className="text-gray-800">Max Smith</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Number</td>
                    <td className="text-gray-800">**** 6187</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Expires</td>
                    <td className="text-gray-800">08/2021</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Type</td>
                    <td className="text-gray-800">American express credit card</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Issuer</td>
                    <td className="text-gray-800">USABANK</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">ID</td>
                    <td className="text-gray-800">id_89457jcje63</td>
                  </tr>
                </table>
              </div>
              <div className="flex-equal">
                <table className="table table-flush fw-semibold gy-1">
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Billing address</td>
                    <td className="text-gray-800">US</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Phone</td>
                    <td className="text-gray-800">No phone provided</td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Email</td>
                    <td className="text-gray-800">
                      <a href="/" className="text-gray-900 text-hover-primary">max@kt.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">Origin</td>
                    <td className="text-gray-800">United States of America
                      <div className="symbol symbol-20px symbol-circle ms-2">
                        <img src="/media/flags/united-states.svg" alt='' />
                      </div></td>
                  </tr>
                  <tr>
                    <td className="text-muted min-w-125px w-125px">CVC check</td>
                    <td className="text-gray-800">Failed
                      <span className="svg-icon svg-icon-2 svg-icon-danger">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                          <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                        </svg>
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodsCard;
