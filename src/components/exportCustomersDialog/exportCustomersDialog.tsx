import React, { FC } from 'react';
import { Modal } from 'react-bootstrap-v5';

interface Props {
  show: boolean;
  onHide: () => void;
}

const ExportCustomersDialog: FC<Props> = (props) => {

  const { show, onHide } = props;

  return (
    <Modal id='kt_customers_export_modal' tabIndex={-1} aria-hidden='true'
      dialogClassName='modal-dialog-centered mw-650px'
      show={show}
      onHide={onHide}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="fw-bold">Export Customers</h2>
          <div id="kt_customers_export_close" className="btn btn-icon btn-sm btn-active-icon-primary" onClick={onHide}>
            <span className="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
          <form id="kt_customers_export_form" className="form" action="#">
            <div className="fv-row mb-10">
              <label className="fs-5 fw-semibold form-label mb-5">Select Export Format:</label>
              <select data-control="select2" data-placeholder="Select a format" data-hide-search="true" name="format" className="form-select form-select-solid">
                <option value="excell">Excel</option>
                <option value="pdf">PDF</option>
                <option value="cvs">CVS</option>
                <option value="zip">ZIP</option>
              </select>
            </div>
            <div className="fv-row mb-10">
              <label className="fs-5 fw-semibold form-label mb-5">Select Date Range:</label>
              <input className="form-control form-control-solid" placeholder="Pick a date" name="date" />
            </div>
            <div className="row fv-row mb-15">
              <label className="fs-5 fw-semibold form-label mb-5">Payment Type:</label>
              <div className="d-flex flex-column">
                <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                  <input className="form-check-input" type="checkbox" value="1" checked name="payment_type" />
                  <span className="form-check-label text-gray-600 fw-semibold">All</span>
                </label>
                <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                  <input className="form-check-input" type="checkbox" value="2" checked name="payment_type" />
                  <span className="form-check-label text-gray-600 fw-semibold">Visa</span>
                </label>
                <label className="form-check form-check-custom form-check-sm form-check-solid mb-3">
                  <input className="form-check-input" type="checkbox" value="3" name="payment_type" />
                  <span className="form-check-label text-gray-600 fw-semibold">Mastercard</span>
                </label>
                <label className="form-check form-check-custom form-check-sm form-check-solid">
                  <input className="form-check-input" type="checkbox" value="4" name="payment_type" />
                  <span className="form-check-label text-gray-600 fw-semibold">American Express</span>
                </label>
              </div>
            </div>
            <div className="text-center">
              <button type="button" id="kt_customers_export_cancel" className="btn btn-light me-3" onClick={onHide}>Discard</button>
              <button type="button" id="kt_customers_export_submit" className="btn btn-primary" onClick={onHide}>
                <span className="indicator-label">Submit</span>
                <span className="indicator-progress">Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default ExportCustomersDialog;
