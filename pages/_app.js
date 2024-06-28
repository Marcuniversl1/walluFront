import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { MediaContextProvider } from "utils/media";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ChakraProvider theme={theme}>
      <MediaContextProvider disableDynamicMediaQueries>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MediaContextProvider>
    </ChakraProvider>
  );
}
