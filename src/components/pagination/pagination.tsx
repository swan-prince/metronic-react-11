import React, { FC } from 'react';
import clsx from 'clsx';

interface Props {
  page: number;
  count: number;
  onChange: (val: number) => void;
}

const Pagination: FC<Props> = (props) => {

  const { page, count, onChange } = props;  

  const handleChange = (e: React.MouseEvent<HTMLAnchorElement>, val: number) => {
    e.preventDefault();
    if ((val <= count) && (val > 0)) {
      onChange(val);
    }    
  }

  return (
    <ul className="pagination">
      <li className="paginate_button page-item previous" id="kt_customers_table_previous">
        <a href="/" aria-controls="kt_customers_table" data-dt-idx="0" tabIndex={0} className="page-link" onClick={(e) => handleChange(e, page - 1)}>
          <i className="previous"></i>
        </a>
      </li>
      {
        [...Array(count)].map((el, index) => (
          <li className={clsx("paginate_button page-item", {'active': page === (index + 1)})} key={index}>
            <a href="/" aria-controls="kt_customers_table" data-dt-idx="1" tabIndex={0} className="page-link" onClick={(e) => handleChange(e, index + 1)}>
              {index + 1}
            </a>
          </li>
        ))
      }     
      <li className="paginate_button page-item next" id="kt_customers_table_next">
        <a 
          href="/" 
          aria-controls="kt_customers_table" 
          data-dt-idx="5" 
          tabIndex={0} 
          className="page-link"
          onClick={(e) => handleChange(e, page + 1)}
        >
          <i className="next"></i>
        </a>
      </li>
    </ul>
  )
}

export default Pagination;
