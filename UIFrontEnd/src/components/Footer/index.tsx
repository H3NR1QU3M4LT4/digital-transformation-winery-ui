import React from 'react';
import { formatDate } from '../../utils/FormatDate';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 text-center lg:text-left">
        <div className="text-gray-700 text-center p-1">
          All rigths reserved {formatDate(new Date())}
          <div className="hidden md:block md:px-20">
            Designed by
            <span className="font-bold"> Philadelphia L.A.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
