import React from 'react';
import { NavMenuWrapper } from './style';

interface Props {
  list: {
    id: number;
    element: React.ReactNode;
  }[];
  onClose: () => void;
}
const NavMenu = ({ list, onClose }: Props) => {
  return (
    <NavMenuWrapper>
      <ul onClick={onClose}>
        {list.map((item) => (
          <li key={item.id}>{item.element}</li>
        ))}
      </ul>
    </NavMenuWrapper>
  );
};

export default NavMenu;
