import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { slice } from 'lodash';

import Pagination from 'components/pagination';

const PaymentRecordsCard: FC = () => {

  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const tableData = [
    {
      id: 1,
      invoice: '6948-7848',
      amount: 1200,
      status: 'Successful',
      date: '	14 Dec 2020, 8:43 pm'
    },
    {
      id: 2,
      invoice: '6709-4345',
      amount: 79.00,
      status: 'Successful',
      date: '	01 Dec 2020, 10:12 am'
    },
    {
      id: 3,
      invoice: '3992-3351',
      amount: 5500.00,
      status: 'Successful',
      date: '12 Nov 2020, 2:01 pm'
    },
    {
      id: 4,
      invoice: '6948-7848',
      amount: 1200,
      status: 'Pending',
      date: '21 Oct 2020, 5:54 pm'
    },
    {
      id: 5,
      invoice: '7870-6345',
      amount: 1200,
      status: 'Successful',
      date: '21 Oct 2020, 5:54 pm'
    },
    {
      id: 6,
      invoice: '2476-2041',
      amount: 1200,
      status: 'Successful',
      date: '19 Oct 2020, 7:32 am'
    }
  ]

  const handleChangePagination = (val: number) => {
    setPage(val);
    setStartIndex((val - 1) * 5);
    setEndIndex(val * 5);
  }

  return (
    <div className="card pt-4 mb-6 mb-xl-9">
      <div className="card-header border-0">
        <div className="card-title">
          <h2>Payment Records</h2>
        </div>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_payment">
            <span className="svg-icon svg-icon-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
                <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor" />
              </svg>
            </span>
            Add payment
          </button>
        </div>
      </div>
      <div className="card-body pt-0 pb-5">
        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
          <div className="table-responsive">
            <table className="table align-middle table-row-dashed gy-5" id="kt_table_customers_payment">
              <thead className="border-bottom border-gray-200 fs-7 fw-bold">
                <tr className="text-start text-muted text-uppercase gs-0">
                  <th className="min-w-100px">Invoice No.</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th className="min-w-100px">Date</th>
                  <th className="text-end min-w-100px pe-4">Actions</th>
                </tr>
              </thead>
              <tbody className="fs-6 fw-semibold text-gray-600">
                {
                  slice(tableData, startIndex, endIndex).map((row) => (
                    <tr key={row.id}>
                      <td>
                        <a href="/" className="text-gray-600 text-hover-primary mb-1">{row.invoice}</a>
                      </td>
                      <td>
                        <span className={clsx("badge", { 'badge-light-success': row.status === 'Successful', 'badge-light-warning': row.status === 'Pending' })}>
                          {row.status}
                        </span>
                      </td>
                      <td>{`$${row.amount}`}</td>
                      <td>{row.date}</td>
                      <td className="pe-0 text-end">
                        <a href="/" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                          <span className="svg-icon svg-icon-5 m-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                            </svg>
                          </span>
                        </a>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                          <div className="menu-item px-3">
                            <a href="../../demo11/dist/apps/customers/view.html" className="menu-link px-3">View</a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="/" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
                          </div>
                        </div>
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
  )
}

export default PaymentRecordsCard;
