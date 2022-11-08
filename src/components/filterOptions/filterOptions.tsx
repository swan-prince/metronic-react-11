import React, { FC, useState } from 'react';

const FilterOptions: FC = () => {

  const [notification, setNotification] = useState(false);
  const [author, setAuthor] = useState(false);
  const [customer, setCustomer] = useState(false);

  return (
    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_633e710fcb369">
      <div className="px-7 py-5">
        <div className="fs-5 text-dark fw-bold">Filter Options</div>
      </div>
      <div className="separator border-gray-200"></div>
      <div className="px-7 py-5">
        <div className="mb-10">
          <label className="form-label fw-semibold">Status:</label>
          <div>
            <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_633e710fcb369" data-allow-clear="true">
              <option>Select option</option>
              <option value="1">Approved</option>
              <option value="2">Pending</option>
              <option value="2">In Process</option>
              <option value="2">Rejected</option>
            </select>
          </div>
        </div>
        <div className="mb-10">
          <label className="form-label fw-semibold">Member Type:</label>
          <div className="d-flex">
            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
              <input 
                className="form-check-input" 
                type="checkbox" 
                value="1" 
                checked={author} 
                onChange={(e) => setAuthor(e.target.checked)}
              />
              <span className="form-check-label">Author</span>
            </label>
            <label className="form-check form-check-sm form-check-custom form-check-solid">
              <input className="form-check-input" type="checkbox" value="2" checked={customer} onChange={(e) => setCustomer(e.target.checked)} />
              <span className="form-check-label">Customer</span>
            </label>
          </div>
        </div>
        <div className="mb-10">
          <label className="form-label fw-semibold">Notifications:</label>
          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
            <input className="form-check-input" type="checkbox" value="" name="notifications" checked={notification} onChange={(e) => setNotification(e.target.checked)} />
            <label className="form-check-label">Enabled</label>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
          <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
        </div>
      </div>
    </div>
  )
}

export default FilterOptions;
