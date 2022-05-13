import MainBanner from 'components/MainBanner';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modern Agile</title>
        <meta name="description" content="Modern Agile Official WebPage" />
      </Head>
      <MainBanner />
    </>
  );
};
export default Home;
