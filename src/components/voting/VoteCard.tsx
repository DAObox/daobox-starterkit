import React from "react";
import { CategoryBar, Text, Title } from "@tremor/react";
import { VoteStatusBadge } from "./VoteStatusBadge";
import { Card } from "@components/common";
import { Results, VoteCardProps } from "@Types/index";

export const VoteCard: React.FC<VoteCardProps> = ({
  id,
  title,
  description,
  startDate,
  endDate,
  status,
  results,
}) => (
  <Card hoverable pressable href={id} className="-z-10 hover:cursor-pointer">
    <div className="flex justify-between pb-4">
      <Title>{title}</Title>
      <VoteStatusBadge startDate={startDate} endDate={endDate} status={status} />
    </div>
    <Text className="line-clamp-2">{description}</Text>
    <VoteProgress {...results} />
  </Card>
);

export const VoteProgress: React.FC<Results> = ({ yes, no, abstain }) => {
  return (
    <>
      <div className="-mb-1 mt-4 flex justify-between">
        <Text className="start-0 flex">YES ({yes.toString()})</Text>
        <Text className="start-0 flex">NO ({no.toString()})</Text>
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
