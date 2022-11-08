import React, { FC, useState, useMemo } from 'react';
import { Modal } from 'react-bootstrap-v5';
import countryList from 'react-select-country-list';

interface Props {
  show: boolean;
  onHide: () => void;
}

const AddCustomerDialog: FC<Props> = (props) => {

  const { show, onHide } = props;

  const options = useMemo(() => countryList().getData(), []);

  const [formData, setFormData] = useState<any>({
    name: 'Sean Bean',
    email: 'sean@dellito.com',
    description: '',
    address1: '101, Collins Street',
    address2: '',
    city: 'Melbourne',
    state: 'Victoria',
    postcode: '3000',
    country: ''
  });
  const [billing, setBilling] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  return (
    <Modal id='kt_modal_add_customer' tabIndex={-1} aria-hidden='true'
      dialogClassName='modal-dialog-centered mw-650px'
      show={show}
      onHide={onHide}
    >
      <div className="modal-content">
        <form className="form" action="#" id="kt_modal_add_customer_form" data-kt-redirect="../../demo11/dist/apps/customers/list.html">
          <div className="modal-header" id="kt_modal_add_customer_header">
            <h2 className="fw-bold">Add a Customer</h2>
            <div id="kt_modal_add_customer_close" className="btn btn-icon btn-sm btn-active-icon-primary" onClick={onHide}>
              <span className="svg-icon svg-icon-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                  <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                </svg>
              </span>
            </div>
          </div>
          <div className="modal-body py-10 px-lg-17">
            <div className="scroll-y me-n7 pe-7" id="kt_modal_add_customer_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_customer_header" data-kt-scroll-wrappers="#kt_modal_add_customer_scroll" data-kt-scroll-offset="300px">
              <div className="fv-row mb-7">
                <label className="required fs-6 fw-semibold mb-2">Name</label>
                <input type="text" className="form-control form-control-solid" placeholder="" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="fv-row mb-7">
                <label className="fs-6 fw-semibold mb-2">
                  <span className="required">Email</span>
                  <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Email address must be active"></i>
                </label>
                <input type="email" className="form-control form-control-solid" placeholder="" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="fv-row mb-15">
                <label className="fs-6 fw-semibold mb-2">Description</label>
                <input type="text" className="form-control form-control-solid" placeholder="" name="description" value={formData.description} onChange={handleChange} />
              </div>
              <div className="fw-bold fs-3 rotate collapsible mb-7" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="kt_customer_view_details">Shipping Information
                <span className="ms-2 rotate-180">
                  <span className="svg-icon svg-icon-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
              </div>
              <div id="kt_modal_add_customer_billing_info" className="collapse show">
                <div className="d-flex flex-column mb-7 fv-row">
                  <label className="required fs-6 fw-semibold mb-2">Address Line 1</label>
                  <input className="form-control form-control-solid" placeholder="" name="address1" value={formData.address1} onChange={handleChange} />
                </div>
                <div className="d-flex flex-column mb-7 fv-row">
                  <label className="fs-6 fw-semibold mb-2">Address Line 2</label>
                  <input className="form-control form-control-solid" placeholder="" name="address2" value={formData.address2} onChange={handleChange} />
                </div>
                <div className="d-flex flex-column mb-7 fv-row">
                  <label className="required fs-6 fw-semibold mb-2">Town</label>
                  <input className="form-control form-control-solid" placeholder="" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div className="row g-9 mb-7">
                  <div className="col-md-6 fv-row">
                    <label className="required fs-6 fw-semibold mb-2">State / Province</label>
                    <input className="form-control form-control-solid" placeholder="" name="state" value={formData.state} onChange={handleChange} />
                  </div>
                  <div className="col-md-6 fv-row">
                    <label className="required fs-6 fw-semibold mb-2">Post Code</label>
                    <input className="form-control form-control-solid" placeholder="" name="postcode" value={formData.postcode} onChange={handleChange} />
                  </div>
                </div>
                <div className="d-flex flex-column mb-7 fv-row">
                  <label className="fs-6 fw-semibold mb-2">
                    <span className="required">Country</span>
                    <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination"></i>
                  </label>
                  <select name="country" data-placeholder="Select a Country..." className="form-select form-select-solid fw-bold" value={formData.country} onChange={handleChange}>
                    <option value="">Select a Country...</option>
                    {
                      options.map((option) => (
                        <option value={option.value} key={option.value}>{option.label}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="fv-row mb-7">
                  <div className="d-flex flex-stack">
                    <div className="me-5">
                      <label className="fs-6 fw-semibold">Use as a billing adderess?</label>
                      <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                    </div>
                    <label className="form-check form-switch form-check-custom form-check-solid">
                      <input className="form-check-input" name="billing" type="checkbox" value="1" checked={billing} onChange={(e) => setBilling(e.target.checked)} />
                      <span className="form-check-label fw-semibold text-muted">Yes</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer flex-center">
            <button type="reset" id="kt_modal_add_customer_cancel" className="btn btn-light me-3" onClick={onHide}>Discard</button>
            <button type="button" id="kt_modal_add_customer_submit" className="btn btn-primary" onClick={onHide}>
              <span className="indicator-label">Submit</span>
              <span className="indicator-progress">Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default AddCustomerDialog;
