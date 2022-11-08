import React, { FC, useState } from 'react';

import BreadToolbar from 'components/breadToolbar';
import HeaderDetail from './headerDetail';
import OverviewPannel from './overviewPannel';
import TargetPannel from './targetPannel';
import FilesPannel from './filesPannel';
import BudgetPannel from './budgetPannel';
import UsersPannel from './usersPannel';
import ActivityPannel from './activityPanel';
import SettingsPannel from './settingsPannel';
import CreateAppDialog from 'components/createAppDialog';

const ProjectDetail: FC = () => {

  const [tab, setTab] = useState('Overview');
  const [openCreateApp, setOpenCreateApp] = useState(false);

  return (
    <div>
      <BreadToolbar
        breadcrumb={['Projects', 'View Project']}
        pageTitle='View Project'
        handleCreate={() => setOpenCreateApp(true)}
      />
      <div className="d-flex flex-column-fluid align-items-start container-xxl" id='kt_content_container'>
        <div className='content flex-row-fluid' id='kt_content'>
          <HeaderDetail 
            tab={tab}
            handleChangeTab={(val) => setTab(val)}
          />
          {
            tab === 'Overview' && <OverviewPannel />
          }
          {
            tab === 'Targets' && <TargetPannel />
          }
          {
            tab === 'Budget' && <BudgetPannel />
          }
          {
            tab === 'Users' && <UsersPannel />
          }
          {
            tab === 'Files' && <FilesPannel />
          }
          {
            tab === 'Activity' && <ActivityPannel />
          }
          {
            tab === 'Settings' && <SettingsPannel />
          }
        </div>
      </div>

      <CreateAppDialog show={openCreateApp} onHide={() => setOpenCreateApp(false)} />
    </div>
  )
}

export default ProjectDetail;
