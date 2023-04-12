import Head from 'next/head';
import Link from 'next/link';

export default function Contact({ test }: { test: string }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Remote Contact Page</h1>
        {`getServerSideProps - ${test}`}
        <br />
        <Link href={'/'}>home</Link>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      test: 'BBBB'
    }
  };
}
