import React, { useState } from "react";
import { Card } from "@components/common";
import { Title, Toggle, ToggleItem, Flex, Divider } from "@tremor/react";
import { ChartPieIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { votes } from "../../mockData";
import { DonutChart } from "@tremor/react";
import { formatToken } from "@utils/numbers";
import { shortenHash } from "@utils/strings";

export const VoteSummary = () => {
  const [selectedView, setSelectedView] = useState("voters");
  return (
    <>
      <Card className="mx-auto max-w-md">
        <Flex className="space-x-8" justifyContent="between" alignItems="center">
          <Title>Overview</Title>
          <Toggle
            defaultValue="chart"
            color="gray"
            onValueChange={(value) => setSelectedView(value)}
          >
            <ToggleItem value="votes" icon={ChartPieIcon} />
            <ToggleItem value="voters" icon={UserCircleIcon} />
          </Toggle>
        </Flex>
        <Divider />
        {selectedView === "voters" ? (
          <VotersPieGraph votes={votes} topBalances={6} />
        ) : (
          <VotesPieGraph votes={votes} />
        )}
      </Card>
    </>
  );
};

export const VotersPieGraph = ({ votes, topBalances }: { votes: any; topBalances: number }) => {
  const displayData = [
    ...votes.slice(0, topBalances).map((vote: { address: string; voteWeight: any }) => ({
      address: shortenHash(vote.address),
      voteWeight: Number(vote.voteWeight),
    })),
    {
      address: "Others",
      voteWeight: votes.slice(topBalances).reduce((a: number, c: { voteWeight: any }) => {
        return a + Number(c.voteWeight);
      }, 0),
    },
  ];

  return (
    <>
      <DonutChart
        className="max-w-7xl"
        variant="pie"
        data={displayData}
        category="voteWeight"
        index="address"
        valueFormatter={(value) => formatToken(value, "TKN")}
      />
    </>
  );
};

export const VotesPieGraph = ({ votes }: { votes: any }) => {
  const voteSummary = votes.reduce(
    (acc: any, { vote, voteWeight }: any) => {
      acc[vote - 1].number += Number(voteWeight);
      return acc;
    },
    [
      { vote: "abstain", number: 0 },
      { vote: "yes", number: 0 },
      { vote: "no", number: 0 },
    ]
  );

  return (
    <DonutChart
      className="mt-6 "
      variant="pie"
      data={voteSummary}
      category="number"
      index="vote"
      valueFormatter={(value) => formatToken(value, "TKN")}
      colors={["amber", "emerald", "rose"]}
    />
  );
};
