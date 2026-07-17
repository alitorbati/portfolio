import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { Provider } from "../components/ui/provider";
import { Box, Flex } from "@chakra-ui/react";
import Navigation, { paths } from "../components/Navigation";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  const router = useRouter();
  const currentPath = paths.find((path) => {
    return path.href === router.asPath;
  });

  return (
    <Provider>
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
    </Provider>
  );
};

export default App;
