import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import Head from "next/head";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    
    <Provider slug={router.route}>
      <Head>
        <title>
          DaniBednarski.com
        </title>

        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="The personal website of Dani Bednarski. A web developer based in Melbourne, Australia."
        />
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
