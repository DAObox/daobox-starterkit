import React, { useState } from "react";
import { BaseModal } from "./BaseModal";
import { Icon } from "@iconify/react";
import { Button, TextInput } from "@tremor/react";
import { votingAddress } from "../../constants";

interface WithdrawModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onWithdraw: (state: any) => void;
}

const initialState = {
  title: "",
  summary: "",
  description: "",
  resources: [],
  actions: [],
  pluginAddress: votingAddress,
  startDate: new Date(0),
  endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7),
} as const;

export const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, setIsOpen, onWithdraw }) => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  // const { address } = useAccount();

  const handleWithdraw = () => {
    const params = {
      ...initialState,
      title,
      summary,
      actions: [
        {
          to: "0x47d80912400ef8f8224531EBEB1ce8f2ACf4b75a",
          value: BigInt(amount),
          data: new Uint8Array(),
        },
      ],
    };
    console.log(params);
    onWithdraw(params);
    setIsOpen(false);
  };

  return (
    <BaseModal
      title="Withdraw Ethereum"
      description="Create a proposal to withdraw Eth from the DAO:"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className="my-4  flex-col space-y-2 ">
        <TextInput
          id="title"
          placeholder="Proposal Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mr-2 flex-grow"
        />
        <TextInput
          id="summary"
          placeholder="Proposal Summary"
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="mr-2 flex-grow"
        />
        <div className="my-4 flex w-96 items-center justify-center pt-4">
          <TextInput
            id="depositAmount"
            placeholder="0.00"
            required
            icon={() => (
              <div className="flex justify-center  pl-3 ">
                <Icon icon="logos:ethereum" style={{ fontSize: "24px" }} />
              </div>
            )}
            // value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="ml- mr-2 flex-grow"
          />
          <Button
            onClick={handleWithdraw}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Submit
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};
