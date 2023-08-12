import Head from 'next/head';
import ProtectedPage from '../components/ProtectedPage';

const Protected = () => {
  return (
    <div>
      <Head>
        <title>Protected Page</title>
        <meta name="description" content="Page Generator Web Nextjs Tailwind" />
      </Head>
      <ProtectedPage />
    </div>
  );
};

export default Protected;