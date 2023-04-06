import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { CategoryBar, ProgressBar, Text, Title } from "@tremor/react";
import { ProposalStatus } from "@aragon/sdk-client";
import { VoteStatusBadge } from "./VoteStatusBadge";
import { Card } from "../common/Card";

interface Results {
  yes: bigint;
  no: bigint;
  abstain: bigint;
}

interface VoteCardProps {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: ProposalStatus;
  results: Results;
}

export const VoteCard: React.FC<VoteCardProps> = ({
  title,
  description,
  startDate,
  endDate,
  status,
  results,
}) => (
  <Card hoverable pressable className="-z-10">
    <div className="flex justify-between pb-4">
      <Title>{title}</Title>
      <VoteStatusBadge
        startDate={startDate}
        endDate={endDate}
        status={status}
      />
    </div>
    <Text className="line-clamp-2">{description}</Text>
    <VoteProgress {...results} />
  </Card>
);

export const VoteProgress: React.FC<Results> = ({ yes, no, abstain }) => {
  return (
    <>
      <div className="flex justify-between mt-4 -mb-1">
        <Text className="flex start-0">YES ({yes.toString()})</Text>
        <Text className="flex start-0">NO ({no.toString()})</Text>
      </div>
      <CategoryBar
        categoryPercentageValues={[Number(yes), Number(abstain), Number(no)]}
        colors={["emerald", "amber", "rose"]}
        showLabels={false}
        className="mt-3"
      />
    </>
  );
};