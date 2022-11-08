import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  isCurrent: boolean;
}

const CompleteContent: FC<Props> = (props) => {

  const { isCurrent } = props;

  return (
    <div className={clsx({ "current": isCurrent })} data-kt-stepper-element="content">
      <div className="w-100 text-center">
        <h1 className="fw-bold text-dark mb-3">Publicar!</h1>
        <div className="text-muted fw-semibold fs-3">Ponga en marcha su activo</div>
        <div className="text-center px-4 py-15">
          <img src="/media/illustrations/sketchy-1/9.png" alt="" className="mw-100 mh-300px" />
        </div>
      </div>
    </div>
  )
}

export default CompleteContent;
