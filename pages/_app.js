import * as React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import Text from "../components/Text";
import Box from "../components/Box";
import Flexbox from "../components/Flexbox";
import Link from "next/link";
import light from "../themes/light";
import dark from "../themes/dark";
import Navigation from "../components/Navigation";

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
      <GlobalStyle />
      <Head>
        <title>Ali Torbati (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</title>
      </Head>
      <Box maxWidth="80ch" margin="0 auto" padding={[3, 4]}>
        <Navigation />
        <Box marginBottom={3} />
        <Box as="main">
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MyApp;
