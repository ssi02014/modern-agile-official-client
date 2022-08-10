import React from 'react';
import { ContentsContainer, FooterWrapper, InnerContainer } from './style';
import Github from 'assets/logo/github.svg';
import Medium from 'assets/logo/medium.svg';
import Youtube from 'assets/logo/youtube.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <InnerContainer>
        <ContentsContainer>
          <p>모던 애자일 (Modern Agile)</p>
          <b>Copyright © Modern Agile(Gromit). All Right Reserved</b>
        </ContentsContainer>
        <ContentsContainer>
          <ul>
            <li>
              <a
                href="https://medium.com/modern-agile-team"
                target={'_blank'}
                rel="noreferrer">
                <Medium />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/modern-agile-team"
                target={'_blank'}
                rel="noreferrer">
                <Github />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC99JTVHdVLVWpCjVrm1jzMw"
                target={'_blank'}
                rel="noreferrer">
                <Youtube />
              </a>
            </li>
          </ul>
        </ContentsContainer>
      </InnerContainer>
    </FooterWrapper>
  );
};

export default Footer;
