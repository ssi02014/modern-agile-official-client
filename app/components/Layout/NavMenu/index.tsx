import React from 'react';
import styled from 'styled-components';

const NavMenu = () => {
  return (
    <NavMenuWrapper>
      <ul>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
    </NavMenuWrapper>
  );
};

const NavMenuWrapper = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  animation: fadeInOut 0.3s;
  z-index: 100;
`;

export default NavMenu;
