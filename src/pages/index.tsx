import HomePage from '@/components/HomePage';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>PedeWhats - Peça sua comida pelo Whatsapp</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
