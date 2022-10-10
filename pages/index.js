import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='grid place-content-center min-h-screen'>
        <div className='max-w-xs rounded overflow-hidden shadow-lg my-2'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Next + Tailwind ❤️</div>
            <p className='text-grey-darker text-base'>
              Next and Tailwind CSS are a match made in heaven. Check out this
              article on how you can combine these two for your next app.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}