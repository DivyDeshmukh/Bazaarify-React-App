/* we have created this component because we want to perform some functionality when user clicks on the button and as Link component from react-router-dom do not have onClick prop so, we have designed this custom component*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'history';

const CustomLink = ({ to, onClick, children }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    history.push(to);
  };

  return (
    <Link className='text-lg mt-4 bg-orange-400 py-1 px-12 rounded-md text-white font-semibold hover:bg-white hover:text-orange-400 hover:border-orange-400 hover:border-2' to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default CustomLink;
