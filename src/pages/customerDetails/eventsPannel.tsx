import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  active: boolean;
}

const EventsPannel: FC<Props> = (props) => {

  const { active } = props;

  return (
    <div className={clsx("tab-pane fade", {'show active': active})} id="kt_customer_view_overview_events_and_logs_tab" role="tabpanel">
      <div className="card pt-4 mb-6 mb-xl-9">
        <div className="card-header border-0">
          <div className="card-title">
            <h2>Logs</h2>
          </div>
          <div className="card-toolbar">
            <button type="button" className="btn btn-sm btn-light-primary">
              <span className="svg-icon svg-icon-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z" fill="currentColor" />
                  <path d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z" fill="currentColor" />
                  <path opacity="0.3" d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z" fill="currentColor" />
                </svg>
              </span>
              Download Report</button>
          </div>
        </div>
        <div className="card-body py-0">
          <div className="table-responsive">
            <table className="table align-middle table-row-dashed fw-semibold text-gray-600 fs-6 gy-5" id="kt_table_customers_logs">
              <tbody>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-success">200 OK</div>
                  </td>
                  <td>POST /v1/invoices/in_1950_9352/payment</td>
                  <td className="pe-0 text-end min-w-200px">21 Feb 2022, 2:40 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-warning">404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_633e7110d1ac8/not_found</td>
                  <td className="pe-0 text-end min-w-200px">10 Mar 2022, 10:10 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-success">200 OK</div>
                  </td>
                  <td>POST /v1/invoices/in_5171_1440/payment</td>
                  <td className="pe-0 text-end min-w-200px">22 Sep 2022, 9:23 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-warning">404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_633e7110d1aca/not_found</td>
                  <td className="pe-0 text-end min-w-200px">20 Jun 2022, 9:23 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-warning">404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_633e7110d1ac8/not_found</td>
                  <td className="pe-0 text-end min-w-200px">24 Jun 2022, 2:40 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-warning">404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_633e7110d1ac8/not_found</td>
                  <td className="pe-0 text-end min-w-200px">21 Feb 2022, 5:20 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-warning">404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_633e7110d1aca/not_found</td>
                  <td className="pe-0 text-end min-w-200px">22 Sep 2022, 6:05 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-success">200 OK</div>
                  </td>
                  <td>POST /v1/invoices/in_8655_1879/payment</td>
                  <td className="pe-0 text-end min-w-200px">24 Jun 2022, 9:23 pm</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-warning">404 WRN</div>
                  </td>
                  <td>POST /v1/customer/c_633e7110d1ac8/not_found</td>
                  <td className="pe-0 text-end min-w-200px">24 Jun 2022, 10:30 am</td>
                </tr>
                <tr>
                  <td className="min-w-70px">
                    <div className="badge badge-light-success">200 OK</div>
                  </td>
                  <td>POST /v1/invoices/in_6696_9116/payment</td>
                  <td className="pe-0 text-end min-w-200px">10 Mar 2022, 8:43 pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card pt-4 mb-6 mb-xl-9">
        <div className="card-header border-0">
          <div className="card-title">
            <h2>Events</h2>
          </div>
          <div className="card-toolbar">
            <button type="button" className="btn btn-sm btn-light-primary">
              <span className="svg-icon svg-icon-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M19 15C20.7 15 22 13.7 22 12C22 10.3 20.7 9 19 9C18.9 9 18.9 9 18.8 9C18.9 8.7 19 8.3 19 8C19 6.3 17.7 5 16 5C15.4 5 14.8 5.2 14.3 5.5C13.4 4 11.8 3 10 3C7.2 3 5 5.2 5 8C5 8.3 5 8.7 5.1 9H5C3.3 9 2 10.3 2 12C2 13.7 3.3 15 5 15H19Z" fill="currentColor" />
                  <path d="M13 17.4V12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12V17.4H13Z" fill="currentColor" />
                  <path opacity="0.3" d="M8 17.4H16L12.7 20.7C12.3 21.1 11.7 21.1 11.3 20.7L8 17.4Z" fill="currentColor" />
                </svg>
              </span>
              Download Report</button>
          </div>
        </div>
        <div className="card-body py-0">
          <table className="table align-middle table-row-dashed fs-6 text-gray-600 fw-semibold gy-5" id="kt_table_customers_events">
            <tbody>
              <tr>
                <td className="min-w-400px">Invoice
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary me-1">#LOP-45640</a>has been
                  <span className="badge badge-light-danger">Declined</span></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2022, 6:43 am</td>
              </tr>
              <tr>
                <td className="min-w-400px">
                  <a href="/" className="text-gray-600 text-hover-primary me-1">Sean Bean</a>has made payment to
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary">#XRS-45670</a></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">25 Oct 2022, 10:10 pm</td>
              </tr>
              <tr>
                <td className="min-w-400px">
                  <a href="/" className="text-gray-600 text-hover-primary me-1">Emma Smith</a>has made payment to
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary">#XRS-45670</a></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">21 Feb 2022, 2:40 pm</td>
              </tr>
              <tr>
                <td className="min-w-400px">
                  <a href="/" className="text-gray-600 text-hover-primary me-1">Sean Bean</a>has made payment to
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary">#XRS-45670</a></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Jun 2022, 8:43 pm</td>
              </tr>
              <tr>
                <td className="min-w-400px">Invoice
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary me-1">#LOP-45640</a>has been
                  <span className="badge badge-light-danger">Declined</span></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">10 Mar 2022, 10:30 am</td>
              </tr>
              <tr>
                <td className="min-w-400px">
                  <a href="/" className="text-gray-600 text-hover-primary me-1">Max Smith</a>has made payment to
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary">#SDK-45670</a></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Jun 2022, 9:23 pm</td>
              </tr>
              <tr>
                <td className="min-w-400px">
                  <a href="/" className="text-gray-600 text-hover-primary me-1">Max Smith</a>has made payment to
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary">#SDK-45670</a></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">21 Feb 2022, 2:40 pm</td>
              </tr>
              <tr>
                <td className="min-w-400px">
                  <a href="/" className="text-gray-600 text-hover-primary me-1">Brian Cox</a>has made payment to
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary">#OLP-45690</a></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">25 Jul 2022, 11:05 am</td>
              </tr>
              <tr>
                <td className="min-w-400px">Invoice
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary me-1">#LOP-45640</a>has been
                  <span className="badge badge-light-danger">Declined</span></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">15 Apr 2022, 11:05 am</td>
              </tr>
              <tr>
                <td className="min-w-400px">
                  <a href="/" className="text-gray-600 text-hover-primary me-1">Max Smith</a>has made payment to
                  <a href="/" className="fw-bold text-gray-900 text-hover-primary">#SDK-45670</a></td>
                <td className="pe-0 text-gray-600 text-end min-w-200px">20 Dec 2022, 8:43 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EventsPannel;
