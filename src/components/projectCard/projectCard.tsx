import React, { FC } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: any
}

const ProjectCard: FC<Props> = (props) => {

  const { data } = props;
  const navigate = useNavigate();

  return (
    <a href="/" className="card border-hover-primary" onClick={(e) => {
      e.preventDefault();
      navigate('/project-detail')
    }}>
      <div className="card-header border-0 pt-9">
        <div className="card-title m-0">
          <div className="symbol symbol-50px w-50px bg-light">
            <img src={`/media/svg/brand-logos/${data.brand}`} alt="image" className="p-3" />
          </div>
        </div>
        <div className="card-toolbar">
          <span className={clsx("badge fw-bold me-auto px-4 py-3", {
            'badge-light-primary': data.status === 'In Progress',
            'badge-light': data.status === 'Pending',
            'badge-light-success': data.status === 'Completed',
            'badge-light-danger': data.status === 'Overdue'
          })}>
            {data.status}
          </span>
        </div>
      </div>
      <div className="card-body p-9">
        <div className="fs-3 fw-bold text-dark">{data.title}</div>
        <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">{data.description}</p>
        <div className="d-flex flex-wrap mb-5">
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
            <div className="fs-6 text-gray-800 fw-bold">Apr 15, 2022</div>
            <div className="fw-semibold text-gray-400">Fecha vencimiento Date</div>
          </div>
          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
            <div className="fs-6 text-gray-800 fw-bold">$284,900.00</div>
            <div className="fw-semibold text-gray-400">Presupuesto</div>
          </div>
        </div>
        <div className="h-4px w-100 bg-light mb-5" data-bs-toggle="tooltip" title="This project 50% completed">
          <div
            className={clsx("rounded h-4px", {
              'bg-primary': data.status === 'In Progress',
              'bg-info': data.status === 'Pending',
              'bg-success': data.status === 'Completed',
              'bg-danger': data.status === 'Overdue'
            })}
            role="progressbar"
            style={{ width: `${data.progress}%` }}
          ></div>
        </div>
        <div className="symbol-group symbol-hover">
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Emma Smith">
            <img alt="Pic" src="/media/avatars/300-6.jpg" />
          </div>
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Rudy Stone">
            <img alt="Pic" src="/media/avatars/300-1.jpg" />
          </div>
          <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
            <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard;
