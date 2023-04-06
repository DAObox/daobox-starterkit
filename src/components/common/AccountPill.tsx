import React from "react";
import { Text } from "@tremor/react";
import Blockies from "react-blockies";
import { shortenHash } from "../../utils/strings";
import clsx from "clsx";
import { useNetwork } from "wagmi";

interface AccountPillProps {
  address: string;
  size?: number;
  className?: string;
}

const openEtherscanPage = (address: string, network?: string) => {
  network = network === "mainnet" ? "" : `${network}`;
  const etherscanURL = `https://${network}.etherscan.io/address/${address}`;
  window.open(etherscanURL, "_blank");
};

export const AccountPill: React.FC<AccountPillProps> = ({
  address,
  size = 6,
  className,
}) => {
  const { chain } = useNetwork();

  const blockiesClassName = clsx("overflow-hidden rounded-2xl", className);

  return (
    <div
      className="rounded-3xl flex border-1 border w-fit space-x-1 pr-2 items-center border-gray-100 shadow-lg p-1 bg-white hover:bg-slate-50 hover:shadow-2xl cursor-pointer"
      onClick={() => openEtherscanPage(address, chain?.network)}
    >
      <Blockies seed={address} size={size} className={blockiesClassName} />
      <Text>{shortenHash(address)}</Text>
    </div>
  );
};
