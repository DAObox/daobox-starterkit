import React from "react";
import clsx from "clsx";
import { useNetwork } from "wagmi";
import { Text } from "@tremor/react";
import Blockies from "react-blockies";
import { shortenHash } from "@utils/strings";
import { openEtherscanPage } from "@utils/openEtherscan";

interface AccountPillProps {
  address: string;
  size?: number;
  className?: string;
}

export const AccountPill: React.FC<AccountPillProps> = ({ address, size = 6, className }) => {
  const { chain } = useNetwork();

  const blockiesClassName = clsx("overflow-hidden rounded-2xl", className);

  return (
    <div
      className="border-1 flex w-fit cursor-pointer items-center space-x-1 rounded-3xl border border-gray-100 bg-white p-1 pr-2 shadow-lg hover:bg-slate-50 hover:shadow-2xl"
      onClick={() => openEtherscanPage(address, chain?.network)}
    >
      <Blockies seed={address} size={size} className={blockiesClassName} />
      <Text>{shortenHash(address)}</Text>
    </div>
  );
};
