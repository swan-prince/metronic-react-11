import React, { FC, useState, useRef, useEffect } from 'react';
import { slice } from 'lodash';
import ApexCharts, { ApexOptions } from 'apexcharts';

import BreadToolbar from 'components/breadToolbar';
import ProjectCard from 'components/projectCard';
import Pagination from 'components/pagination';
import CreateProjectDialog from 'components/createProjectDialog';

const chartOptions = (): ApexOptions => { 

  return {
    states: {
      hover: {
        filter: {
          type: "none"
        }
      }
    },
    labels: ['Active', 'Completed', 'Yet to start'],
    series: [30, 45, 25],
    colors: ['#00A3FF', '#50CD89', '#E4E6EF'],
    chart: {
      fontFamily: 'inherit',
      type: 'donut',
      height: '130px',      
      stackType: "100%",
      width: '130px',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }, 
      selection: {
        enabled: false
      },
      animations: {
        enabled: false
      },
      stacked: false
    },     
    plotOptions: {
      pie: {
        customScale: 1,        
        donut: {          
          size: "65%",
          labels: {
            show: false,
            name: {},
            value: {
              fontSize: "30px"
            },
            total: {
              show: false,
              showAlways: false            
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false,     
    },
    stroke: {
      width: 0
    },
    xaxis: {
      categories: ["Fav Color"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: false      
    }
  }
}

const Projects: FC = () => {

  const [openCreateProject, setOpenCreateProject] = useState(false);
  const [status, setStatus] = useState('Active');
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);

  const projects = [
    {
      id: 1,
      title: 'Cartagena_1',
      status: 'In Progress',
      description: 'Avd Juan Carlos I ',
      progress: 50,
      brand: 'plurk.svg'
    },
    {
      id: 2,
      title: 'Leaf CRM',
      status: 'Pending',
      description: 'CRM App application to HR efficiency',
      progress: 30,
      brand: 'disqus.svg'
    },
    {
      id: 3,
      title: 'Atica Banking',
      status: 'Completed',
      description: 'CRM App application to HR efficiency',
      progress: 100,
      brand: 'figma-1.svg'
    },
    {
      id: 4,
      title: 'Finance Dispatch',
      status: 'Pending',
      description: 'CRM App application to HR efficiency',
      progress: 70,
      brand: 'sentry-3.svg'
    },
    {
      id: 5,
      title: '9 Degree',
      status: 'In Progress',
      description: 'CRM App application to HR efficiency',
      progress: 40,
      brand: 'xing-icon.svg'
    },
    {
      id: 6,
      title: 'GoPro App',
      status: 'In Progress',
      description: 'CRM App application to HR efficiency',
      progress: 70,
      brand: 'tvit.svg'
    },
    {
      id: 7,
      title: 'Buldozer CRM',
      status: 'In Progress',
      description: 'CRM App application to HR efficiency',
      progress: 70,
      brand: 'aven.svg'
    },
    {
      id: 8,
      title: 'Aviasales App',
      status: 'Overdue',
      description: 'CRM App application to HR efficiency',
      progress: 10,
      brand: 'treva.svg'
    },
    {
      id: 9,
      title: 'Oppo CRM',
      status: 'Completed',
      description: 'CRM App application to HR efficiency',
      progress: 100,
      brand: 'kanba.svg'
    },
    {
      id: 10,
      title: 'Aviasales App',
      status: 'Overdue',
      description: 'CRM App application to HR efficiency',
      progress: 10,
      brand: 'treva.svg'
    },
  ];

  const handleChangePagination = (val: number) => {
    setPage(val);
    setStartIndex((val - 1) * 9);
    setEndIndex(val * 9);
  }

  const chartRef = useRef<HTMLDivElement | null>(null);  

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions())
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
    <div>
      <BreadToolbar
        breadcrumb={['Projects', 'My Projects']}
        pageTitle='Activos'
        handleCreate={() => setOpenCreateProject(true)}
      />
      <div id='kt_content_container' className="d-flex flex-column-fluid align-items-start container-xxl">
        <div className="content flex-row-fluid" id='kt_content'>
          <div className="row g-6 g-xl-9">
            <div className="col-lg-6 col-xxl-4">
              <div className="card h-100">
                <div className="card-body p-9">
                  <div className="fs-2hx fw-bold">237</div>
                  <div className="fs-4 fw-semibold text-gray-400 mb-7">Activos en la plataforma</div>
                  <div className="d-flex flex-wrap">
                    <div className="d-flex flex-center h-100px w-100px me-9 mb-5">
                      <div ref={chartRef} className='kt_project_list_chart'></div>
                    </div>
                    <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5" style={{flex: '1 auto'}}>
                      <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                        <div className="bullet bg-primary me-3"></div>
                        <div className="text-gray-400">Activos</div>
                        <div className="ms-auto fw-bold text-gray-700">30</div>
                      </div>
                      <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                        <div className="bullet bg-success me-3"></div>
                        <div className="text-gray-400">Completados</div>
                        <div className="ms-auto fw-bold text-gray-700">45</div>
                      </div>
                      <div className="d-flex fs-6 fw-semibold align-items-center">
                        <div className="bullet bg-gray-300 me-3"></div>
                        <div className="text-gray-400">Pendientes empezar</div>
                        <div className="ms-auto fw-bold text-gray-700">25</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="card h-100">
                <div className="card-body p-9">
                  <div className="fs-2hx fw-bold">$3,290.00</div>
                  <div className="fs-4 fw-semibold text-gray-400 mb-7">Proyecciones Financieras</div>
                  <div className="fs-6 d-flex justify-content-between mb-4">
                    <div className="fw-semibold">Media de Presupuestos de Proyecto</div>
                    <div className="d-flex fw-bold">
                      <span className="svg-icon svg-icon-3 me-1 svg-icon-success">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.4 10L5.3 18.1C4.9 18.5 4.9 19.1 5.3 19.5C5.7 19.9 6.29999 19.9 6.69999 19.5L14.8 11.4L13.4 10Z" fill="currentColor" />
                          <path opacity="0.3" d="M19.8 16.3L8.5 5H18.8C19.4 5 19.8 5.4 19.8 6V16.3Z" fill="currentColor" />
                        </svg>
                      </span>
                      $6,570</div>
                  </div>
                  <div className="separator separator-dashed"></div>
                  <div className="fs-6 d-flex justify-content-between my-4">
                    <div className="fw-semibold">Proyecto Valor mas bajo</div>
                    <div className="d-flex fw-bold">
                      <span className="svg-icon svg-icon-3 me-1 svg-icon-danger">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.4 14.8L5.3 6.69999C4.9 6.29999 4.9 5.7 5.3 5.3C5.7 4.9 6.29999 4.9 6.69999 5.3L14.8 13.4L13.4 14.8Z" fill="currentColor" />
                          <path opacity="0.3" d="M19.8 8.5L8.5 19.8H18.8C19.4 19.8 19.8 19.4 19.8 18.8V8.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      $408</div>
                  </div>
                  <div className="separator separator-dashed"></div>
                  <div className="fs-6 d-flex justify-content-between mt-4">
                    <div className="fw-semibold">Proyecto Mayor Valorado</div>
                    <div className="d-flex fw-bold">
                      <span className="svg-icon svg-icon-3 me-1 svg-icon-success">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.4 10L5.3 18.1C4.9 18.5 4.9 19.1 5.3 19.5C5.7 19.9 6.29999 19.9 6.69999 19.5L14.8 11.4L13.4 10Z" fill="currentColor" />
                          <path opacity="0.3" d="M19.8 16.3L8.5 5H18.8C19.4 5 19.8 5.4 19.8 6V16.3Z" fill="currentColor" />
                        </svg>
                      </span>
                      $920</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="card h-100">
                <div className="card-body p-9">
                  <div className="fs-2hx fw-bold">49</div>
                  <div className="fs-4 fw-semibold text-gray-400 mb-7">Clientes</div>
                  <div className="symbol-group symbol-hover mb-9">
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                      <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                      <img alt="Pic" src="/media/avatars/300-11.jpg" />
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michelle Swanston">
                      <img alt="Pic" src="/media/avatars/300-7.jpg" />
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Francis Mitcham">
                      <img alt="Pic" src="/media/avatars/300-20.jpg" />
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                      <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                      <img alt="Pic" src="/media/avatars/300-2.jpg" />
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                      <span className="symbol-label bg-info text-inverse-info fw-bold">P</span>
                    </div>
                    <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                      <img alt="Pic" src="/media/avatars/300-12.jpg" />
                    </div>
                    <a href="/" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                      <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">+42</span>
                    </a>
                  </div>
                  <div className="d-flex">
                    <a href="/" className="btn btn-primary btn-sm me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">Añadir Clients</a>
                    <a href="/" className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Invitar Cliente</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap flex-stack my-5">
            <h2 className="fs-2 fw-semibold my-2">Activos
              <span className="fs-6 text-gray-400 ms-1">por Estado</span></h2>
            <div className="d-flex flex-wrap my-1">
              <div className="m-0">
                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-select form-select-sm form-select-solid fw-bold w-125px">
                  <option value="Active">Active</option>
                  <option value="Approved">In Progress</option>
                  <option value="Declined">To Do</option>
                  <option value="In Progress">Completed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row g-6 g-xl-9">
            {
              slice(projects, startIndex, endIndex).map((cell) => (
                <div className="col-md-6 col-xl-4" key={cell.id}>
                  <ProjectCard data={cell} />
                </div>
              ))
            }
          </div>
          <div className="d-flex flex-stack flex-wrap pt-10">
            <div className="fs-6 fw-semibold text-gray-700">Showing 1 to 10 of 50 entries</div>
            <Pagination
              page={page}
              count={Math.ceil(projects.length / 9)}
              onChange={(val) => handleChangePagination(val)}
            />
          </div>
        </div>
      </div>
      <CreateProjectDialog
        show={openCreateProject}
        onHide={() => setOpenCreateProject(false)}
      />
    </div>
  )
}

export default Projects;
