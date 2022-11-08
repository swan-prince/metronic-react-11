import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { Modal } from 'react-bootstrap-v5';

import StepperItem from './stepperItem';
import DetailsContent from './detailsContent';
import LocalizationContent from './localizationContent';
import FacturationContent from './facturationContent';
import CompleteContent from './completeContent';

interface Props {
  show: boolean;
  onHide: () => void;
}

const CreateProjectDialog: FC<Props> = (props) => {

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
          <h2>Crear Activo</h2>
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
                  title='Detalles'
                  description='Nombre y Categoria del Activo'
                  active={step === 1}
                />
                <StepperItem
                  number={2}
                  title='Localizacion'
                  description='Defina la Localizacion activo'
                  active={step === 2}
                />
                <StepperItem
                  number={3}
                  title='Facturacion'
                  description='Detalles de proveedor de pago'
                  active={step === 3}
                />
                <StepperItem
                  number={4}
                  title='Completado'
                  description='Revisar y enviar'
                  active={step === 4}
                />
              </div>
            </div>
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              <form className="form" noValidate id="kt_modal_create_app_form">
                <DetailsContent isCurrent={step === 1} />
                <LocalizationContent isCurrent={step === 2} />
                <FacturationContent isCurrent={step === 3} />
                <CompleteContent isCurrent={step === 4} />

                <div className="d-flex flex-stack pt-10">
                  <div className="me-2">
                    <button 
                      type="button" 
                      className={clsx("btn btn-lg btn-light-primary me-3" , {'d-inline-block': step > 1})}
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
                      className={clsx("btn btn-lg btn-primary", {'d-inline-block': step === 4})} 
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
                      className={clsx("btn btn-lg btn-primary", {'d-none': step === 4})}
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

export default CreateProjectDialog;

