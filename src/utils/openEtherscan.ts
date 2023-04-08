export const openEtherscanPage = (address: string, network?: string) => {
  network = network === "mainnet" ? "" : `${network}`;
  const etherscanURL = `https://${network}.etherscan.io/address/${address}`;
  window.open(etherscanURL, "_blank");
};
