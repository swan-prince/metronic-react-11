import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { slice } from 'lodash';

import Pagination from 'components/pagination';

interface Props {
  active: boolean;
}

const StatementsPannel: FC<Props> = (props) => {

  const { active } = props;

  const [tab, setTab] = useState('2022');
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const tableData = [
    {
      id: 1,
      date: 'May 30, 2020',
      orderId: '523445943',
      details: 'Seller Fee',
      amount: -1.30
    },
    {
      id: 2,
      date: 'Apr 22, 2020',
      orderId: '231445943',
      details: 'Parcel Shipping / Delivery Service App',
      amount: 204.00
    },
    {
      id: 3,
      date: 'Feb 09, 2020',
      orderId: '426445943',
      details: 'Visual Design Illustration',
      amount: 31.00
    },
    {
      id: 4,
      date: 'Nov 01, 2020',
      orderId: '984445943',
      details: 'Abstract Vusial Pack',
      amount: 52.00
    },
    {
      id: 5,
      date: 'Jan 04, 2020',
      orderId: '324442313',
      details: 'Seller Fee',
      amount: -0.80
    },
    {
      id: 6,
      date: 'Nov 01, 2020',
      orderId: '102445788',
      details: 'Darknight transparency 36 Icons Pack',
      amount: 38.00
    },
    {
      id: 7,
      date: 'Oct 24, 2020',
      orderId: '423445721',
      details: 'Seller Fee',
      amount: -2.60
    },
    {
      id: 8,
      date: 'Oct 08, 2020',
      orderId: '312445984',
      details: 'Cartoon Mobile Emoji Phone Pack',
      amount: 76.00
    },
    {
      id: 9,
      date: 'Sep 15, 2020',
      orderId: '312445984',
      details: 'Iphone 12 Pro Mockup Mega Bundle',
      amount: 5.00
    },
    {
      id: 10,
      date: 'May 30, 2020',
      orderId: '523445943	',
      details: 'Seller Fee',
      amount: -1.30
    },
    {
      id: 11,
      date: 'Apr 22, 2020',
      orderId: '231445943',
      details: 'Parcel Shipping / Delivery Service App',
      amount: 204.00
    }
  ]

  const handleChangePagination = (val: number) => {
    setPage(val);
    setStartIndex((val - 1) * 10);
    setEndIndex(val * 10);
  }

  const handleChangeTab = (e: React.MouseEvent<HTMLAnchorElement>, val: string) => {
    e.preventDefault();
    setTab(val);
  }

  return (
    <div className={clsx("tab-pane fade", { 'show active': active })} id="kt_customer_view_overview_statements" role="tabpanel">
      <div className="card mb-6 mb-xl-9">
        <div className="card-header border-0">
          <div className="card-title">
            <h2>Earnings</h2>
          </div>
        </div>
        <div className="card-body py-0">
          <div className="fs-5 fw-semibold text-gray-500 mb-4">Last 30 day earnings calculated. Apart from arranging the order of topics.</div>
          <div className="d-flex flex-wrap flex-stack mb-5">
            <div className="d-flex flex-wrap">
              <div className="border border-dashed border-gray-300 w-150px rounded my-3 p-4 me-6">
                <span className="fs-1 fw-bold text-gray-800 lh-1">
                  <span data-kt-countup="true" data-kt-countup-value="6,840" data-kt-countup-prefix="$">$6,840</span>
                  <span className="svg-icon svg-icon-1 svg-icon-success">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor" />
                      <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
                <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">Net Earnings</span>
              </div>
              <div className="border border-dashed border-gray-300 w-125px rounded my-3 p-4 me-6">
                <span className="fs-1 fw-bold text-gray-800 lh-1">
                  <span className="" data-kt-countup="true" data-kt-countup-value="16">16</span>%
                  <span className="svg-icon svg-icon-1 svg-icon-danger">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="currentColor" />
                      <path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="currentColor" />
                    </svg>
                  </span>
                </span>
                <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">Change</span>
              </div>
              <div className="border border-dashed border-gray-300 w-150px rounded my-3 p-4 me-6">
                <span className="fs-1 fw-bold text-gray-800 lh-1">
                  <span data-kt-countup="true" data-kt-countup-value="1,240" data-kt-countup-prefix="$">$1,240 </span>
                  <span className="text-primary">--</span>
                </span>
                <span className="fs-6 fw-semibold text-muted d-block lh-1 pt-2">Fees</span>
              </div>
            </div>
            <a href="/" className="btn btn-sm btn-light-primary flex-shrink-0">Withdraw Earnings</a>
          </div>
        </div>
      </div>
      <div className="card mb-6 mb-xl-9">
        <div className="card-header">
          <div className="card-title">
            <h2>Statement</h2>
          </div>
          <div className="card-toolbar">
            <ul className="nav nav-stretch fs-5 fw-semibold nav-line-tabs nav-line-tabs-2x border-transparent" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className={clsx("nav-link text-active-primary", { 'active': tab === '2022' })}
                  data-bs-toggle="tab" role="tab" href="/"
                  onClick={(e) => handleChangeTab(e, '2022')}
                >
                  This Year
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={clsx("nav-link text-active-primary", { 'active': tab === '2020' })}
                  data-bs-toggle="tab" role="tab" href="/"
                  onClick={(e) => handleChangeTab(e, '2020')}
                >
                  2020
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={clsx("nav-link text-active-primary", { 'active': tab === '2019' })}
                  data-bs-toggle="tab" role="tab" href="/"
                  onClick={(e) => handleChangeTab(e, '2019')}
                >
                  2019
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className={clsx("nav-link text-active-primary", { 'active': tab === '2018' })}
                  data-bs-toggle="tab" role="tab" href="/"
                  onClick={(e) => handleChangeTab(e, '2018')}
                >
                  2018
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body pb-5">
          <div id="kt_customer_view_statement_tab_content" className="tab-content">
            <div id="kt_customer_view_statement_1" className={clsx("py-0 tab-pane fade", { 'show active': tab === '2022' })} role="tabpanel">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                  <table id="kt_customer_view_statement_table_1" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                    <thead className="border-bottom border-gray-200">
                      <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                        <th className="w-125px">Date</th>
                        <th className="w-100px">Order ID</th>
                        <th className="w-300px">Details</th>
                        <th className="w-100px">Amount</th>
                        <th className="w-100px text-end pe-7">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        slice(tableData, startIndex, endIndex).map((row) => (
                          <tr key={row.id}>
                            <td>{row.date}</td>
                            <td>
                              <a href="/" className="text-gray-600 text-hover-primary">{row.orderId}</a>
                            </td>
                            <td>{row.details}</td>
                            <td className={clsx({ "text-success": row.amount > 0, "text-danger": row.amount < 0 })}>{`$${row.amount}`}</td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                  <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                    <Pagination
                      page={page}
                      count={Math.ceil(tableData.length / 10)}
                      onChange={(val) => handleChangePagination(val)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="kt_customer_view_statement_2" className={clsx("py-0 tab-pane fade", { 'show active': tab === '2020' })} role="tabpanel">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                  <table id="kt_customer_view_statement_table_1" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                    <thead className="border-bottom border-gray-200">
                      <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                        <th className="w-125px">Date</th>
                        <th className="w-100px">Order ID</th>
                        <th className="w-300px">Details</th>
                        <th className="w-100px">Amount</th>
                        <th className="w-100px text-end pe-7">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        slice(tableData, startIndex, endIndex).map((row) => (
                          <tr key={row.id}>
                            <td>{row.date}</td>
                            <td>
                              <a href="/" className="text-gray-600 text-hover-primary">{row.orderId}</a>
                            </td>
                            <td>{row.details}</td>
                            <td className={clsx({ "text-success": row.amount > 0, "text-danger": row.amount < 0 })}>{`$${row.amount}`}</td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                  <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                    <Pagination
                      page={page}
                      count={Math.ceil(tableData.length / 10)}
                      onChange={(val) => handleChangePagination(val)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="kt_customer_view_statement_3" className={clsx("py-0 tab-pane fade", { 'show active': tab === '2019' })} role="tabpanel">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                  <table id="kt_customer_view_statement_table_1" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                    <thead className="border-bottom border-gray-200">
                      <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                        <th className="w-125px">Date</th>
                        <th className="w-100px">Order ID</th>
                        <th className="w-300px">Details</th>
                        <th className="w-100px">Amount</th>
                        <th className="w-100px text-end pe-7">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        slice(tableData, startIndex, endIndex).map((row) => (
                          <tr key={row.id}>
                            <td>{row.date}</td>
                            <td>
                              <a href="/" className="text-gray-600 text-hover-primary">{row.orderId}</a>
                            </td>
                            <td>{row.details}</td>
                            <td className={clsx({ "text-success": row.amount > 0, "text-danger": row.amount < 0 })}>{`$${row.amount}`}</td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                  <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                    <Pagination
                      page={page}
                      count={Math.ceil(tableData.length / 10)}
                      onChange={(val) => handleChangePagination(val)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="kt_customer_view_statement_4" className={clsx("py-0 tab-pane fade", { 'show active': tab === '2018' })} role="tabpanel">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                  <table id="kt_customer_view_statement_table_1" className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-4">
                    <thead className="border-bottom border-gray-200">
                      <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                        <th className="w-125px">Date</th>
                        <th className="w-100px">Order ID</th>
                        <th className="w-300px">Details</th>
                        <th className="w-100px">Amount</th>
                        <th className="w-100px text-end pe-7">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        slice(tableData, startIndex, endIndex).map((row) => (
                          <tr key={row.id}>
                            <td>{row.date}</td>
                            <td>
                              <a href="/" className="text-gray-600 text-hover-primary">{row.orderId}</a>
                            </td>
                            <td>{row.details}</td>
                            <td className={clsx({ "text-success": row.amount > 0, "text-danger": row.amount < 0 })}>{`$${row.amount}`}</td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-light btn-active-light-primary">Download</button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                  <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                    <Pagination
                      page={page}
                      count={Math.ceil(tableData.length / 10)}
                      onChange={(val) => handleChangePagination(val)}
                    />
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

export default StatementsPannel;
