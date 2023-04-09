import { ProposalStatus, SortDirection, TokenVotingProposalListItem } from "@aragon/sdk-client";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AccumulatedVotes {
  date: string;
  abstain: number;
  yes: number;
  no: number;
}

export interface VoteItem {
  vote: number;
  voteWeight: bigint;
  date: string;
}

export interface TokenDistributionProps {
  top?: number;
  donutOptions?: any;
  barlistOptions?: any;
}

export interface Results {
  yes: bigint;
  no: bigint;
  abstain: bigint;
}

export type VoteCardProps = TokenVotingProposalListItem;

// export interface VoteCardProps {
//   id: string;
//   title: string;
//   description: string;
//   startDate: Date;
//   endDate: Date;
//   status: ProposalStatus;
//   results: Results;
//   votes: TokenVotingProposalListItem[];
// }

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClick?: () => void;
  hoverable?: boolean;
  pressable?: boolean;
  href?: string;
}

export type Height = "xs" | "s" | "m" | "lg" | "xl";

export interface SkeletonProps {
  height?: Height;
  animated?: boolean;
}

export interface Option<T> {
  value: T;
  text: string;
  disabled?: boolean;
}

export interface DropdownProps<T> {
  options: Option<T>[];
  value: T;
  defaultValue?: T;
  placeholder?: string;
  setValue: (value: T) => void;
}

export interface VoteParameterProps {
  percentageNeeded: number;
  currentPercentage: number;
  title: string;
}

export interface VoteControlsProps {
  sortDirection: SortDirection | null | undefined;
  setSortDirection: React.Dispatch<React.SetStateAction<SortDirection>>;
  proposalStatus: ProposalStatus;
  setProposalStatus: (value: ProposalStatus) => void;
}

export interface VoteProgressBarProps {
  yes: BigInt;
  abstain: BigInt;
  no: BigInt;
  percentageValue?: number;
  showLabels?: boolean;
  className?: string;
}

export interface VoteStatusProps {
  startDate: Date;
  endDate: Date;
  status: ProposalStatus;
}
