import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Hamburger from 'assets/hamburger.svg';
import { HeaderWrapper, MainLogoContainer, InnerContainer } from './style';
import NavMenu from '../NavMenu';
import CloseLogo from 'assets/logo/close.svg';
import WhiteLogo from 'assets/logo/white-logo.png';

const wrappingNavData = [
  {
    id: 1,
    element: (
      <a
        href="https://www.notion.so/b4290c8ff0b34e4aac8c8f90847fea7e?pvs=4"
        target={'_blank'}
        rel="noreferrer">
        6기 팀원 소개
      </a>
    ),
  },
  {
    id: 2,
    element: (
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeHWMVWswRhCSzrBWtivbhP5aRJUnzWOn57aOKz1n9thBTy1Q/viewform"
        target={'_blank'}
        rel="noreferrer">
        7기 지원하기
      </a>
    ),
  },
  {
    id: 3,
    element: (
      <a
        href="https://open.kakao.com/o/sXDtsBOf"
        target={'_blank'}
        rel="noreferrer">
        문의하기
      </a>
    ),
  },
];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenMenu]);

  return (
    <>
      <HeaderWrapper>
        <InnerContainer>
          <MainLogoContainer>
            <Link href={'/'}>
              <img src={WhiteLogo} alt="헤더로고" />
            </Link>
          </MainLogoContainer>

          {!isOpenMenu ? (
            <Hamburger className="hamburger" onClick={handleOpenMenu} />
          ) : (
            <CloseLogo className="close" onClick={handleClose} />
          )}

          <ul>
            {wrappingNavData.map((item) => (
              <li key={item.id}>{item.element}</li>
            ))}
          </ul>
        </InnerContainer>
      </HeaderWrapper>

      {isOpenMenu && <NavMenu list={wrappingNavData} onClose={handleClose} />}
    </>
  );
};

export default Header;
