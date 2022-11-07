import * as React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import Box from "../components/Box";
import Callout from "../components/Callout";
import Video from "../components/Video";
import light from "../themes/light";
import dark from "../themes/dark";
import Navigation from "../components/Navigation";
import { MDXProvider } from "@mdx-js/react";

const components = {
  Callout,
  Video,
  // re-map markdown headers so that the page title is the proper h1, and subsequent headers are "downsized"
  h1: (props) => <h2 {...props} />,
  h2: (props) => <h3 {...props} />,
  h3: (props) => <h4 {...props} />,
  h4: (props) => <h5 {...props} />,
};

const MyApp = ({ Component, pageProps }) => {
  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined" &&
    window &&
    window.navigator &&
    navigator.serviceWorker
  ) {
    console.log("unregister service workers");
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }

  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      console.log("register no-op service worker");
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  const [theme, setTheme] = React.useState(dark);

  // initialize theme
  React.useEffect(() => {
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme(dark)
      : setTheme(light);
  }, []);

  // change theme when device theme changes
  React.useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        event.matches ? setTheme(dark) : setTheme(light);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <GlobalStyle />
        <Head>
          <title>Ali Torbati (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</title>
        </Head>
        <Box maxWidth="70ch" margin="0 auto" padding={4} paddingBottom={6}>
          <Navigation />
          <Box marginBottom={6} />
          <Box as="main">
            <Component {...pageProps} />
          </Box>
        </Box>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default MyApp;
