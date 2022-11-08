import React, { FC, useState } from 'react';
import { slice } from 'lodash';
import clsx from 'clsx';

import Pagination from 'components/pagination';

const UsersPannel: FC = () => {

  const [tab, setTab] = useState('card');
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(9);
  const [pageSize, setPageSize] = useState(9);

  const handleChangePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(e.target.value));
  }

  const handleChangePagination = (val: number) => {
    setPage(val);
    setStartIndex((val - 1) * pageSize);
    setEndIndex(val * pageSize);
  }

  return (
    <div>
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center my-1">
          <h3 className="fw-bold me-5 my-1">Users (38)</h3>
          <div className="d-flex align-items-center position-relative my-1">
            <span className="svg-icon svg-icon-3 position-absolute ms-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
              </svg>
            </span>
            <input type="text" id="kt_filter_search" className="form-control form-control-sm form-control-solid w-150px ps-10" placeholder="Search" />
          </div>
        </div>
        <div className="d-flex flex-wrap my-1">
          <ul className="nav nav-pills me-6 mb-2 mb-sm-0">
            <li className="nav-item m-0">
              <a className={clsx("btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3", { 'active': tab === 'card' })}
                onClick={(e) => {
                  e.preventDefault();
                  setTab('card');
                }}
                data-bs-toggle="tab" href="/">
                <span className="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
                      <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                      <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                      <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav-item m-0">
              <a className={clsx("btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3", { 'active': tab === 'table' })}
                data-bs-toggle="tab"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setTab('table');
                }}
              >
                <span className="svg-icon svg-icon-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <div className="d-flex my-0">
            <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Filter" className="form-select form-select-sm form-select-solid w-150px me-5">
              <option value="1">Recently Updated</option>
              <option value="2">Last Month</option>
              <option value="3">Last Quarter</option>
              <option value="4">Last Year</option>
            </select>
            <select name="status" data-control="select2" data-hide-search="true" data-placeholder="Export" className="form-select form-select-sm form-select-solid w-100px">
              <option value="1">Excel</option>
              <option value="1">PDF</option>
              <option value="2">Print</option>
            </select>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div id="kt_project_users_card_pane" className={clsx("tab-pane fade", { 'show active': tab === 'card' })}>
          <div className="row g-6 g-xl-9">
            {
              slice([...Array(14)], startIndex, endIndex).map((cell, index) => (
                <div className="col-md-6 col-xxl-4" key={index}>
                  <div className="card">
                    <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                      <div className="symbol symbol-65px symbol-circle mb-5">
                        <img src="/media/avatars/300-2.jpg" alt="image" />
                        <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                      </div>
                      <a href="/" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">Karina Clark</a>
                      <div className="fw-semibold text-gray-400 mb-6">Art Director at Novica Co.</div>
                      <div className="d-flex flex-center flex-wrap">
                        <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                          <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                          <div className="fw-semibold text-gray-400">Earnings</div>
                        </div>
                        <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                          <div className="fs-6 fw-bold text-gray-700">23</div>
                          <div className="fw-semibold text-gray-400">Tasks</div>
                        </div>
                        <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                          <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                          <div className="fw-semibold text-gray-400">Sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="d-flex flex-stack flex-wrap pt-10">
            <div className="fs-6 fw-semibold text-gray-700">Showing 1 to 10 of 50 entries</div>
            <Pagination
              page={page}
              count={Math.ceil(14 / pageSize)}
              onChange={(val) => handleChangePagination(val)}
            />
          </div>
        </div>
        <div id="kt_project_users_card_pane" className={clsx("tab-pane fade", { 'show active': tab === 'table' })}>
          <div className="card card-flush">
            <div className="card-body pt-0">
              <div className="table-responsive">
                <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                  <div className="table-responsive">
                    <table id="kt_project_users_table" className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold">
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
                                    <a href="/" className="mb-1 text-gray-800 text-hover-primary">Emma Smith</a>
                                    <div className="fw-semibold fs-6 text-gray-400">smith@kpmg.com</div>
                                  </div>
                                </div>
                              </td>
                              <td>Aug 19, 2022</td>
                              <td>$864.00</td>
                              <td>
                                <span className="badge badge-light-info fw-bold px-4 py-3">In progress</span>
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
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
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
      </div>
    </div>
  )
}

export default UsersPannel;
