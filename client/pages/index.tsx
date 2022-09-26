import type { NextPage } from 'next';
import Head from 'next/head';
import NewLinkForm from '../components/NewLinkForm';
import SingleUrl from '../components/SingleUrl';
import { IUrl } from '../interface/url.interface';

const Home = ({ urls }: { urls: IUrl[] }) => {
  console.log(urls);
  return (
    <div className="bg-gray-200 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center flex-col space-y-4 w-10/12 md:w-8/12 mx-auto">
        <div className=" bg-white p-6 rounded-lg mt-8">
          <h1 className="font-semibold text-lg">All URLs</h1>
        </div>
        <NewLinkForm />
        <div>
          {urls.map((url: IUrl) => (
            <SingleUrl key={url.id} {...url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const URL =
    process.env.NEXT_PUBLIC_API_URL?.toString() || 'http://localhost:3000';
  const res = await fetch(URL);
  const urls = await res.json();

  return {
    props: { urls },
  };
}
export default Home;
