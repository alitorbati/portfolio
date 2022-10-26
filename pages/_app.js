import * as React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import Box from "../components/Box";
import light from "../themes/light";
import dark from "../themes/dark";
import Navigation from "../components/Navigation";
import { MDXProvider } from "@mdx-js/react";

const Callout = (props) => {
  return (
    <Box
      paddingX={5}
      paddingY={2}
      marginX={[0, 0, 0, -6]}
      marginY={5}
      border={1}
      borderRadius={1}
    >
      {props.children}
    </Box>
  );
};

const components = { Callout };

const MyApp = ({ Component, pageProps }) => {
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
        <Box maxWidth="70ch" margin="0 auto" padding={4}>
          <Navigation />
          <Box marginBottom={4} />
          <Box as="main">
            <Component {...pageProps} />
          </Box>
        </Box>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default MyApp;
