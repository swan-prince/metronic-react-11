import React, { FC, useState } from 'react';
import { slice } from 'lodash';
import { useNavigate } from 'react-router-dom';

import BreadToolbar from 'components/breadToolbar';
import Pagination from 'components/pagination';
import AddCustomerDialog from 'components/addCustomerDialog';
import ExportCustomersDialog from 'components/exportCustomersDialog';
import CreateAppDialog from 'components/createAppDialog';

const Customers: FC = () => {

  const navigate = useNavigate();

  const defaultTableData = [
    {
      id: 1,
      name: 'Emma Smith',
      email: 'smith@kpmg.com',
      company: '	-',
      paymentType: 'mastercard',
      paymentNumber: '**** 9319',
      createdAt: '14 Dec 2020, 8:43 pm',
      checked: false
    },
    {
      id: 2,
      name: 'Melody Macy',
      email: 'melody@altbox.com',
      company: 'Google',
      paymentType: 'visa',
      paymentNumber: '**** 7599',
      createdAt: '	01 Dec 2020, 10:12 am',
      checked: false
    },
    {
      id: 3,
      name: 'Max Smith',
      email: 'max@kt.com',
      company: 'Bistro Union',
      paymentType: 'mastercard',
      paymentNumber: '**** 7677',
      createdAt: '	12 Nov 2020, 2:01 pm',
      checked: false
    },
    {
      id: 4,
      name: 'Sean Bean',
      email: 'sean@dellito.com',
      company: 'Astro Limited',
      paymentType: 'american-express',
      paymentNumber: '**** 7598',
      createdAt: '21 Oct 2020, 5:54 pm',
      checked: false
    },
    {
      id: 5,
      name: '	Brian Cox',
      email: 'brian@exchange.com',
      company: '-',
      paymentType: 'visa',
      paymentNumber: '**** 5426',
      createdAt: '19 Oct 2020, 7:32 am',
      checked: false
    },
    {
      id: 6,
      name: '	Mikaela Collins',
      email: '	mik@pex.com',
      company: 'Keenthemes',
      paymentType: 'american-express',
      paymentNumber: '**** 5426',
      createdAt: '19 Oct 2020, 7:32 am',
      checked: false
    },
    {
      id: 7,
      name: 'Francis Mitcham',
      email: 'f.mit@kpmg.com',
      company: '	Paypal',
      paymentType: 'mastercard',
      paymentNumber: '**** 5426',
      createdAt: '19 Oct 2020, 7:32 am',
      checked: false
    },
    {
      id: 8,
      name: 'Olivia Wild',
      email: 'olivia@corpmail.com',
      company: '-',
      paymentType: 'mastercard',
      paymentNumber: '**** 5426',
      createdAt: '19 Oct 2020, 7:32 am',
      checked: false
    },
    {
      id: 9,
      name: 'Neil Owen',
      email: 'owen.neil@gmail.com',
      company: 'Paramount',
      paymentType: 'mastercard',
      paymentNumber: '**** 5426',
      createdAt: '19 Oct 2020, 7:32 am',
      checked: false
    },
    {
      id: 10,
      name: 'Dan Wilson',
      email: 'dam@consilting.com',
      company: 'Trinity Studio',
      paymentType: 'mastercard',
      paymentNumber: '**** 5426',
      createdAt: '19 Oct 2020, 7:32 am',
      checked: false
    },
    {
      id: 11,
      name: 'Emma Bold',
      email: 'emma@intenso.com',
      company: 'B&T Legal Services',
      paymentType: 'mastercard',
      paymentNumber: '**** 5426',
      createdAt: '19 Oct 2020, 7:32 am',
      checked: false
    }
  ];

  const [openCreateApp, setOpenCreateApp] = useState(false);
  const [paymentType, setPaymentType] = useState('all');
  const [month, setMonth] = useState('all');
  const [tableData, setTableData] = useState<Array<any>>(defaultTableData);
  const [searchResult, setSearchResult] = useState<Array<any>>(tableData);
  const [checkedAll, setCheckedAll] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [searchOptions, setSearchOptions] = useState<any>({
    searchTxt: '',
    month: 'all',
    paymentType: 'all'
  });
  const [openAddCustomer, setOpenAddCustomer] = useState(false);
  const [openExport, setOpenExport] = useState(false);

  const handleChangeRow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableData(tableData.map((cell) => cell.id === parseInt(e.target.value) ? ({
      ...cell,
      checked: e.target.checked
    }) : ({ ...cell })));
  }

  const handleChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableData(tableData.map((cell) => ({
      ...cell,
      checked: e.target.checked
    })));
    setCheckedAll(e.target.checked);
  }

  const handleChangePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(e.target.value));
  }

  const handleChangePagination = (val: number) => {
    setPage(val);
    setStartIndex((val - 1) * pageSize);
    setEndIndex(val * pageSize);
  }

  const handleSearch = (searchKeys: any) => {
    const _searchTxt = (searchKeys.searchTxt ?? '').trim().toLowerCase();
    let _searchResult = tableData.filter((cell) => cell.name.toLowerCase().includes(_searchTxt) || cell.email.toLowerCase().includes(_searchTxt) || cell.company.toLowerCase().includes(_searchTxt || cell.paymentNumber.includes(_searchTxt)));
    if (searchKeys.paymentType !== 'all') {
      _searchResult = _searchResult.filter(cell => cell.paymentType === searchKeys.paymentType);
    }
    if (searchKeys.month !== 'all') {
      _searchResult = _searchResult.filter(cell => cell.createdAt.toLowerCase().includes(searchKeys.month));
    }
    setSearchResult(_searchResult);
  }

  const handleFilter = () => {
    handleSearch({
      ...searchOptions,
      paymentType: paymentType,
      month: month
    });
  }

  return (
    <div>
      <BreadToolbar 
        breadcrumb={['Customers', 'Customer Listing']} 
        pageTitle='Customer List' 
        handleCreate={() => setOpenCreateApp(true)}
      />
      <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
        <div className="content flex-row-fluid" id="kt_content">
          <div className="card">
            <div className="card-header border-0 pt-6">
              <div className="card-title">
                <div className="d-flex align-items-center position-relative my-1">
                  <span className="svg-icon svg-icon-1 position-absolute ms-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                      <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-solid w-250px ps-15"
                    placeholder="Search Customers"
                    value={searchOptions.searchTxt ?? ''}
                    onChange={(e) => {
                      setSearchOptions({
                        ...searchOptions,
                        searchTxt: e.target.value
                      });
                      handleSearch({
                        ...searchOptions,
                        searchTxt: e.target.value
                      });
                    }}
                  />
                </div>
              </div>
              <div className="card-toolbar">
                <div className="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                  <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon svg-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                      </svg>
                    </span>
                    Filter
                  </button>
                  <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true" id="kt-toolbar-filter">
                    <div className="px-7 py-5">
                      <div className="fs-4 text-dark fw-bold">Filter Options</div>
                    </div>
                    <div className="separator border-gray-200"></div>
                    <div className="px-7 py-5">
                      <div className="mb-10">
                        <label className="form-label fs-5 fw-semibold mb-3">Month:</label>
                        <select
                          className="form-select form-select-solid fw-bold"
                          data-kt-select2="true" data-placeholder="Select option"
                          data-allow-clear="true" data-kt-customer-table-filter="month" data-dropdown-parent="#kt-toolbar-filter"
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                        >
                          <option value='all'>Select option</option>
                          <option value="aug">August</option>
                          <option value="sep">September</option>
                          <option value="oct">October</option>
                          <option value="nov">November</option>
                          <option value="dec">December</option>
                        </select>
                      </div>
                      <div className="mb-10">
                        <label className="form-label fs-5 fw-semibold mb-3">Payment Type:</label>
                        <div className="d-flex flex-column flex-wrap fw-semibold" data-kt-customer-table-filter="payment_type">
                          <label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                            <input className="form-check-input" type="radio" name="payment_type" value="all" checked={paymentType === 'all'} onChange={(e) => setPaymentType(e.target.value)} />
                            <span className="form-check-label text-gray-600">All</span>
                          </label>
                          <label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                            <input className="form-check-input" type="radio" name="payment_type" value="visa" checked={paymentType === 'visa'} onChange={(e) => setPaymentType(e.target.value)} />
                            <span className="form-check-label text-gray-600">Visa</span>
                          </label>
                          <label className="form-check form-check-sm form-check-custom form-check-solid mb-3">
                            <input className="form-check-input" type="radio" name="payment_type" value="mastercard" checked={paymentType === 'mastercard'} onChange={(e) => setPaymentType(e.target.value)} />
                            <span className="form-check-label text-gray-600">Mastercard</span>
                          </label>
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input className="form-check-input" type="radio" name="payment_type" value="american-express" checked={paymentType === 'american-express'} onChange={(e) => setPaymentType(e.target.value)} />
                            <span className="form-check-label text-gray-600">American Express</span>
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true" data-kt-customer-table-filter="reset">Reset</button>
                        <button onClick={handleFilter}
                          type="button" className="btn btn-primary" data-kt-menu-dismiss="true" data-kt-customer-table-filter="filter">Apply</button>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal" onClick={() => setOpenExport(true)}>
                    <span className="svg-icon svg-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1" transform="rotate(90 12.75 4.25)" fill="currentColor" />
                        <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="currentColor" />
                        <path opacity="0.3" d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="currentColor" />
                      </svg>
                    </span>
                    Export
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => setOpenAddCustomer(true)}>Add Customer</button>
                </div>
                <div className="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
                  <div className="fw-bold me-5">
                    <span className="me-2" data-kt-customer-table-select="selected_count"></span>Selected</div>
                  <button type="button" className="btn btn-danger" data-kt-customer-table-select="delete_selected">Delete Selected</button>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="table-responsive">
                  <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" id="kt_customers_table">
                    <thead>
                      <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                        <th className="w-10px pe-2">
                          <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                            <input className="form-check-input" type="checkbox" checked={checkedAll} onChange={handleChangeAll} />
                          </div>
                        </th>
                        <th className="min-w-125px">Customer Name</th>
                        <th className="min-w-125px">Email</th>
                        <th className="min-w-125px">Company</th>
                        <th className="min-w-125px">Payment Method</th>
                        <th className="min-w-125px">Created Date</th>
                        <th className="text-end min-w-70px">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="fw-semibold text-gray-600">
                      {
                        slice(searchResult, startIndex, endIndex).map((row: any) => (
                          <tr key={row.id}>
                            <td>
                              <div className="form-check form-check-sm form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value={`${row.id}`} checked={row.checked} onChange={handleChangeRow} />
                              </div>
                            </td>
                            <td>
                              <a href="../../demo11/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">
                                {row.name}
                              </a>
                            </td>
                            <td>
                              <a href="/" className="text-gray-600 text-hover-primary mb-1">
                                {row.email}
                              </a>
                            </td>
                            <td>{row.company}</td>
                            <td data-filter="mastercard">
                              <img src={`/media/svg/card-logos/${row.paymentType}.svg`} className="w-35px me-3" alt="" />
                              {row.paymentNumber}
                            </td>
                            <td>{row.createdAt}</td>
                            <td className="text-end">
                              <a href="/" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                Actions
                                <span className="svg-icon svg-icon-5 m-0">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                                  </svg>
                                </span>
                              </a>
                              <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                <div className="menu-item px-3">
                                  <a
                                    href="/"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      navigate('/customer-detail');
                                    }}
                                    className="menu-link px-3"
                                  >
                                    View
                                  </a>
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
                      count={Math.ceil(searchResult.length / pageSize)}
                      onChange={(val) => handleChangePagination(val)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ExportCustomersDialog
            show={openExport}
            onHide={() => setOpenExport(false)}
          />
          <AddCustomerDialog
            show={openAddCustomer}
            onHide={() => setOpenAddCustomer(false)}
          />
        </div>
      </div>
      <CreateAppDialog show={openCreateApp} onHide={() => setOpenCreateApp(false)} />
    </div>
  )
}

export default Customers;
