import React, { FC, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { slice } from 'lodash';
import ApexCharts, { ApexOptions } from 'apexcharts';
import {getCSSVariableValue} from 'assets/ts/_utils';

import FilterOptions from 'components/filterOptions';
import Pagination from 'components/pagination';

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
      height: '200px',
      stackType: "normal",
      width: '175px',
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
          size: "75%",
          labels: {
            show: false
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

const taskTimeOptions = (): ApexOptions => {

  var primary = getCSSVariableValue('--kt-primary');
  var lightPrimary = getCSSVariableValue('--kt-primary-light');
  var gray500 = getCSSVariableValue('--kt-gray-500');
  var success = getCSSVariableValue('--kt-success');
  var lightSuccess = getCSSVariableValue('--kt-success-light');
  var gray200 = getCSSVariableValue('--kt-gray-200');

  return {
    series: [{
      name: 'Incomplete',
      data: [70, 70, 80, 80, 75, 75, 75]
    }, {
      name: 'Complete',
      data: [55, 55, 60, 60, 55, 55, 60]
    }],
    chart: {
      type: 'area',
      height: '300px',
      toolbar: {
        show: false
      }
    },
    plotOptions: {

    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [primary, success]
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: gray500,
          fontSize: '12px'
        }
      },
      crosshairs: {
        position: 'front',
        stroke: {
          color: primary,
          width: 1,
          dashArray: 3
        }
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: gray500,
          fontSize: '12px',
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      hover: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0
        }
      }
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return val + " tasks"
        }
      }
    },
    colors: [lightPrimary, lightSuccess],
    grid: {
      borderColor: gray200,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    markers: {
      //size: 5,
      colors: [lightPrimary, lightSuccess],
      // strokeColor: [primary, success],
      strokeWidth: 3
    }
  }
}

