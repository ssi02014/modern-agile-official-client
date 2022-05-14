import MainValues from 'components/Home/MainValues';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MainBanner = dynamic(() => import('components/Home/MainBanner'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modern Agile</title>
        <meta name="description" content="Modern Agile Official WebPage" />
      </Head>
      <MainBanner />
      <MainValues />
    </>
  );
};
export default Home;
