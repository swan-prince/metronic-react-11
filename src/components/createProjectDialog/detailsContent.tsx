import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  isCurrent: boolean;  
}

const DetailsContent: FC<Props> = (props) => {

  const { isCurrent } = props;

  return (
    <div className={clsx({"current": isCurrent})} data-kt-stepper-element="content">
      <div className="w-100">
        <div className="fv-row mb-10">
          <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
            <span className="required">Nombre del activo</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
          </label>
          <input type="text" className="form-control form-control-lg form-control-solid" name="name_asset" placeholder="" />
        </div>
        <div className="fv-row mb-10">
          <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
            <span className="required">Catastro</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
          </label>
          <input type="text" className="form-control form-control-lg form-control-solid" name="catastro_asset" placeholder="" />
        </div>
        <div className="fv-row">
          <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
            <span className="required">Categoria del activo</span>
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
                  <span className="fw-bold fs-6">Edificio</span>
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
                  <span className="fw-bold fs-6">Residencial</span>
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
                  <span className="fw-bold fs-6">Comercio</span>
                  <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                </span>
              </span>
              <span className="form-check form-check-custom form-check-solid">
                <input className="form-check-input" type="radio" name="category" value="3" />
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
                  <span className="fw-bold fs-6">Trastero</span>
                  <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                </span>
              </span>
              <span className="form-check form-check-custom form-check-solid">
                <input className="form-check-input" type="radio" name="category" value="4" />
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
                  <span className="fw-bold fs-6">Parking</span>
                  <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                </span>
              </span>
              <span className="form-check form-check-custom form-check-solid">
                <input className="form-check-input" type="radio" name="category" value="5" />
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsContent;
