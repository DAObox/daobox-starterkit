import React from "react";
import { motion } from "framer-motion";

import Blockies from "react-blockies";

import {
  ConnectButton as RainbowConnectButton,
  AvatarComponent,
} from "@rainbow-me/rainbowkit";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { shortenHash } from "../utils/strings";

export const AccountAvatar: AvatarComponent = ({ address, size }) => {
  return (
    <Blockies
      seed={address}
      size={size}
      className="overflow-hidden rounded-full"
    />
  );
};

export const ConnectButton = () => {
  return (
    <RainbowConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <ButtonBase
                    className="gap-1 p-1 text-bluesky-400 bg-white border-2 border-bluesky-400 rounded-full hover:shadow transition-shadow"
                    onClick={openConnectModal}
                  >
                    <span className="hidden font-regular tracking-wide md:inline md:w-32">
                      Connect
                    </span>
                    <UserCircleIcon className="w-12 h-12 -m-1" />
                  </ButtonBase>
                );
              }

              if (chain.unsupported) {
                return (
                  <ButtonBase
                    className="gap-1 p-1 text-bluesky-400 bg-white border-2 border-bluesky-400 rounded-full hover:shadow transition-shadow"
                    onClick={openChainModal}
                  >
                    <span className="hidden font-regular tracking-wide md:inline md:w-32">
                      Wrong network
                    </span>
                    <ExclamationTriangleIcon className="w-10 h-10" />
                  </ButtonBase>
                );
              }

              return (
                <>
                  <div className="flex items-center justify-center w-full">
                    <AccountButton
                      className="font-semibold text-slate-600 tracking-wide shadow rounded-full md:pl-5 md:pr-2 md:py-2 p-2 bg-white hover:bg-gray-100"
                      avatar={
                        <AccountAvatar
                          address={account.address}
                          ensImage={account.ensAvatar ?? ""}
                          size={10}
                        />
                      }
                      account={account}
                      onClick={openAccountModal}
                    />
                  </div>
                </>
              );
            })()}
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};

export const AccountButton = ({ avatar, account, ...props }: any) => {
  const className = props.className;
  return (
    <motion.button
      className={`flex items-center justify-center w-full transition rounded-lg ${className}`}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <div className="flex items-center gap-2 rounded-full">
        <span className="hidden md:inline">
          {account.ensName
            ? account.ensName
            : shortenHash((account.address as string) ?? "")}
        </span>
        {avatar}
      </div>
    </motion.button>
  );
};

export const ButtonBase = ({ children, className, ...props }: any) => {
  return (
    <motion.button
      className={`flex items-center justify-center w-full transition rounded-lg ${className}`}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
