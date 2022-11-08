import React, { RefObject } from 'react';

function useOutsideClick<T extends HTMLElement = HTMLElement> (
  ref: RefObject<T>,
  callback: () => void,
): void {

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current) {
        if (!ref?.current.contains(event.target as Node)) {
          callback();
        }
      }      
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);
};

export default useOutsideClick;
