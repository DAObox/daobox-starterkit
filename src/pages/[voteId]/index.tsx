import React, { useState } from "react";
import {
  IdentificationIcon,
  PresentationChartLineIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { Title, Text, Toggle, ToggleItem, Metric, Flex } from "@tremor/react";
import { PageView } from "@components/layout";
import { Card, AccountPill, ClampedText, Skeleton } from "@components/common";
import { AccumulatedVotesChart, VoteSummary } from "@components/charts";
import { mockVoteDetails, votes } from "../../mockData";

import { VoteSettings } from "@components/stats/VoteSettings";
import { calcPercentage, tokenValueFormatter } from "@utils/numbers";
import { VoteProgressBar, VotingCTA } from "@components/voting";

const toggleItems = [
  {
    value: "details",
    text: "Details",
    icon: IdentificationIcon,
    title: "Details Title",
    subtitle: "Details Subtitle",
  },
  {
    value: "actions",
    text: "Actions",
    icon: CodeBracketIcon,
    title: "Actions Title",
    subtitle: "Actions Subtitle",
  },
  {
    value: "timeline",
    text: "Timeline",
    icon: PresentationChartLineIcon,
    title: "Timeline Title",
    subtitle: "Timeline Subtitle",
  },
] as const;

const Index = () => {
  const [selectedValue, setSelectedValue] = useState("details");
  const selectedItem = toggleItems.find((item) => item.value === selectedValue) || toggleItems[0];

  return (
    <PageView
      rightColumn={
        <>
          <VoteSummary />
          <VoteSettings />
          <Skeleton height="lg" animated={false} />
        </>
      }
    >
      <Card className="min-h-full">
        <div className="block sm:flex sm:justify-between">
          <VoteHeader selectedItem={selectedItem} setSelectedValue={setSelectedValue} />
        </div>
        {selectedValue === "timeline" && <AccumulatedVotesChart votes={votes} />}
        {selectedValue === "details" && <VoteDetails />}
      </Card>
    </PageView>
  );
};

type VoteHeaderProps = {
  selectedItem: (typeof toggleItems)[number];
  setSelectedValue: (value: string) => void;
};

function VoteHeader({ selectedItem, setSelectedValue }: VoteHeaderProps) {
  return (
    <>
      <div>
        <Title>{selectedItem.title}</Title>
        <Text>{selectedItem.subtitle}</Text>
      </div>
      <div className="mt-4 sm:mt-0">
        <Toggle
          color="zinc"
          defaultValue="details"
          onValueChange={(value) => setSelectedValue(value)}
        >
          {toggleItems.map((item) => (
            <ToggleItem key={item.value} value={item.value} text={item.text} icon={item.icon} />
          ))}
        </Toggle>
      </div>
    </>
  );
}

const VoteDetails = () => {
  const data = mockVoteDetails;
  const { metadata, result, creatorAddress, token } = data;
  const { yes, no, abstain } = result;
  const totalVotes = Number(yes + no + abstain);

  const formatToken = tokenValueFormatter(token.decimals);
  return (
    <>
      <div className="my-6 flex justify-between ">
        <Metric>{metadata.title}</Metric>
        <div className="flex items-center">
          <Text className="mr-2">Created By</Text>
          <AccountPill address={creatorAddress} />
        </div>
      </div>
      <ClampedText clampLine={7}>{metadata.Description}</ClampedText>

      <Flex className="pt-6">
        <Text>{`%${calcPercentage(yes, totalVotes)} (${formatToken(yes, 2)} TKN)`}</Text>
        <Text>{`%${calcPercentage(no, totalVotes)} (${formatToken(no, 2)} TKN)`}</Text>
      </Flex>
      <VoteProgressBar {...result} />
      <VotingCTA />
    </>
  );
};

export default Index;
