import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  isCurrent: boolean;
}

const FacturationContent: FC<Props> = (props) => {

  const { isCurrent } = props;

  return (
    <div className={clsx({"current": isCurrent})} data-kt-stepper-element="content">
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
  )
}

export default FacturationContent;
