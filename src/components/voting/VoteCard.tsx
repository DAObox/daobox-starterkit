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
  <Card hoverable pressable href={id} className="-z-10 hover:cursor-pointer dark:bg-gray-700">
    <div className="flex justify-between pb-4">
      <Title className="dark:text-white">{title}</Title>
      <VoteStatusBadge startDate={startDate} endDate={endDate} status={status} />
    </div>
    <Text className="line-clamp-2 dark:text-white">{description}</Text>
    <VoteProgress {...results} />
  </Card>
);

export const VoteProgress: React.FC<Results> = ({ yes, no, abstain }) => {
  return (
    <>
      <div className="flex justify-between mt-4 -mb-1">
        <Text className="flex start-0 dark:text-white">YES ({yes.toString()})</Text>
        <Text className="flex start-0 dark:text-white">NO ({no.toString()})</Text>
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
