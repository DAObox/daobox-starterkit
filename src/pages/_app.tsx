import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import "../styles/globals.css";
import { AragonProvider, Config } from "@daobox/use-aragon";
import { chains, client } from "../wagmi";
import AppShell from "../components/layout/AppShell";
import { Toaster } from "react-hot-toast";

const IPFS_NODES = [
  {
    url: "https://daobox.infura-ipfs.io/api/v0",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 2FFN8lLF2VhzMmoyfzv60QcbawU",
    },
  },
];

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} showRecentTransactions={true}>
        <AragonProvider config={IPFS_NODES}>
          {mounted && (
            <AppShell>
              <Component {...pageProps} />
            </AppShell>
          )}
          <Toaster />
        </AragonProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
