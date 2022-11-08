import React, { FC } from 'react';
import clsx from 'clsx';

import PaymentRecordsCard from './paymentRecordsCard';
import InvoicesCard from './invoicesCard';
import PaymentMethodsCard from './paymentMethodsCard';

interface Props {
  active: boolean;
}

const OverviewPannel: FC<Props> = (props) => {

  const { active } = props;

  return (
    <div className={clsx('tab-pane fade', {'show active': active})} id="kt_customer_view_overview_tab" role="tabpanel">
      <PaymentRecordsCard />
      <PaymentMethodsCard />
      <div className="card pt-4 mb-6 mb-xl-9">
        <div className="card-header border-0">
          <div className="card-title">
            <h2 className="fw-bold">Credit Balance</h2>
          </div>
          <div className="card-toolbar">
            <a href="/" className="btn btn-sm btn-flex btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_adjust_balance">
              <span className="svg-icon svg-icon-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                  <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                </svg>
              </span>
              Adjust Balance</a>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="fw-bold fs-2">$32,487.57
            <span className="text-muted fs-4 fw-semibold">USD</span>
            <div className="fs-7 fw-normal text-muted">Balance will increase the amount due on the customer's next invoice.</div></div>
        </div>
      </div>
      <InvoicesCard />
    </div>
  )
}

export default OverviewPannel;
