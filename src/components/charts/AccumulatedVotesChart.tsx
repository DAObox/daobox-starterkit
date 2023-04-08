import React from "react";
import { AreaChart } from "@tremor/react";
import { formatUnits } from "ethers/lib/utils.js";
import { formatMoney } from "@utils/numbers";
import { formatDateLabel } from "@utils/strings";
import { AccumulatedVotes, VoteItem } from "@Types/index";

export const AccumulatedVotesChart = ({ votes }: { votes: any }) => {
  const voteTotals: Record<number, bigint> = { 1: 0n, 2: 0n, 3: 0n };

  const accumulatedVotes: AccumulatedVotes[] = votes.reduce(
    (acc: AccumulatedVotes[], { vote, voteWeight, date }: VoteItem) => {
      voteTotals[vote] += BigInt(voteWeight);

      acc.push({
        date: formatDateLabel(date),
        abstain: parseFloat(formatUnits(voteTotals[1], 18)),
        yes: parseFloat(formatUnits(voteTotals[2], 18)),
        no: parseFloat(formatUnits(voteTotals[3], 18)),
      });

      return acc;
    },
    []
  );

  return (
    <>
      <AreaChart
        className=" h-80"
        data={accumulatedVotes}
        categories={["abstain", "yes", "no"]}
        index="date"
        colors={["amber", "emerald", "rose"]}
        showXAxis={true}
        valueFormatter={(value) => formatMoney(value)}
      />
    </>
  );
};
