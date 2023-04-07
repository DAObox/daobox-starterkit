import React from "react";
import { Badge } from "@tremor/react";
import { getTimeLeft } from "@utils/strings";
import { ProposalStatus } from "@aragon/sdk-client";
import { ClockIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { VoteStatusProps } from "@Types/index";

export function VoteStatusBadge({ startDate, endDate, status }: VoteStatusProps) {
  const badgeColor = statusMap[status].color;
  const icon = statusMap[status].icon;
  const text =
    status === ProposalStatus.ACTIVE || status === ProposalStatus.PENDING
      ? getTimeLeft(startDate, endDate)
      : status;

  return (
    <Badge icon={icon} size="xs" color={badgeColor as any}>
      {text}
    </Badge>
  );
}

export const statusMap: Record<ProposalStatus, { color: string; icon: any }> = {
  Active: { color: "green", icon: ClockIcon },
  Pending: { color: "green", icon: ClockIcon },
  Succeeded: { color: "green", icon: CheckIcon },
  Executed: { color: "green", icon: CheckIcon },
  Defeated: { color: "red", icon: XMarkIcon },
};
