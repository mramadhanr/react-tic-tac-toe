import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import withRedux from '../src/components/hoc/withRedux';

// Disabled because we could not control what passed to the component
// it was controlled by the framework it self
// eslint-disable-next-line react/prop-types
const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="static/css/global.css" />
        <title>Tic tac toe</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

CustomApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default withRedux(CustomApp);
