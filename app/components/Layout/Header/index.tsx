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
        href="https://ujins.notion.site/f0a1f292418946d6a6f4e133e5ffd448?v=1f089082470b4743a739b81cd73a93b7"
        target={'_blank'}
        rel="noreferrer">
        팀원 소개
      </a>
    ),
  },
  {
    id: 2,
    element: (
      <a
        href="https://ujins.notion.site/SW-5-97bf020acab54c56a405131f2fb2412f"
        target={'_blank'}
        rel="noreferrer">
        동아리 모집
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
