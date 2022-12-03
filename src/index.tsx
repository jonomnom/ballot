import { Config, DAppProvider, Mumbai } from "@usedapp/core";
import { ethers } from "ethers";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/tailwind.css";

const config: Config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]: new ethers.providers.JsonRpcProvider(Mumbai.rpcUrl),
  },
  refresh: "everyBlock",
  gasLimitBufferPercentage: 10,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
