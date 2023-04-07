export const etherscanUrl = (address: string, network?: string) => {
  return `https://${network === "mainnet" ? "" : `${network}`}.etherscan.io/address/${address}`;
};

export const openEtherscanPage = (address: string, network?: string) => {
  window.open(etherscanUrl(address, network), "_blank");
};
