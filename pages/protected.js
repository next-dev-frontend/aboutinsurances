import { NextSeo } from 'next-seo';
import ProtectedPage from '../components/ProtectedPage';

const Protected = () => {
  return (
    <div>
      <NextSeo
        noindex={true}
        title="Protected Page Title"
        description="This is a protected page with sensitive information."
      />
      <ProtectedPage />
    </div>
  );
};

export default Protected;