import React, { FC, ReactNode, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './navbar';
import Footer from './footer';
import ActivitiesDrawer from 'components/activitiesDrawer';
import ChatDrawer from 'components/chatDrawer';

import { MasterInit } from 'assets/layout/MasterInit';

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = (props) => {

  const { children } = props;

  const location = useLocation();

  return (
    <Fragment>
      {
        location.pathname === '/landing' ? (
          <Fragment>
            {children}
            <MasterInit />
          </Fragment>
        ) : (
          <div className='d-flex flex-column flex-root'>
            <div className="page d-flex flex-row flex-column-fluid">
              <div className="wrapper d-flex flex-column flex-row-fluid" id='kt_wrapper'>
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
            <MasterInit />
            <ActivitiesDrawer />
            <ChatDrawer />
          </div>
        )
      }
    </Fragment>
  )
}

export default Layout;
