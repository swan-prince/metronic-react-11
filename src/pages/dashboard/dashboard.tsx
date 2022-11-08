import React, { FC, useState } from 'react';
import clsx from 'clsx';

import Toolbar from './toolbar';
import TrendsCard from './trendsCard';
import ActivitiesCard from './activitiesCard';
import RecentStatisticsCard from './recentStatisticsCard';
import TabItem from './tabItem';
import { Widget1, Widget2, Widget3, Widget4, Widget5 } from 'components/widget';

const Dashboard: FC = () => {

  const [tab, setTab] = useState('kt_general_widget_1_1')

  return (
    <div>
      <Toolbar />
      <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
        <div className="content flex-row-fluid" id="kt_content">
          <div className="row gy-0 gx-10">
            <div className="col-xl-8">
              <div className="mb-10">
                <ul className="nav row mb-10">
                  <TabItem
                    onClick={() => setTab('kt_general_widget_1_1')}
                    active={tab === 'kt_general_widget_1_1'}
                  >
                    <span className="svg-icon svg-icon-3x mb-5 mx-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="fs-6 fw-bold">SaaS
                      <br />Application</span>
                  </TabItem>
                  <TabItem
                    onClick={() => setTab('kt_general_widget_1_2')}
                    active={tab === 'kt_general_widget_1_2'}
                  >
                    <span className="svg-icon svg-icon-3x mb-5 mx-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 2H10C10.6 2 11 2.4 11 3V10C11 10.6 10.6 11 10 11H3C2.4 11 2 10.6 2 10V3C2 2.4 2.4 2 3 2Z" fill="currentColor" />
                        <path opacity="0.3" d="M14 2H21C21.6 2 22 2.4 22 3V10C22 10.6 21.6 11 21 11H14C13.4 11 13 10.6 13 10V3C13 2.4 13.4 2 14 2Z" fill="currentColor" />
                        <path opacity="0.3" d="M3 13H10C10.6 13 11 13.4 11 14V21C11 21.6 10.6 22 10 22H3C2.4 22 2 21.6 2 21V14C2 13.4 2.4 13 3 13Z" fill="currentColor" />
                        <path opacity="0.3" d="M14 13H21C21.6 13 22 13.4 22 14V21C22 21.6 21.6 22 21 22H14C13.4 22 13 21.6 13 21V14C13 13.4 13.4 13 14 13Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="fs-6 fw-bold">Main
                      <br />Categories</span>
                  </TabItem>
                  <TabItem
                    onClick={() => setTab('kt_general_widget_1_3')}
                    active={tab === 'kt_general_widget_1_3'}
                  >
                    <span className="svg-icon svg-icon-3x mb-5 mx-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                        <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="fs-6 fw-bold">Order
                      <br />Management</span>
                  </TabItem>
                  <TabItem
                    onClick={() => setTab('kt_general_widget_1_4')}
                    active={tab === 'kt_general_widget_1_4'}
                  >
                    <span className="svg-icon svg-icon-3x mb-5 mx-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="currentColor" />
                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="currentColor" />
                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="currentColor" />
                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="fs-6 fw-bold">Sales
                      <br />Statistics</span>
                  </TabItem>
                  <TabItem
                    onClick={() => setTab('kt_general_widget_1_5')}
                    active={tab === 'kt_general_widget_1_5'}
                  >
                    <span className="svg-icon svg-icon-3x mb-5 mx-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor" />
                        <path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="fs-6 fw-bold">Access
                      <br />Control</span>
                  </TabItem>
                </ul>
                <div className="tab-content">
                  <div className={clsx("tab-pane fade", {"show active": tab === 'kt_general_widget_1_1'})} id="kt_general_widget_1_1">
                    <Widget1 />
                  </div>
                  <div className={clsx("tab-pane fade", {"show active": tab === 'kt_general_widget_1_2'})} id="kt_general_widget_1_2">
                    <Widget2 />
                  </div>
                  <div className={clsx("tab-pane fade", {"show active": tab === 'kt_general_widget_1_3'})} id="kt_general_widget_1_3">
                    <Widget3 />
                  </div>
                  <div className={clsx("tab-pane fade", {"show active": tab === 'kt_general_widget_1_4'})} id="kt_general_widget_1_4">
                    <Widget4 />
                  </div>
                  <div className={clsx("tab-pane fade", {"show active": tab === 'kt_general_widget_1_5'})} id="kt_general_widget_1_5">
                    <Widget5 />
                  </div>
                </div>
              </div>
              <RecentStatisticsCard />
            </div>
            <div className="col-xl-4">
              <ActivitiesCard />
              <TrendsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
