import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // Apply layout to all pages
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
