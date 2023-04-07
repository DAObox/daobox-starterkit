import React, { FC } from "react";
import { Text, Flex, RangeBar } from "@tremor/react";
import { VoteParameterProps } from "@Types/index";

export const VoteParameter: FC<VoteParameterProps> = ({
  percentageNeeded,
  currentPercentage,
  title,
}) => {
  const color = currentPercentage > percentageNeeded ? "emerald" : "rose";
  return (
    <div className="mt-4 space-y-2">
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
