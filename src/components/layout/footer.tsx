import React, { FC } from 'react';

const Footer: FC = () => {

  return (
    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
      <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">2022&copy;</span>
          <a href="https://keenthemes.com" rel="noreferrer" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
        </div>
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            <a href="https://keenthemes.com" rel="noreferrer" target="_blank" className="menu-link px-2">About</a>
          </li>
          <li className="menu-item">
            <a href="https://devs.keenthemes.com" rel="noreferrer" target="_blank" className="menu-link px-2">Support</a>
          </li>
          <li className="menu-item">
            <a href="https://1.envato.market/EA4JP" rel="noreferrer" target="_blank" className="menu-link px-2">Purchase</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
