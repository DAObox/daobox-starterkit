import React, { FC, useState } from "react";
import { Dropdown } from "../inputs/SelectBox";

import { ProposalStatus } from "@aragon/sdk-client";
import { Grid, Text } from "@tremor/react";
import { VoteCard } from "./VoteCard";
import { Card } from "../common/Card";
import { SortDirection } from "@daobox/use-aragon";

const now = new Date();

const mockVote = {
  id: "0x123",
  title: "Some Vote Title",
  description:
    "ipsum lorem some description lorem ipsum astum fak lorem ipsumipsum lorem some description lorem ipsum astum fak lorem ipsumipsum lorem some description lorem ipsum astum fak lorem ipsum ",
  startDate: new Date(now.getTime() + 5 * 60 * 1000),
  endDate: new Date(),
  status: ProposalStatus.ACTIVE,
  results: {
    yes: BigInt(420),
    no: BigInt(69),
    abstain: BigInt(21),
  },
};

interface VoteControlsProps {
  /** The current sort direction. */
  sortDirection: SortDirection | null | undefined;
  /** The function to set the sort direction. */
  setSortDirection: (value: SortDirection | null | undefined) => void;
  /** The current proposal status filter. */
  proposalStatus: ProposalStatus | null | undefined;
  /** The function to set the proposal status filter. */
  setProposalStatus: (value: ProposalStatus | null | undefined) => void;
}

/**
 * A component that provides controls for filtering and sorting votes.
 * @param sortDirection - The current sort direction.
 * @param setSortDirection - The function to set the sort direction.
 * @param proposalStatus - The current proposal status filter.
 * @param setProposalStatus - The function to set the proposal status filter.
 */
export const VoteControls: FC<VoteControlsProps> = ({
  sortDirection,
  setSortDirection,
  proposalStatus,
  setProposalStatus,
}) => {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
      <div className="flex justify-center mt-5 space-x-2 sm:mt-0">
        <Text className="flex pr-8 start-0 dark:text-white">Vote Filters</Text>
        <Dropdown
          value={sortDirection}
          setValue={(e) => setSortDirection(e)}
          placeholder="Sort Direction"
          options={[
            { value: SortDirection.ASC, text: "Assending" },
            { value: SortDirection.DESC, text: "Descending" },
          ]}
        />
        <Dropdown
          value={proposalStatus}
          setValue={(e) => setProposalStatus(e)}
          placeholder="Proposal Status"
          options={[
            { value: null, text: "All Proposals" },
            { value: ProposalStatus.ACTIVE, text: "Active" },
            { value: ProposalStatus.DEFEATED, text: "Defeated" },
            { value: ProposalStatus.EXECUTED, text: "Executed" },
            { value: ProposalStatus.PENDING, text: "Pending" },
            { value: ProposalStatus.SUCCEEDED, text: "Succeeded" },
          ]}
        />
      </div>
    </Card>
  );
};

export function VotePannel() {
  const [sortDirection, setSortDirection] = useState<SortDirection | null>();
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus | null>();
  return (
    <div className="z-10">
      <VoteControls
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        proposalStatus={proposalStatus}
        setProposalStatus={setProposalStatus}
      />
      <Grid numCols={2} className="gap-4 !relative -z-10 mt-2">
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
      </Grid>
    </div>
  );
}
