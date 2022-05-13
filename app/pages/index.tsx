import Example from 'components/Example';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Modern Agile</title>
        <meta name="description" content="Modern Agile Official WebPage" />
      </Head>
      <Example />
    </div>
  );
};
export default Home;
