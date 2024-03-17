import "@/styles/globals.css";

import Layout from "@/layouts/index";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
