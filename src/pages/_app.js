import "@/styles/globals.css";

import Head from "next/head";
import Layout from "@/layouts/index.jsx";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? false;
  if (!getLayout) {
    return (
      <Layout>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title> Myestery - Chiwetelu Johnpaul Portfolio </title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    );
  }
  // ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
