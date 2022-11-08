import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  number: number;
  title: string;
  description: string;
  active: boolean;
}

const StepperItem: FC<Props> = (props) => {

  const { number, title, description, active } = props;

  return (
    <div className={clsx("stepper-item", {'current': active})} data-kt-stepper-element="nav">
      <div className="stepper-wrapper">
        <div className="stepper-icon w-40px h-40px">
          <i className="stepper-check fas fa-check"></i>
          <span className="stepper-number">{number}</span>
        </div>
        <div className="stepper-label">
          <h3 className="stepper-title">{title}</h3>
          <div className="stepper-desc">{description}</div>
        </div>
      </div>
      <div className="stepper-line h-40px"></div>
    </div>
  )
}

export default StepperItem;
