import React from "react";
import { CategoryBar } from "@tremor/react";
import clsx from "clsx";
import { VoteProgressBarProps } from "@Types/index";

export function VoteProgressBar({
  yes,
  abstain,
  no,
  percentageValue = 50,
  showLabels = false,
  className,
}: VoteProgressBarProps) {
  const categoryValues = [Number(yes), Number(abstain), Number(no)];
  const categoryColors = ["emerald", "amber", "rose"] as any;

  return (
    <CategoryBar
      categoryPercentageValues={categoryValues}
      colors={categoryColors}
      percentageValue={percentageValue}
      showLabels={showLabels}
      className={clsx("mt-3", className)}
    />
  );
}
