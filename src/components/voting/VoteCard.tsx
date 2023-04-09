import React from "react";
import { CategoryBar, MarkerBar, Text, Title } from "@tremor/react";
import { VoteStatusBadge } from "./VoteStatusBadge";
import { Card } from "@components/common";
import { Results, VoteCardProps } from "@Types/index";
import { formatToken } from "@utils/numbers";

export const VoteCard: React.FC<VoteCardProps> = ({
  metadata,
  id,
  startDate,
  endDate,
  result,
  status,
  settings,
}) => {
  console.log(settings);
  return (
    <Card hoverable pressable href={id} className="-z-10 hover:cursor-pointer">
      <div className="flex justify-between pb-4">
        <Title className="line-clamp-1">{metadata?.title}</Title>
        <VoteStatusBadge startDate={startDate} endDate={endDate} status={status} />
      </div>
      <Text className="line-clamp-2">{metadata?.summary}</Text>

      <VoteProgress result={result} settings={settings} />
    </Card>
  );
};
export const VoteProgress: React.FC<any> = ({ result, settings }) => {
  const { yes, no, abstain } = result;
  const hasNoVotes = yes === 0n && no === 0n && abstain === 0n;

  return (
    <div className=" ">
      <div className="-mb-1 mt-4 flex justify-between">
        <Text className="start-0 flex">YES ({formatToken(yes)})</Text>
        <Text className="start-0 flex">NO ({formatToken(yes)})</Text>
      </div>
      {hasNoVotes ? (
        <MarkerBar percentageValue={settings.supportThreshold * 100} className="mt-3" />
      ) : (
        <CategoryBar
          categoryPercentageValues={[Number(yes), Number(abstain), Number(no)]}
          colors={["emerald", "amber", "rose"]}
          showLabels={false}
          className="mt-3"
        />
      )}
    </div>
  );
};
