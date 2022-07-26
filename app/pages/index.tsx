import React from 'react';
import type { NextPage } from 'next';
import Loading from 'components/Loading';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MainBanner = dynamic(() => import('components/Home/MainBanner'), {
  ssr: false,
  loading: () => <Loading />,
});

const MainValues = dynamic(() => import('components/Home/MainValues'), {
  ssr: false,
});

const MainEmployment = dynamic(() => import('components/Home/MainEmployment'), {
  ssr: false,
});

const MainActivity = dynamic(() => import('components/Home/MainActivity'), {
  ssr: false,
});

const MainApplication = dynamic(
  () => import('components/Home/MainApplication'),
  {
    ssr: false,
  }
);

const MainFAQ = dynamic(() => import('components/Home/MainFAQ'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modern Agile</title>
        {/* og */}
        <meta name="description" content="모던애자일 공식 사이트" />
        <meta name="keywords" content="모던애자일 공식 사이트" />
        <meta
          property="og:url"
          content="https://modern-agile-official-client.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="모던 애자일 공식 사이트" />
        <meta property="og:description" content="모던 애자일 공식 사이트" />
        {/* <meta
          property="og:image"
          content="https://dbgl6r3fnusyg.cloudfront.net/seo/bunjang-og-image.png"
        /> */}
        {/* 중복 테스트 */}
        <meta name="description" content="메타 태그 중복 테스트" />
        <meta name="keywords" content="메타 태그 중복 테스트" />
        <meta
          property="og:url"
          content="https://modern-agile-official-client.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="메타 태그 중복 테스트" />
        <meta property="og:description" content="메타 태그 중복 테스트" />
      </Head>
      <MainBanner />
      <MainValues />
      <MainEmployment />
      <MainActivity />
      <MainApplication />
      <MainFAQ />
    </>
  );
};
export default Home;
