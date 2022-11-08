import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  isCurrent: boolean;  
}

const LocalizationContent: FC<Props> = (props) => {

  const { isCurrent } = props;

  return (
    <div className={clsx({"current": isCurrent})} data-kt-stepper-element="content">
      <div className="w-100">
        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Pais</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="country_asset" value="España" />
        </div>
        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Provincia</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="provincy_asset" value="Murcia" />
        </div>
        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Municipio</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="municipy_asset" value="Murcia" />
        </div>
        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Calle</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="street_asset" value="Avd Juan Antonio" />
        </div>





        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Numero</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="street_asset" value="Max Doe" />
        </div>

        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Bloque</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="street_asset" value="Max Doe" />
        </div>

        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Escalera</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="street_asset" value="Max Doe" />
        </div>

        <div className="d-flex flex-column mb-7 fv-row">
          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
            <span className="required">Codigo Postal</span>
            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
          </label>
          <input type="text" className="form-control form-control-solid" placeholder="" name="zip_asset" value="30300" />
        </div>
      </div>
    </div>
  )
}

export default LocalizationContent;
