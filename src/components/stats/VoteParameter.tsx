import React, { FC } from "react";
import { Text, Flex, RangeBar } from "@tremor/react";

interface VoteParameterProps {
  percentageNeeded: number;
  currentPercentage: number;
  title: string;
}

export const VoteParameter: FC<VoteParameterProps> = ({
  percentageNeeded,
  currentPercentage,
  title,
}) => {
  const color = currentPercentage > percentageNeeded ? "emerald" : "rose";
  return (
    <div className="space-y-2 mt-4">
      <Flex>
        <Text>{title}</Text>
        <Text>
          {`${currentPercentage}% `}({` >${percentageNeeded}%`})
        </Text>
      </Flex>
      <RangeBar
        percentageValue={percentageNeeded}
        minPercentageValue={0}
        maxPercentageValue={currentPercentage}
        markerTooltip={`${currentPercentage}%`}
        rangeTooltip={`${percentageNeeded}%`}
        className="mt-3"
        color={color}
      />
    </div>
  );
};
