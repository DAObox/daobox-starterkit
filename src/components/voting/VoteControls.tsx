import React, { useState } from "react";
import { Dropdown } from "../inputs/SelectBox";
import { SortDirection } from "@daobox/use-aragon";
import { ProposalStatus } from "@aragon/sdk-client";
import { Grid, Text } from "@tremor/react";
import { VoteCard } from "./VoteCard";
import { Card } from "../common/Card";

const now = new Date();

const mockVote = {
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

function VoteControls(props) {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-center mt-5 space-x-2 sm:mt-0">
        <Text className="flex pr-8 start-0">Vote Filters</Text>
        <Dropdown
          value={props.sortDirection}
          setValue={(e) => props.setSortDirection(e)}
          placeholder="Sort Direction"
          options={[
            { value: SortDirection.ASC, text: "Assending" },
            { value: SortDirection.DESC, text: "Descending" },
          ]}
        />
        <Dropdown
          value={props.proposalStatus}
          setValue={(e) => props.setProposalStatus(e)}
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
}

export function VotePannel() {
  const [sortDirection, setSortDirection] = useState<SortDirection | null>();
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus | null>();
  return (
    <>
      <VoteControls
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        proposalStatus={proposalStatus}
        setProposalStatus={setProposalStatus}
      />
      <Grid numCols={2} className="gap-4 !relative -z-50">
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
        <VoteCard {...mockVote} />
      </Grid>
    </>
  );
}
