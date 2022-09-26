import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Link = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>All Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <div className="w-10/12 md:w-8/12 bg-white p-6 rounded-lg mt-10">
          <h1 className="font-semibold text-lg">All Links</h1>
        </div>
      </div>
    </div>
  );
};

export default Link;
