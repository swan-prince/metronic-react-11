import React, { FC, useState } from 'react';
import clsx from 'clsx';

const BudgetPannel: FC = () => {

  const [user, setUser] = useState(1);
  const [budget, setBudget] = useState(36000.00);

  return (
    <form className="form">
      <div className="card">
        <div className="card-header">
          <div className="card-title fs-3 fw-bold">Project Budget</div>
        </div>
        <div className="card-body">
          <div className="row mb-8">
            <div className="col-xl-3">
              <div className="fs-6 fw-semibold mt-2 mb-3">Current Status</div>
            </div>
            <div className="col-xl-9">
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-between w-100 fs-4 fw-bold mb-3">
                  <span>Budget</span>
                  <span>$22,300 of 36,000 Used</span>
                </div>
                <div className="h-8px bg-light rounded mb-3">
                  <div className="bg-success rounded h-8px" role="progressbar" style={{ width: '68%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
                <div className="fw-semibold text-gray-600">14 Targets are remaining</div>
              </div>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col-xl-3">
              <div className="fs-6 fw-semibold mt-2 mb-3">Usage Character</div>
            </div>
            <div className="col-xl-9">
              <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]">
                <div className="col-md-4 col-lg-12 col-xxl-4">
                  <label
                    className={clsx("btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6", { 'active': user === 1 })}
                    data-kt-button="true"
                    onClick={() => setUser(1)}
                  >
                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                      <input className="form-check-input" type="radio" name="usage" value="1" checked={user === 1} />
                    </span>
                    <span className="ms-5">
                      <span className="fs-4 fw-bold mb-1 d-block">Precise Usage</span>
                      <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                    </span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-12 col-xxl-4">
                  <label
                    className={clsx("btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6", { 'active': user === 2 })}
                    data-kt-button="true"
                    onClick={() => setUser(2)}
                  >
                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                      <input className="form-check-input" type="radio" name="usage" value="2" checked={user === 2} />
                    </span>
                    <span className="ms-5">
                      <span className="fs-4 fw-bold mb-1 d-block">Normal Usage</span>
                      <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                    </span>
                  </label>
                </div>
                <div className="col-md-4 col-lg-12 col-xxl-4">
                  <label
                    className={clsx("btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6", { 'active': user === 3 })}
                    data-kt-button="true"
                    onClick={() => setUser(3)}
                  >
                    <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                      <input className="form-check-input" type="radio" name="usage" value="3" checked={user === 3} />
                    </span>
                    <span className="ms-5">
                      <span className="fs-4 fw-bold mb-1 d-block">Extreme Usage</span>
                      <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col-xl-3">
              <div className="fs-6 fw-semibold mt-2 mb-3">Budget Notes</div>
            </div>
            <div className="col-xl-9">
              <textarea name="notes" className="form-control form-control-solid" rows={5}>Organize your thoughts with an outline. Here’s the outlining strategy I use. I promise it works like a charm. Not only will it make writing your blog post easier, it’ll help you make your message</textarea>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col-xl-3">
              <div className="fs-6 fw-semibold mt-2 mb-3">Manage Budget</div>
            </div>
            <div className="col-xl-9">
              <div className="position-relative w-md-300px" data-kt-dialer="true" data-kt-dialer-min="1000" data-kt-dialer-max="50000" data-kt-dialer-step="1000" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
                <button 
                  onClick={() => setBudget(budget - 1)}
                  type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                  <span className="svg-icon svg-icon-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                      <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                    </svg>
                  </span>
                </button>
                <input type="text" 
                  className="form-control form-control-solid border-0 ps-12" 
                  data-kt-dialer-control="input" placeholder="Amount" name="manageBudget" readOnly 
                  value={`$${budget}`}
                />
                <button onClick={() => setBudget(budget + 1)} type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                  <span className="svg-icon svg-icon-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                      <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                      <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col-xl-3">
              <div className="fs-6 fw-semibold mt-2 mb-3">Overuse Notifications</div>
            </div>
            <div className="col-xl-9">
              <div className="d-flex fw-semibold h-100">
                <div className="form-check form-check-custom form-check-solid me-9">
                  <input className="form-check-input" type="checkbox" value="" id="email" />
                  <label className="form-check-label ms-3" htmlFor='email'>Email</label>
                </div>
                <div className="form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" value="" id="phone" checked />
                  <label className="form-check-label ms-3" htmlFor="phone">Phone</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="fs-6 fw-semibold mt-2 mb-3">Allow Changes</div>
            </div>
            <div className="col-xl-9">
              <div className="form-check form-switch form-check-custom form-check-solid">
                <input className="form-check-input" type="checkbox" value="" id="allowchanges" />
                <label className="form-check-label fw-semibold text-gray-400 ms-3" htmlFor="allowchanges">Allowed</label>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-end py-6">
          <button type="reset" className="btn btn-light btn-active-light-primary me-2">Discard</button>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </form>
  )
}

export default BudgetPannel;
