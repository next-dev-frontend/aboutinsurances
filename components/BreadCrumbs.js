import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter((segment) => segment !== '');

  return (
    <section className="container mx-auto w-full max-w-5xl px-4 py-4 flex wrap md:no-wrap">

      <Link href="/" aria-label='Home'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-full text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Link>

      <div className="flex items-center space-x-2">
        <Link href="https://aboutinsurances.vercel.app" className="text-gray-500 hover:text-gray-700">
          &nbsp;Home
        </Link>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={index}>
            <span className="text-gray-500"> &nbsp;/ &nbsp;</span>

            {segment}

          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Breadcrumbs;