const OverviewPannel: FC = () => {

  const days = [
    {
      num: 22,
      day: 'Su'
    },
    {
      num: 23,
      day: 'Mo'
    },
    {
      num: 24,
      day: 'Tu'
    },
    {
      num: 25,
      day: 'We'
    },
    {
      num: 26,
      day: 'Th'
    },
    {
      num: 27,
      day: 'Fr'
    },
    {
      num: 28,
      day: 'Sa'
    },
    {
      num: 29,
      day: 'Su'
    },
    {
      num: 30,
      day: 'Mo'
    },
    {
      num: 31,
      day: 'Tu'
    }
  ]

  const [day, setDay] = useState(23);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const handleChangePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(e.target.value));
  }

  const handleChangePagination = (val: number) => {
    setPage(val);
    setStartIndex((val - 1) * pageSize);
    setEndIndex(val * pageSize);
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

  const lineChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!lineChartRef.current) {
      return
    }

    const chart = new ApexCharts(lineChartRef.current, taskTimeOptions())
    if (chart) {
      chart.render()
    }

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineChartRef])

  return (
    <div>
      <div className="row g-6 g-xl-9">
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bold mb-1">Tasks Summary</h3>
                <div className="fs-6 fw-semibold text-gray-400">24 Overdue Tasks</div>
              </div>
              <div className="card-toolbar">
                <a href="/" className="btn btn-light btn-sm">View Tasks</a>
              </div>
            </div>
            <div className="card-body p-9 pt-5">
              <div className="d-flex flex-wrap">
                <div className="position-relative d-flex flex-center h-175px w-175px me-15 mb-7">
                  <div className="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center">
                    <span className="fs-2qx fw-bold">237</span>
                    <span className="fs-6 fw-semibold text-gray-400">Total Tasks</span>
                  </div>
                  <div ref={chartRef} id="project_overview_chart"></div>
                </div>
                <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                  <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                    <div className="bullet bg-primary me-3"></div>
                    <div className="text-gray-400">Active</div>
                    <div className="ms-auto fw-bold text-gray-700">30</div>
                  </div>
                  <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                    <div className="bullet bg-success me-3"></div>
                    <div className="text-gray-400">Completed</div>
                    <div className="ms-auto fw-bold text-gray-700">45</div>
                  </div>
                  <div className="d-flex fs-6 fw-semibold align-items-center mb-3">
                    <div className="bullet bg-danger me-3"></div>
                    <div className="text-gray-400">Overdue</div>
                    <div className="ms-auto fw-bold text-gray-700">0</div>
                  </div>
                  <div className="d-flex fs-6 fw-semibold align-items-center">
                    <div className="bullet bg-gray-300 me-3"></div>
                    <div className="text-gray-400">Yet to start</div>
                    <div className="ms-auto fw-bold text-gray-700">25</div>
                  </div>
                </div>
              </div>
              <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                <div className="d-flex flex-stack flex-grow-1">
                  <div className="fw-semibold">
                    <div className="fs-6 text-gray-700">
                      <a href="/" className="fw-bold me-1">Invite New .NET Collaborators</a>to create great outstanding business to business .jsp modutr class scripts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bold mb-1">Tasks Over Time</h3>
                <div className="fs-6 d-flex text-gray-400 fs-6 fw-semibold">
                  <div className="d-flex align-items-center me-6">
                    <span className="menu-bullet d-flex align-items-center me-2">
                      <span className="bullet bg-success"></span>
                    </span>Complete</div>
                  <div className="d-flex align-items-center">
                    <span className="menu-bullet d-flex align-items-center me-2">
                      <span className="bullet bg-primary"></span>
                    </span>Incomplete</div>
                </div>
              </div>
              <div className="card-toolbar">
                <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-solid form-select-sm fw-bold w-100px">
                  <option value="1">2020 Q1</option>
                  <option value="2">2020 Q2</option>
                  <option value="3">2020 Q3</option>
                  <option value="4">2020 Q4</option>
                </select>
              </div>
            </div>
            <div className="card-body pt-10 pb-0 px-5">
              {/* <div id="kt_project_overview_graph" className="card-rounded-bottom" style={{ height: '300px' }}></div> */}
              <div ref={lineChartRef} id="kt_project_overview_graph" className="card-rounded-bottom" style={{ height: '300px' }}></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bold mb-1">What's on the road?</h3>
                <div className="fs-6 text-gray-400">Total 482 participants</div>
              </div>
              <div className="card-toolbar">
                <select name="status" data-control="select2" data-hide-search="true" className="form-select form-select-solid form-select-sm fw-bold w-100px">
                  <option value="1">Options</option>
                  <option value="2">Option 1</option>
                  <option value="3">Option 2</option>
                  <option value="4">Option 3</option>
                </select>
              </div>
            </div>
            <div className="card-body p-9 pt-4">
              <ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">
                {
                  days.map((cell) => (
                    <li className="nav-item me-1" key={cell.num}>
                      <a
                        className={clsx("nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 btn-active-primary", { 'active': day === cell.num })}
                        data-bs-toggle="tab"
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          setDay(cell.num);
                        }}
                      >
                        <span className="opacity-50 fs-7 fw-semibold">{cell.day}</span>
                        <span className="fs-6 fw-bold">{cell.num}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
              <div className="tab-content">
                <div id="kt_schedule_day_0" className={clsx("tab-pane fade show", { 'active': day === 22 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Yannis Gloverson</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">12:00 - 13:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Walter White</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">13:00 - 14:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Michael Walters</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_1" className={clsx("tab-pane fade show", { 'active': day === 23 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Caleb Donaldson</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Kendell Trevor</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch & Learn Catch Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Mark Randall</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_2" className={clsx("tab-pane fade show", { 'active': day === 24 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch & Learn Catch Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Naomi Hayabusa</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Caleb Donaldson</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_3" className={clsx("tab-pane fade show", { 'active': day === 25 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Michael Walters</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Sean Bean</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_4" className={clsx("tab-pane fade show", { 'active': day === 26 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Lunch & Learn Catch Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Peter Marcus</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_5" className={clsx("tab-pane fade show", { 'active': day === 27 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Mark Randall</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Michael Walters</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_6" className={clsx("tab-pane fade show", { 'active': day === 28 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">14:30 - 15:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Naomi Hayabusa</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">12:00 - 13:00
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Michael Walters</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">9:00 - 10:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">David Stevenson</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_7" className={clsx("tab-pane fade show", { 'active': day === 29 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Mark Randall</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Michael Walters</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_8" className={clsx("tab-pane fade show", { 'active': day === 30 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Mark Randall</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Michael Walters</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
                <div id="kt_schedule_day_9" className={clsx("tab-pane fade show", { 'active': day === 31 })}>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">11:00 - 11:45
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Mark Randall</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">10:00 - 11:00
                        <span className="fs-7 text-gray-400 text-uppercase">am</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Bob Harris</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                  <div className="d-flex flex-stack position-relative mt-8">
                    <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                    <div className="fw-semibold ms-5 text-gray-600">
                      <div className="fs-5">16:30 - 17:30
                        <span className="fs-7 text-gray-400 text-uppercase">pm</span></div>
                      <a href="/" className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                      <div className="text-gray-400">Lead by
                        <a href="/">Michael Walters</a></div>
                    </div>
                    <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bold mb-1">Latest Files</h3>
                <div className="fs-6 text-gray-400">Total 382 fiels, 2,6GB space usage</div>
              </div>
              <div className="card-toolbar">
                <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
              </div>
            </div>
            <div className="card-body p-9 pt-3">
              <div className="d-flex flex-column mb-9">
                <div className="d-flex align-items-center mb-5">
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="/media/svg/files/pdf.svg" />
                  </div>
                  <div className="fw-semibold">
                    <a className="fs-6 fw-bold text-dark text-hover-primary" href="/">Project tech requirements</a>
                    <div className="text-gray-400">2 days ago
                      <a href="/">Karina Clark</a></div>
                  </div>
                  <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                          <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                  </button>
                  <FilterOptions />
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="/media/svg/files/doc.svg" />
                  </div>
                  <div className="fw-semibold">
                    <a className="fs-6 fw-bold text-dark text-hover-primary" href="/">Create FureStibe branding proposal</a>
                    <div className="text-gray-400">Due in 1 day
                      <a href="/">Marcus Blake</a></div>
                  </div>
                  <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                          <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                  </button>
                  <FilterOptions />
                </div>
                <div className="d-flex align-items-center mb-5">
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="/media/svg/files/css.svg" />
                  </div>
                  <div className="fw-semibold">
                    <a className="fs-6 fw-bold text-dark text-hover-primary" href="/">Completed Project Stylings</a>
                    <div className="text-gray-400">Due in 1 day
                      <a href="/">Terry Barry</a></div>
                  </div>
                  <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                          <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                  </button>
                  <FilterOptions />
                </div>
                <div className="d-flex align-items-center">
                  <div className="symbol symbol-30px me-5">
                    <img alt="Icon" src="/media/svg/files/ai.svg" />
                  </div>
                  <div className="fw-semibold">
                    <a className="fs-6 fw-bold text-dark text-hover-primary" href="/">Create Project Wireframes</a>
                    <div className="text-gray-400">Due in 3 days
                      <a href="/">Roth Bloom</a></div>
                  </div>
                  <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                          <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                          <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                  </button>
                  <FilterOptions />
                </div>
              </div>
              <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                  <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.25" d="M8.375 11.167C8.375 6.54161 12.1246 2.79199 16.75 2.79199H43.9893C46.2105 2.79199 48.3407 3.67436 49.9113 5.24497L56.172 11.5057C57.7426 13.0763 58.625 15.2065 58.625 17.4277V55.8337C58.625 60.459 54.8754 64.2087 50.25 64.2087H16.75C12.1246 64.2087 8.375 60.459 8.375 55.8337V11.167Z" fill="#00A3FF" />
                    <path d="M41.875 5.28162C41.875 3.90663 42.9896 2.79199 44.3646 2.79199V2.79199C46.3455 2.79199 48.2452 3.57889 49.6459 4.97957L56.4374 11.7711C57.8381 13.1718 58.625 15.0715 58.625 17.0524V17.0524C58.625 18.4274 57.5104 19.542 56.1354 19.542H44.6667C43.1249 19.542 41.875 18.2921 41.875 16.7503V5.28162Z" fill="#00A3FF" />
                    <path d="M32.4311 25.3368C32.1018 25.4731 31.7933 25.675 31.5257 25.9427L23.1507 34.3177C22.0605 35.4079 22.0605 37.1755 23.1507 38.2657C24.2409 39.3559 26.0085 39.3559 27.0987 38.2657L30.708 34.6563V47.4583C30.708 49.0001 31.9579 50.25 33.4997 50.25C35.0415 50.25 36.2913 49.0001 36.2913 47.4583V34.6563L39.9007 38.2657C40.9909 39.3559 42.7585 39.3559 43.8487 38.2657C44.9389 37.1755 44.9389 35.4079 43.8487 34.3177L35.4737 25.9427C34.6511 25.1201 33.443 24.9182 32.4311 25.3368Z" fill="#00A3FF" />
                  </svg>
                </span>
                <div className="d-flex flex-stack flex-grow-1">
                  <div className="fw-semibold">
                    <h4 className="text-gray-900 fw-bold">Quick file uploader</h4>
                    <div className="fs-6 text-gray-700">Drag & Drop or choose files from computer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bold mb-1">New Contibutors</h3>
                <div className="fs-6 text-gray-400">From total 482 Participants</div>
              </div>
              <div className="card-toolbar">
                <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
              </div>
            </div>
            <div className="card-body d-flex flex-column p-9 pt-3 mb-9">
              <div className="d-flex align-items-center mb-5">
                <div className="me-5 position-relative">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="/media/avatars/300-6.jpg" />
                  </div>
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-5 fw-bold text-gray-900 text-hover-primary">Emma Smith</a>
                  <div className="text-gray-400">8 Pending & 97 Completed Tasks</div>
                </div>
                <div className="badge badge-light ms-auto">5</div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="me-5 position-relative">
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                  </div>
                  <div className="bg-success position-absolute h-8px w-8px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"></div>
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-5 fw-bold text-gray-900 text-hover-primary">Melody Macy</a>
                  <div className="text-gray-400">5 Pending & 84 Completed</div>
                </div>
                <div className="badge badge-light ms-auto">8</div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="me-5 position-relative">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="/media/avatars/300-1.jpg" />
                  </div>
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-5 fw-bold text-gray-900 text-hover-primary">Max Smith</a>
                  <div className="text-gray-400">9 Pending & 103 Completed</div>
                </div>
                <div className="badge badge-light ms-auto">9</div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="me-5 position-relative">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="/media/avatars/300-5.jpg" />
                  </div>
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-5 fw-bold text-gray-900 text-hover-primary">Sean Bean</a>
                  <div className="text-gray-400">3 Pending & 55 Completed</div>
                </div>
                <div className="badge badge-light ms-auto">3</div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-5 position-relative">
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="/media/avatars/300-25.jpg" />
                  </div>
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-5 fw-bold text-gray-900 text-hover-primary">Brian Cox</a>
                  <div className="text-gray-400">4 Pending & 115 Completed</div>
                </div>
                <div className="badge badge-light ms-auto">4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-flush h-lg-100">
            <div className="card-header mt-6">
              <div className="card-title flex-column">
                <h3 className="fw-bold mb-1">My Tasks</h3>
                <div className="fs-6 text-gray-400">Total 25 tasks in backlog</div>
              </div>
              <div className="card-toolbar">
                <a href="/" className="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
              </div>
            </div>
            <div className="card-body d-flex flex-column mb-9 p-9 pt-3">
              <div className="d-flex align-items-center position-relative mb-7">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-6 fw-bold text-gray-900 text-hover-primary">Create FureStibe branding logo</a>
                  <div className="text-gray-400">Due in 1 day
                    <a href="/">Karina Clark</a></div>
                </div>
                <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  <span className="svg-icon svg-icon-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                </button>
                <FilterOptions />
              </div>
              <div className="d-flex align-items-center position-relative mb-7">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-6 fw-bold text-gray-900 text-hover-primary">Schedule a meeting with FireBear CTO John</a>
                  <div className="text-gray-400">Due in 3 days
                    <a href="/">Rober Doe</a></div>
                </div>
                <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  <span className="svg-icon svg-icon-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                </button>
                <FilterOptions />
              </div>
              <div className="d-flex align-items-center position-relative mb-7">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-6 fw-bold text-gray-900 text-hover-primary">9 Degree Porject Estimation</a>
                  <div className="text-gray-400">Due in 1 week
                    <a href="/">Neil Owen</a></div>
                </div>
                <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  <span className="svg-icon svg-icon-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                </button>
                <FilterOptions />
              </div>
              <div className="d-flex align-items-center position-relative mb-7">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-6 fw-bold text-gray-900 text-hover-primary">Dashgboard UI & UX for Leafr CRM</a>
                  <div className="text-gray-400">Due in 1 week
                    <a href="/">Olivia Wild</a></div>
                </div>
                <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  <span className="svg-icon svg-icon-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                </button>
                <FilterOptions />
              </div>
              <div className="d-flex align-items-center position-relative">
                <div className="position-absolute top-0 start-0 rounded h-100 bg-secondary w-4px"></div>
                <div className="form-check form-check-custom form-check-solid ms-6 me-4">
                  <input className="form-check-input" type="checkbox" value="" />
                </div>
                <div className="fw-semibold">
                  <a href="/" className="fs-6 fw-bold text-gray-900 text-hover-primary">Mivy App R&D, Meeting with clients</a>
                  <div className="text-gray-400">Due in 2 weeks
                    <a href="/">Sean Bean</a></div>
                </div>
                <button type="button" className="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  <span className="svg-icon svg-icon-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                </button>
                <FilterOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-flush mt-6 mt-xl-9">
        <div className="card-header mt-5">
          <div className="card-title flex-column">
            <h3 className="fw-bold mb-1">Project Spendings</h3>
            <div className="fs-6 text-gray-400">Total $260,300 sepnt so far</div>
          </div>
          <div className="card-toolbar my-1">
            <div className="me-6 my-1">
              <select id="kt_filter_year" name="year" data-control="select2" data-hide-search="true" className="w-125px form-select form-select-solid form-select-sm">
                <option value="All">All time</option>
                <option value="thisyear">This year</option>
                <option value="thismonth">This month</option>
                <option value="lastmonth">Last month</option>
                <option value="last90days">Last 90 days</option>
              </select>
            </div>
            <div className="me-4 my-1">
              <select id="kt_filter_orders" name="orders" data-control="select2" data-hide-search="true" className="w-125px form-select form-select-solid form-select-sm">
                <option value="All">All Orders</option>
                <option value="Approved">Approved</option>
                <option value="Declined">Declined</option>
                <option value="In Progress">In Progress</option>
                <option value="In Transit">In Transit</option>
              </select>
            </div>
            <div className="d-flex align-items-center position-relative my-1">
              <span className="svg-icon svg-icon-3 position-absolute ms-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                  <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                </svg>
              </span>
              <input type="text" id="kt_filter_search" className="form-control form-control-solid form-select-sm w-150px ps-9" placeholder="Search Order" />
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive">
            <div className="dataTables_wrapper dt-bootstrap4 no-footer" id='kt_profile_overview_table_wrapper'>
              <div className='table-responsive'>
                <table id="kt_profile_overview_table" className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold">
                  <thead className="fs-7 text-gray-400 text-uppercase">
                    <tr>
                      <th className="min-w-250px">Manager</th>
                      <th className="min-w-150px">Date</th>
                      <th className="min-w-90px">Amount</th>
                      <th className="min-w-90px">Status</th>
                      <th className="min-w-50px text-end">Details</th>
                    </tr>
                  </thead>
                  <tbody className="fs-6">
                    {
                      slice([...Array(14)], startIndex, endIndex).map((el, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="me-5 position-relative">
                                <div className="symbol symbol-35px symbol-circle">
                                  <img alt="Pic" src="/media/avatars/300-6.jpg" />
                                </div>
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <a href="/" className="fs-6 text-gray-800 text-hover-primary">Emma Smith</a>
                                <div className="fw-semibold text-gray-400">smith@kpmg.com</div>
                              </div>
                            </div>
                          </td>
                          <td>Jun 24, 2022</td>
                          <td>$911.00</td>
                          <td>
                            <span className="badge badge-light-success fw-bold px-4 py-3">Approved</span>
                          </td>
                          <td className="text-end">
                            <a href="/" className="btn btn-light btn-sm">View</a>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start py-3">
                <div className="dataTables_length" id="kt_customers_table_length">
                  <label>
                    <select
                      name="kt_customers_table_length"
                      aria-controls="kt_customers_table"
                      className="form-select form-select-sm form-select-solid"
                      onChange={handleChangePageSize}
                      value={pageSize.toString()}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end py-3">
                <div className="dataTables_paginate paging_simple_numbers" id="kt_customers_table_paginate">
                  <Pagination
                    page={page}
                    count={Math.ceil(14 / pageSize)}
                    onChange={(val) => handleChangePagination(val)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewPannel;
