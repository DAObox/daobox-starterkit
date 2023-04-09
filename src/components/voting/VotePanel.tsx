import React, { FC, useState } from "react";
import { Dropdown } from "@components/inputs";
import { ProposalStatus } from "@aragon/sdk-client";
import { Button, Grid, Text } from "@tremor/react";
import { VoteCard } from "./VoteCard";
import { Card, Skeleton } from "@components/common";
import { SortDirection, useFetchProposals } from "@daobox/use-aragon";
import { VoteControlsProps } from "@Types/index";
import { daoAddress } from "../../constants";

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
  const votesPerPage = 6;
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.DESC);
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus>(ProposalStatus.ACTIVE);

  const [skip, setSkip] = useState<number>(0);

  const { data } = useFetchProposals({
    daoAddressOrEns: daoAddress,
    direction: sortDirection,
    limit: 6,
    status: proposalStatus,
    skip,
  });

  const handlePreviousPage = () => {
    if (skip >= votesPerPage) setSkip((prevSkip) => prevSkip - votesPerPage);
  };

  const handleNextPage = () => {
    if (data && data.length === votesPerPage) {
      setSkip((prevSkip) => prevSkip + votesPerPage);
    }
  };
  return (
    <div className="z-10">
      <VoteControls
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        proposalStatus={proposalStatus}
        setProposalStatus={setProposalStatus}
      />
      <Grid numCols={2} className="!relative -z-10 mt-2 gap-4">
        {data ? (
          <>
            {data.map((vote) => (
              <VoteCard key={vote.id} {...vote} />
            ))}
          </>
        ) : (
          <>
            <Skeleton height="lg" animated={true} />
            <Skeleton height="lg" animated={true} />
          </>
        )}
      </Grid>
      <div className="mt-4 flex justify-center space-x-4">
        <Button
          disabled={skip === 0} // Disable the button if skip is 0
          onClick={handlePreviousPage}
        >
          Previous
        </Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </div>
  );
}
