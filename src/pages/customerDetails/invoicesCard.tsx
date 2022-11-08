import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { slice } from 'lodash';

import Pagination from 'components/pagination';

const InvoicesCard: FC = () => {

  const [tab, setTab] = useState('2022');
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  const handleChangeTab = (e: React.MouseEvent<HTMLAnchorElement>, val: string) => {
    e.preventDefault();
    setTab(val);
  }

  const tableData = [
    {
      id: 1,
      order: 102445788,
      amount: 38.00,
      status: 'Approved',
      date: 'Nov 01, 2020'
    },
    {
      id: 2,
      order: 423445721,
      amount: -2.60,
      status: 'Rejected',
      date: 'Nov 01, 2020'
    },
    {
      id: 3,
      order: 102445788,
      amount: 38.00,
      status: 'Approved',
      date: 'Nov 01, 2020'
    },
    {
      id: 4,
      order: 102445788,
      amount: 38.00,
      status: 'Pending',
      date: 'Nov 01, 2020'
    },
    {
      id: 5,
      order: 102445788,
      amount: 38.00,
      status: 'Approved',
      date: 'Nov 01, 2020'
    },
    {
      id: 6,
      order: 102445788,
      amount: 38.00,
      status: 'Approved',
      date: 'Nov 01, 2020'
    }
  ]

  const handleChangePagination = (val: number) => {
    setPage(val);
    setStartIndex((val - 1) * 10);
    setEndIndex(val * 10);
  }

  return (
    <div className="card pt-2 mb-6 mb-xl-9">
      <div className="card-header border-0">
        <div className="card-title">
          <h2>Invoices</h2>
        </div>
        <div className="card-toolbar m-0">
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
      <div className="card-body pt-0">
        <div id="kt_referred_users_tab_content" className="tab-content">
          <div className={clsx("py-0 tab-pane fade", { 'show active': tab === '2022' })} role="tabpanel">
            <div className="dataTables_wrapper dt-bootstrap4 no-footer">
              <div className="table-responsive">
                <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                    <tr className="text-start text-muted gs-0">
                      <th className="min-w-100px">Order ID</th>
                      <th className="min-w-100px">Amount</th>
                      <th className="min-w-100px">Status</th>
                      <th className="min-w-125px">Date</th>
                      <th className="min-w-100px text-end pe-7">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="fs-6 fw-semibold text-gray-600">
                    {
                      slice(tableData, startIndex, endIndex).map((row) => (
                        <tr key={row.id}>
                          <td>
                            <a href="/" className="text-gray-600 text-hover-primary">{row.order}</a>
                          </td>
                          <td className={clsx({ "text-success": row.amount > 0, 'text-danger': row.amount < 0 })}>
                            {`$${row.amount}`}
                          </td>
                          <td>
                            <span className={clsx("badge", { 'badge-light-success': row.status === 'Approved', 'badge-light-danger': row.status === 'Rejected', 'badge-light-warning': row.status === 'Pending' })}>
                              {row.status}
                            </span>
                          </td>
                          <td>{row.date}</td>
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
                    count={Math.ceil(tableData.length / 5)}
                    onChange={(val) => handleChangePagination(val)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("py-0 tab-pane fade", { 'show active': tab === '2020' })} role="tabpanel">
            <div className="dataTables_wrapper dt-bootstrap4 no-footer">
              <div className="table-responsive">
                <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                    <tr className="text-start text-muted gs-0">
                      <th className="min-w-100px">Order ID</th>
                      <th className="min-w-100px">Amount</th>
                      <th className="min-w-100px">Status</th>
                      <th className="min-w-125px">Date</th>
                      <th className="min-w-100px text-end pe-7">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="fs-6 fw-semibold text-gray-600">
                    {
                      slice(tableData, startIndex, endIndex).map((row) => (
                        <tr key={row.id}>
                          <td>
                            <a href="/" className="text-gray-600 text-hover-primary">{row.order}</a>
                          </td>
                          <td className={clsx({ "text-success": row.amount > 0, 'text-danger': row.amount < 0 })}>
                            {`$${row.amount}`}
                          </td>
                          <td>
                            <span className={clsx("badge", { 'badge-light-success': row.status === 'Approved', 'badge-light-danger': row.status === 'Rejected', 'badge-light-warning': row.status === 'Pending' })}>
                              {row.status}
                            </span>
                          </td>
                          <td>{row.date}</td>
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
                    count={Math.ceil(tableData.length / 5)}
                    onChange={(val) => handleChangePagination(val)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("py-0 tab-pane fade", { 'show active': tab === '2019' })} role="tabpanel">
            <div className="dataTables_wrapper dt-bootstrap4 no-footer">
              <div className="table-responsive">
                <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                    <tr className="text-start text-muted gs-0">
                      <th className="min-w-100px">Order ID</th>
                      <th className="min-w-100px">Amount</th>
                      <th className="min-w-100px">Status</th>
                      <th className="min-w-125px">Date</th>
                      <th className="min-w-100px text-end pe-7">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="fs-6 fw-semibold text-gray-600">
                    {
                      slice(tableData, startIndex, endIndex).map((row) => (
                        <tr key={row.id}>
                          <td>
                            <a href="/" className="text-gray-600 text-hover-primary">{row.order}</a>
                          </td>
                          <td className={clsx({ "text-success": row.amount > 0, 'text-danger': row.amount < 0 })}>
                            {`$${row.amount}`}
                          </td>
                          <td>
                            <span className={clsx("badge", { 'badge-light-success': row.status === 'Approved', 'badge-light-danger': row.status === 'Rejected', 'badge-light-warning': row.status === 'Pending' })}>
                              {row.status}
                            </span>
                          </td>
                          <td>{row.date}</td>
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
                    count={Math.ceil(tableData.length / 5)}
                    onChange={(val) => handleChangePagination(val)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={clsx("py-0 tab-pane fade", { 'show active': tab === '2018' })}role="tabpanel">
            <div className="dataTables_wrapper dt-bootstrap4 no-footer">
              <div className="table-responsive">
                <table id="kt_customer_details_invoices_table_1" className="table align-middle table-row-dashed fs-6 fw-bold gy-5">
                  <thead className="border-bottom border-gray-200 fs-7 text-uppercase fw-bold">
                    <tr className="text-start text-muted gs-0">
                      <th className="min-w-100px">Order ID</th>
                      <th className="min-w-100px">Amount</th>
                      <th className="min-w-100px">Status</th>
                      <th className="min-w-125px">Date</th>
                      <th className="min-w-100px text-end pe-7">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="fs-6 fw-semibold text-gray-600">
                    {
                      slice(tableData, startIndex, endIndex).map((row) => (
                        <tr key={row.id}>
                          <td>
                            <a href="/" className="text-gray-600 text-hover-primary">{row.order}</a>
                          </td>
                          <td className={clsx({ "text-success": row.amount > 0, 'text-danger': row.amount < 0 })}>
                            {`$${row.amount}`}
                          </td>
                          <td>
                            <span className={clsx("badge", { 'badge-light-success': row.status === 'Approved', 'badge-light-danger': row.status === 'Rejected', 'badge-light-warning': row.status === 'Pending' })}>
                              {row.status}
                            </span>
                          </td>
                          <td>{row.date}</td>
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
                    count={Math.ceil(tableData.length / 5)}
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

export default InvoicesCard;
