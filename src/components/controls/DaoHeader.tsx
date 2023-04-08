// hooks/useDeposit.ts
import { useCallback, useState } from "react";
import { useDepositEth } from "@daobox/use-aragon";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import toast from "react-hot-toast";
import { daoAddress } from "../../constants";
import { shortenHash } from "@utils/strings";

// hooks/useWithdraw.ts
import { useNewProposal } from "@daobox/use-aragon";
import { votingAddress } from "../../constants";

// components/DaoHeader.tsx
import React from "react";
import { useFetchDao } from "@daobox/use-aragon";
import { Avatar } from "flowbite-react";
import { Skeleton } from "@components/common";
import { ipfsUriToUrl } from "@utils/strings";

interface DaoHeaderProps {}

export const DaoHeader: React.FC<DaoHeaderProps> = () => {
  const { data } = useFetchDao({ daoAddressOrEns: daoAddress });
  if (!data) return <Skeleton height="s" animated={true} />;

  const { metadata, ensDomain } = data;

  return (
    <section className="pb-6" aria-labelledby="profile-overview-title">
      <div className="overflow-hidden rounded-lg bg-white p-6 shadow">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Avatar size="lg" img={ipfsUriToUrl(metadata?.avatar)}>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">{metadata.name}</p>
            <p className="text-sm font-medium text-gray-600/75">{ensDomain}</p>
          </Avatar>
          <DaoHeaderButtons />
        </div>
      </div>
    </section>
  );
};

// components/DaoHeaderButtons.tsx

import { Button } from "@tremor/react";
import { DepositModal } from "@components/modals";
import { WithdrawModal } from "@components/modals/WithdrawModal";

interface DaoHeaderButtonsProps {}

const DaoHeaderButtons: React.FC<DaoHeaderButtonsProps> = () => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const { handleDeposit, depositStatus } = useDeposit();
  const { handleWithdraw, proposalStatus } = useWithdraw();

  return (
    <div className="mt-5 flex justify-center space-x-2 sm:mt-0">
      <Button
        variant="secondary"
        disabled={["waitingForSigner", "confirming"].includes(depositStatus)}
        loading={["waitingForSigner", "confirming"].includes(depositStatus)}
        onClick={() => setIsDepositModalOpen(true)}
      >
        {["waitingForSigner", "confirming"].includes(depositStatus) ? depositStatus : "Deposit ETH"}
      </Button>
      <Button
        onClick={() => setIsWithdrawModalOpen(true)}
        disabled={!["idle", "success", "error"].includes(proposalStatus)}
        loading={!["idle", "success", "error"].includes(proposalStatus)}
      >
        Withdraw ETH
      </Button>
      <DepositModal
        isOpen={isDepositModalOpen}
        setIsOpen={setIsDepositModalOpen}
        onDeposit={handleDeposit}
      />
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        setIsOpen={setIsWithdrawModalOpen}
        onWithdraw={handleWithdraw}
      />
    </div>
  );
};

export const useDeposit = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const addRecentTransaction = useAddRecentTransaction();

  const { mutate, depositStatus } = useDepositEth({
    daoAddressOrEns: daoAddress,
    amount: BigInt(depositAmount),
    onTransaction(txHash) {
      toast(`Transaction Sent: ${shortenHash(txHash, 6)}`);
      addRecentTransaction({
        hash: txHash,
        description: "Deposit ETH",
      });
    },
    onSuccess(data) {
      toast.success(`Deposited: ${Number(data.deposited)}`);
    },
    onError(error) {
      toast.error(`Transaction Error: ${error.message}`);
    },
  });

  const handleDeposit = useCallback(
    (amount: number) => {
      setDepositAmount(Number(amount));
      mutate();
    },
    [mutate]
  );

  return { handleDeposit, depositStatus };
};

const initialState = {
  title: "",
  summary: "",
  description: "",
  resources: [],
  actions: [],
  pluginAddress: votingAddress,
  startDate: new Date(new Date().getTime() + 1000 * 20),
  endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7),
};

export const useWithdraw = () => {
  const [withdrawParams, setWithdrawParams] = useState(initialState);
  const addRecentTransaction = useAddRecentTransaction();

  const { mutate, proposalStatus } = useNewProposal({
    ...withdrawParams,
    onProposalTransaction(proposalId: string) {
      toast(`Transaction Sent: ${shortenHash(proposalId, 6)}`);
      addRecentTransaction({
        hash: proposalId,
        description: "New Proposal",
      });
    },
    onSuccess(data) {
      toast.success(`Transaction Sent: ${shortenHash(data.proposalTxHash!, 6)}`);
    },
    onError(error) {
      toast.error(`Proposal Error: ${error.message}`);
    },
  });

  // hooks/useWithdraw.ts (continued)
  const handleWithdraw = useCallback(
    (state: any) => {
      setWithdrawParams(state);
      mutate();
    },
    [mutate]
  );

  return { handleWithdraw, proposalStatus };
};
