import React, { FC } from 'react';

const FilesPannel: FC = () => {

  return (
    <div>
      <div className="d-flex flex-wrap flex-stack my-5">
        <h3 className="fw-bold my-2">Project Files
          <span className="fs-6 text-gray-400 fw-semibold ms-1">+590</span></h3>
        <div className="d-flex my-2">
          <div className="d-flex align-items-center position-relative me-4">
            <span className="svg-icon svg-icon-3 position-absolute translate-middle-y top-50 ms-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
              </svg>
            </span>
            <input type="text" id="kt_filter_search" className="form-control form-control-sm form-control-solid bg-body fw-semibold fs-7 w-150px ps-11" placeholder="Search" />
          </div>
          <a href="/" className='btn btn-primary btn-sm fw-bolder'>File Manager</a>
        </div>
      </div>
      <div className="row g-6 g-xl-9 mb-6 mb-xl-9">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
            <div className="card-body d-flex justify-content-center text-center flex-column p-8">
              <a href="../../demo11/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                <div className="symbol symbol-60px mb-5">
                  <img src="/media/svg/files/pdf.svg" className="theme-light-show" alt="" />
                  <img src="/media/svg/files/pdf-dark.svg" className="theme-dark-show" alt="" />
                </div>
                <div className="fs-5 fw-bold mb-2">Project Reqs..</div>
              </a>
              <div className="fs-7 fw-semibold text-gray-400">3 days ago</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
            <div className="card-body d-flex justify-content-center text-center flex-column p-8">
              <a href="../../demo11/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                <div className="symbol symbol-60px mb-5">
                  <img src="/media/svg/files/doc.svg" className="theme-light-show" alt="" />
                  <img src="/media/svg/files/doc-dark.svg" className="theme-dark-show" alt="" />
                </div>
                <div className="fs-5 fw-bold mb-2">CRM App Docs..</div>
              </a>
              <div className="fs-7 fw-semibold text-gray-400">3 days ago</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
            <div className="card-body d-flex justify-content-center text-center flex-column p-8">
              <a href="../../demo11/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                <div className="symbol symbol-60px mb-5">
                  <img src="/media/svg/files/css.svg" className="theme-light-show" alt="" />
                  <img src="/media/svg/files/css-dark.svg" className="theme-dark-show" alt="" />
                </div>
                <div className="fs-5 fw-bold mb-2">User CRUD Styles</div>
              </a>
              <div className="fs-7 fw-semibold text-gray-400">4 days ago</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
            <div className="card-body d-flex justify-content-center text-center flex-column p-8">
              <a href="../../demo11/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                <div className="symbol symbol-60px mb-5">
                  <img src="/media/svg/files/ai.svg" className="theme-light-show" alt="" />
                  <img src="/media/svg/files/ai-dark.svg" className="theme-dark-show" alt="" />
                </div>
                <div className="fs-5 fw-bold mb-2">Product Logo</div>
              </a>
              <div className="fs-7 fw-semibold text-gray-400">5 days ago</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
            <div className="card-body d-flex justify-content-center text-center flex-column p-8">
              <a href="../../demo11/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                <div className="symbol symbol-60px mb-5">
                  <img src="/media/svg/files/sql.svg" className="theme-light-show" alt="" />
                  <img src="/media/svg/files/sql-dark.svg" className="theme-dark-show" alt="" />
                </div>
                <div className="fs-5 fw-bold mb-2">Orders backup</div>
              </a>
              <div className="fs-7 fw-semibold text-gray-400">1 week ago</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
            <div className="card-body d-flex justify-content-center text-center flex-column p-8">
              <a href="../../demo11/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                <div className="symbol symbol-60px mb-5">
                  <img src="/media/svg/files/xml.svg" className="theme-light-show" alt="" />
                  <img src="/media/svg/files/xml-dark.svg" className="theme-dark-show" alt="" />
                </div>
                <div className="fs-5 fw-bold mb-2">UTAIR CRM API Co..</div>
              </a>
              <div className="fs-7 fw-semibold text-gray-400">2 weeks ago</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100">
            <div className="card-body d-flex justify-content-center text-center flex-column p-8">
              <a href="../../demo11/dist/apps/file-manager/files.html" className="text-gray-800 text-hover-primary d-flex flex-column">
                <div className="symbol symbol-60px mb-5">
                  <img src="/media/svg/files/tif.svg" className="theme-light-show" alt="" />
                  <img src="/media/svg/files/tif-dark.svg" className="theme-dark-show" alt="" />
                </div>
                <div className="fs-5 fw-bold mb-2">Tower Hill App..</div>
              </a>
              <div className="fs-7 fw-semibold text-gray-400">3 weeks ago</div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div className="card h-100 flex-center bg-light-primary border-primary border border-dashed p-8">
            <img src="/media/svg/files/upload.svg" className="mb-5" alt="" />
            <a href="/" className="text-hover-primary fs-5 fw-bold mb-2">File Upload</a>
            <div className="fs-7 fw-semibold text-gray-400">Drag and drop files here</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilesPannel;
