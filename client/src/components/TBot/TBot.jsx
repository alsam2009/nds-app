import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SERVER_URI from '../../api/api';

const TBot = ({ data }) => {

  return (
      <Link to={`https://t.me/share/url?url=${SERVER_URI.slice(0, -5)}/card/${data.id}&text=\n**NEWS DELIVERY SYSTEM**: ${encodeURIComponent(data.title)}`} target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane fill="currentColor" className="icon_tg cursor-pointer"/>
      </Link>
  );
};

export default TBot;
