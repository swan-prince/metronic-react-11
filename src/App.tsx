import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from 'pages/dashboard';
import Layout from 'components/layout';
import Customers from 'pages/customers';
import CustomerDetails from 'pages/customerDetails';
import Projects from 'pages/projects';
import ProjectDetail from 'pages/projectDetail';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/customers' element={<Customers />} />
          <Route path='/customer-detail' element={<CustomerDetails />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project-detail' element={<ProjectDetail />} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
