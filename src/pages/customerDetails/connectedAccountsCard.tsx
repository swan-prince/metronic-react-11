import React, { FC, useState } from 'react';

const ConnectedAccountsCard: FC = () => {

  const [google, setGoogle] = useState(true);
  const [github, setGithub] = useState(true);
  const [slack, setSlack] = useState(false);

  return (
    <div className="card mb-5 mb-xl-8">
      <div className="card-header border-0">
        <div className="card-title">
          <h3 className="fw-bold m-0">Connected Accounts</h3>
        </div>
      </div>
      <div className="card-body pt-2">
        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
          <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.3" d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z" fill="currentColor" />
              <path d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z" fill="currentColor" />
            </svg>
          </span>
          <div className="d-flex flex-stack flex-grow-1">
            <div className="fw-semibold">
              <div className="fs-6 text-gray-700">By connecting an account, you hereby agree to our
                <a href="/" className="me-1">privacy policy</a>and
                <a href="/">terms of use</a>.</div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="d-flex flex-stack">
            <div className="d-flex">
              <img src="/media/svg/brand-logos/google-icon.svg" className="w-30px me-6" alt="" />
              <div className="d-flex flex-column">
                <a href="/" className="fs-5 text-dark text-hover-primary fw-bold">Google</a>
                <div className="fs-6 fw-semibold text-muted">Plan properly your workflow</div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                <input className="form-check-input" name="google" type="checkbox" value="1" checked={google} onChange={(e) =>setGoogle(e.target.checked)} />
                <span className="form-check-label fw-semibold text-muted"></span>
              </label>
            </div>
          </div>
          <div className="separator separator-dashed my-5"></div>
          <div className="d-flex flex-stack">
            <div className="d-flex">
              <img src="/media/svg/brand-logos/github.svg" className="w-30px me-6" alt="" />
              <div className="d-flex flex-column">
                <a href="/" className="fs-5 text-dark text-hover-primary fw-bold">Github</a>
                <div className="fs-6 fw-semibold text-muted">Keep eye on on your Repositories</div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                <input className="form-check-input" name="github" type="checkbox" value="1" checked={github} onChange={(e) => setGithub(e.target.checked)}  />
                <span className="form-check-label fw-semibold text-muted"></span>
              </label>
            </div>
          </div>
          <div className="separator separator-dashed my-5"></div>
          <div className="d-flex flex-stack">
            <div className="d-flex">
              <img src="/media/svg/brand-logos/slack-icon.svg" className="w-30px me-6" alt="" />
              <div className="d-flex flex-column">
                <a href="/" className="fs-5 text-dark text-hover-primary fw-bold">Slack</a>
                <div className="fs-6 fw-semibold text-muted">Integrate Projects Discussions</div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                <input className="form-check-input" name="slack" type="checkbox" value="1" checked={slack} onChange={(e) => setSlack(e.target.checked)} />
                <span className="form-check-label fw-semibold text-muted"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer border-0 d-flex justify-content-center pt-0">
        <button className="btn btn-sm btn-light-primary">Save Changes</button>
      </div>
    </div>
  )
}

export default ConnectedAccountsCard;
