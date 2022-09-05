import type { NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/index/Feed';
import Navbar from '../components/Navbar';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Poster *.*</title>
    </Head>
    <Navbar />
    <Feed />
  </>
);
export default Home;
