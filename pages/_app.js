import * as React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import Head from "next/head";
import { IconoirProvider } from "iconoir-react";
import GlobalStyle from "../styles/GlobalStyle";
import Box from "../components/foundations/Box";
import Flexbox from "../components/foundations/Flexbox";
import Notice from "../components/Notice";
import Video from "../components/Video";
import light from "../themes/theme";
import dark from "../themes/dark";
import Navigation, { paths } from "../components/Navigation";
import { MDXProvider } from "@mdx-js/react";
// import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/base16/apprentice.css";
// import "highlight.js/styles/base16/atelier-estuary.css";
// import "highlight.js/styles/base16/chalk.css";
// import "highlight.js/styles/base16/danqing.css";
import "highlight.js/styles/base16/atelier-savanna.css";

const ThreeUp = styled("div")`
  display: flex;
  gap: 20px;
`;

const components = {
  Notice,
  Video,
  ThreeUp,
  // re-map markdown headers so that the page title is the proper h1, and subsequent headers are "downsized"
  h1: (props) => <h2 {...props} />,
  h2: (props) => <h3 {...props} />,
  h3: (props) => <h4 {...props} />,
  h4: (props) => <h5 {...props} />,
};

const prefersDarkQuery = "(prefers-color-scheme: dark)";

const subscribeToColorScheme = (callback) => {
  if (!window.matchMedia) {
    return () => {};
  }
  const mm = window.matchMedia(prefersDarkQuery);
  mm.addEventListener("change", callback);
  return () => mm.removeEventListener("change", callback);
};

const getThemeSnapshot = () => {
  if (!window.matchMedia) {
    return dark;
  }
  return window.matchMedia(prefersDarkQuery).matches ? dark : light;
};

// SSR renders with the dark theme; useSyncExternalStore swaps to the user's
// OS preference after hydration without a hydration mismatch.
const getServerThemeSnapshot = () => dark;

const App = (props) => {
  const { Component, pageProps } = props;

  const theme = React.useSyncExternalStore(
    subscribeToColorScheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const router = useRouter();
  const currentPath = paths.find((path) => {
    return path.href === router.asPath;
  });

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <IconoirProvider
          iconProps={{
            strokeWidth: 2,
            width: "1em",
            height: "1em",
            style: {
              transform: "translateY(2px)",
            },
          }}
        >
          <GlobalStyle />
          <Head>
            <title>
              {currentPath
                ? `${currentPath.name} • Ali Torbati`
                : "Ali Torbati"}
            </title>
          </Head>
          <Box maxWidth="70ch" margin="0 auto" padding={4} paddingBottom={6}>
            <Flexbox alignItems="stretch" flexDirection="column" gap={6}>
              <Flexbox flex={[null, "0 0 auto"]}>
                <Navigation />
              </Flexbox>
              <Box as="main">
                <Component {...pageProps} />
              </Box>
            </Flexbox>
          </Box>
        </IconoirProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
