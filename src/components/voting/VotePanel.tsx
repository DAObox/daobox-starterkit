import React, { FC, useState } from "react";
import { Dropdown } from "@components/inputs";
import { ProposalStatus } from "@aragon/sdk-client";
import { Grid, Text } from "@tremor/react";
import { VoteCard } from "./VoteCard";
import { Card } from "@components/common";
import { SortDirection } from "@daobox/use-aragon";
import { mockVote } from "../../mockData";
import { VoteControlsProps } from "@Types/index";

export const VoteControls: FC<VoteControlsProps> = ({
  sortDirection,
  setSortDirection,
  proposalStatus,
  setProposalStatus,
}) => {
  return (
    <Card className="rounded-lg bg-white p-6 shadow-md">
      <div className="mt-5 flex justify-center space-x-2 sm:mt-0">
        <Text className="start-0 flex pr-8">Vote Filters</Text>
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
      <Grid numCols={2} className="!relative -z-10 mt-2 gap-4">
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
