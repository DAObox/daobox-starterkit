import React from "react";
import { Card } from "../common/Card";
import { Title, DonutChart } from "@tremor/react";
import { formatToken } from "../../utils/numbers";

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
    <Card className="max-w-lg">
      <Title>Vote Summary</Title>
      <DonutChart
        className="mt-6 "
        variant="pie"
        data={voteSummary}
        category="number"
        index="vote"
        valueFormatter={(value) => formatToken(value, "TKN")}
        colors={["amber", "emerald", "rose"]}
      />
    </Card>
  );
};
