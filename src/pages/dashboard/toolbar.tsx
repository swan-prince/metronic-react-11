import React, { FC, useRef, useEffect } from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts';
import { getCSSVariableValue } from 'assets/ts/_utils';

import FilterOptions from 'components/filterOptions';

const chartOptions = (chartHeight: string): ApexOptions => { 

  return {
    labels: ["Total Members"],
    series: [74],
    chart: {
      fontFamily: 'inherit',
      type: 'radialBar',
      height: chartHeight,
      offsetY: 0
    },
    tooltip: {
      enabled: true,
      intersect: false,
      // mode: 'nearest',
      // bodySpacing: 5,
      // yPadding: 10,
      // xPadding: 10,
      // caretPadding: 0,
      // displayColors: false,
      // backgroundColor: '#20D489',
      // titleFontColor: '#ffffff',
      // cornerRadius: 4,
      // footerSpacing: 0,
      // titleSpacing: 0
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,

        hollow: {
          margin: 0,
          size: "70%"
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: "13px",
            fontWeight: "700",
            offsetY: -5,
            color: getCSSVariableValue('--kt-gray-500')
          },
          value: {
            color: getCSSVariableValue('--kt-gray-700'),
            fontSize: "30px",
            fontWeight: "700",
            offsetY: -40,
            show: true
          }
        },
        track: {
          background: getCSSVariableValue('--kt-primary-light'),
          strokeWidth: '100%'
        }
      }
    },
    colors: [getCSSVariableValue('--kt-primary')],   
    stroke: {
      lineCap: "round",
    }   
  }
}

const Toolbar: FC = () => {

  const chartRef = useRef<HTMLDivElement | null>(null)

  const chartHeight = '260px'

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartHeight))
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
    <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
      <div id="kt_toolbar_container" className="container-xxl py-5">
        <div className="row gy-0 gx-10">
          <div className="col-xl-8">
            <div className="card card-xl-stretch bg-body border-0 mb-5 mb-xl-0">
              <div className="card-body d-flex flex-column flex-lg-row flex-stack p-lg-15">
                <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-start me-10 text-center text-lg-start">
                  <h3 className="fs-2hx line-height-lg mb-5">
                    <span className="fw-bold">Brilliant App Ideas</span>
                    <br />
                    <span className="fw-bold">for Startups</span>
                  </h3>
                  <div className="fs-4 text-muted mb-7">Long before you sit down to put the pen
                    <br />need to make sure you breathe</div>
                  <a href='/' className="btn btn-success fw-semibold px-6 py-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">Create an Store</a>
                </div>
                <img src="/media/illustrations/sketchy-1/11.png" alt="" className="mw-200px mw-lg-350px mt-lg-n10" />
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card card-xl-stretch bg-body border-0">
              <div className="card-body pt-5 mb-xl-9 position-relative">
                <div className="d-flex flex-stack">
                  <h4 className="fw-bold text-gray-800 m-0">User Base</h4>
                  <div className="me-1">
                    <button className="btn btn-icon btn-color-gray-500 w-auto px-0 btn-active-color-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      // data-kt-menu-overflow="true"
                      data-kt-menu-flip='top-end'
                    >
                      <span className="svg-icon svg-icon-1 me-n1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
                          <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                          <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                          <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                        </svg>
                      </span>
                    </button>
                    <FilterOptions />
                  </div>
                </div>
                <div className="d-flex flex-center mb-5 mb-xxl-0">                  
                  <div ref={chartRef} id="kt_charts_mixed_widget_16_chart" style={{ height: '260px' }}></div>
                </div>
                <div className="text-center position-absolute bottom-0 start-50 translate-middle-x w-100 mb-10">
                  <p className="fw-semibold fs-4 text-gray-400 mb-7 px-5">Long before you sit down to put the
                    <br />make sure you breathe</p>
                  <div className="m-0">
                    <a href='/' className="btn btn-success fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Users</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar;
