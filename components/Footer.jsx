// pages/_app.tsx
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Footer from "../components/Footer";
import { AppProps } from 'next/app';

const components = {
  footer: Footer,
};

storyblokInit({
  accessToken: "JOUW_PUBLICK_ACCESS_TOKEN", // Vervang dit met je eigen access token
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
