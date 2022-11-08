import React, { FC, useRef, useEffect } from 'react';
import ApexCharts, {ApexOptions} from 'apexcharts';
import {getCSSVariableValue} from 'assets/ts/_utils';

import FilterOptions from 'components/filterOptions';

const chartOptions = (chartHeight: string): ApexOptions => {
  const labelColor = getCSSVariableValue('--kt-gray-500');
  const borderColor = getCSSVariableValue('--kt-gray-200');
  const secondaryColor = getCSSVariableValue('--kt-gray-300');
  const baseColor = getCSSVariableValue('--kt-primary');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58]
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105]
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 4
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
      opacity: 1
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return "$" + val + " thousands"
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  }
}

const RecentStatisticsCard: FC = () => {

  const chartRef = useRef<HTMLDivElement | null>(null)

  const chartHeight = '350px'

  useEffect(() => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartHeight));
    if (chart) {
      chart.render();
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
    <div className="card mb-10">
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Recent Statistics</span>
          <span className="text-muted fw-semibold fs-7">More than 400 new members</span>
        </h3>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
            <span className="svg-icon svg-icon-2">
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
      <div className="card-body">
        <div ref={chartRef} className='mixed-widget-10-chart'></div>
      </div>
    </div>
  )
}

export default RecentStatisticsCard;
