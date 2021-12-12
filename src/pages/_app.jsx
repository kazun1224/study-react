import "src/styles/globals.css";
// import 'tailwindcss/tailwind.css'
import Head from "next/head";
import { Layout } from "src/components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
