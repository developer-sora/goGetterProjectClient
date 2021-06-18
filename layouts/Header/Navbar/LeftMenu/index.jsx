import React from 'react';
import { Left } from '@layouts/Header/Navbar/LeftMenu/styles';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <Left>
      <ul>
        <li>
          <Link to="/">독서 공유</Link>
        </li>
        <li>
          <Link to="/">토론 게시판</Link>
        </li>
        <li>
          <Link to="/">도서관 찾기</Link>
        </li>
        <li>
          <Link to="/">이벤트</Link>
        </li>
      </ul>
    </Left>
  );
};

export default LeftMenu;
