import React from 'react';
import type { NextPage } from 'next';
import MainLogo from 'assets/logo/main-logo.png';
import Head from 'next/head';
import MainBanner from 'components/Home/MainBanner';
import MainValues from 'components/Home/MainValues';
import MainEmployment from 'components/Home/MainEmployment';
import MainActivity from 'components/Home/MainActivity';
import MainApplication from 'components/Home/MainApplication';
import MainFAQ from 'components/Home/MainFAQ';
import Divider from 'components/Divider';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>모던 애자일</title>
        <meta name="description" content="모던애자일 공식 사이트" />
        <meta name="keywords" content="모던애자일 공식 사이트" />
        <meta
          property="og:url"
          content="https://modern-agile-official-client.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="모던 애자일 공식 사이트" />
        <meta property="og:description" content="모던 애자일 공식 사이트" />
        <meta property="og:image" content={MainLogo} />
        <meta
          property="twitter:url"
          content="https://modern-agile-official-client.vercel.app/"
        />
        <meta property="twitter:type" content="website" />
        <meta property="twitter:title" content="모던 애자일 공식 사이트" />
        <meta
          property="twitter:description"
          content="모던 애자일 공식 사이트"
        />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:image" content={MainLogo} />
      </Head>
      <MainBanner />
      <MainValues />
      <Divider />
      <MainEmployment />
      <Divider />
      <MainActivity />
      <Divider />
      <MainApplication />
      <Divider />
      <MainFAQ />
    </>
  );
};
export default Home;
