import type { ComponentPropsWithoutRef } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import { Provider } from "../components/ui/provider";
import { Box, Flex } from "@chakra-ui/react";
import Notice from "../components/Notice";
import Video from "../components/Video";
import Navigation, { paths } from "../components/Navigation";

interface ImageRowProps extends ComponentPropsWithoutRef<"div"> {
  matchHeight?: boolean;
}

const ImageRow = ({ matchHeight, ...props }: ImageRowProps) => (
  <Flex
    gap={4}
    justifyContent="center"
    flexWrap="wrap"
    {...props}
    className="image-row"
    data-match={matchHeight ? "height" : "width"}
  />
);

const components = {
  Notice,
  Video,
  ImageRow,
  // re-map markdown headers so that the page title is the proper h1, and subsequent headers are "downsized"
  h1: (props: ComponentPropsWithoutRef<"h1">) => <h2 {...props} />,
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h3 {...props} />,
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h4 {...props} />,
  h4: (props: ComponentPropsWithoutRef<"h4">) => <h5 {...props} />,
};

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  const router = useRouter();
  const currentPath = paths.find((path) => {
    return path.href === router.asPath;
  });

  return (
    <Provider>
      <MDXProvider components={components}>
        <Head>
          <title>
            {currentPath ? `${currentPath.name} • Ali Torbati` : "Ali Torbati"}
          </title>
        </Head>
        <Box maxWidth="70ch" margin="0 auto" padding={4} paddingBottom={6}>
          <Flex alignItems="stretch" flexDirection="column" gap={6}>
            <Flex flex={[null, "0 0 auto"]}>
              <Navigation />
            </Flex>
            <Box as="main">
              <Component {...pageProps} />
            </Box>
          </Flex>
        </Box>
      </MDXProvider>
    </Provider>
  );
};

export default App;
