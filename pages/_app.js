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
  const initialTheme = dark;
  // const initialTheme =
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ? dark
  //     : light;

  const [theme, setTheme] = React.useState(initialTheme);

  // React.useEffect(() => {
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", (event) => {
  //       event.matches ? setTheme(dark) : setTheme(light);
  //     });
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Ali Torbati (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</title>
      </Head>
      <Box maxWidth="800px" margin="0 auto" padding={[3, 4]}>
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
