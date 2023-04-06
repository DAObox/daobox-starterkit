import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import { Skeleton } from "../../components/Skeleton";
import { Card } from "../../components/common/Card";
import {
  Title,
  Text,
  Toggle,
  ToggleItem,
  Metric,
  Button,
  Callout,
  Flex,
  CategoryBar,
} from "@tremor/react";
import {
  IdentificationIcon,
  PresentationChartLineIcon,
  CodeBracketIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  HandRaisedIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { AccumulatedVotesChart } from "../../components/charts/AccumulatedVotesChart";
import { votes } from "../../mockData";
import { AccountPill } from "../../components/common/AccountPill";

import { ClampedText } from "../../components/common/ClampedText";
import { VotesPieGraph } from "../../components/charts/VotesPieGraph";
import { VoteSettings } from "../../components/stats/VoteSettings";

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

type VoteDetailHeaderProps = {
  selectedItem: (typeof toggleItems)[number];
  setSelectedValue: (value: string) => void;
};

function VoteDetailHeader({
  selectedItem,
  setSelectedValue,
}: VoteDetailHeaderProps) {
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
            <ToggleItem
              key={item.value}
              value={item.value}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </Toggle>
      </div>
    </>
  );
}

const Index = () => {
  const [selectedValue, setSelectedValue] = useState("details");

  const selectedItem =
    toggleItems.find((item) => item.value === selectedValue) || toggleItems[0];

  return (
    <Layout
      rightColumn={
        <>
          <VotesPieGraph votes={votes} />
          <VoteSettings />
          <Skeleton height="lg" animated={false} />
        </>
      }
    >
      <Card className="min-h-full">
        <div className="block sm:flex sm:justify-between">
          <VoteDetailHeader
            selectedItem={selectedItem}
            setSelectedValue={setSelectedValue}
          />
        </div>
        {selectedValue === "timeline" && (
          <AccumulatedVotesChart votes={votes} />
        )}
        {selectedValue === "details" && <VoteDetails />}
      </Card>
    </Layout>
  );
};

function VotingCTA() {
  return (
    <>
      <div className="flex items-center justify-center space-x-4 py-6">
        <Button icon={HandThumbUpIcon} className="w-32">
          YES
        </Button>
        <Button icon={HandRaisedIcon} className="w-32">
          ABSTAIN
        </Button>
        <Button icon={HandThumbDownIcon} className="w-32">
          NO
        </Button>
      </div>
      <div className="flex justify-center">
        <Callout
          className=" max-w-4xl"
          title="Voting with 12345 TKN. This was your balance when the vote started
      (block 41215032, mined at 18:34 on 6th of Apr. 2023)"
          icon={CheckCircleIcon}
          color="teal"
        />
      </div>
    </>
  );
}

const VoteDetails = () => {
  return (
    <>
      <div className="my-6 flex justify-between ">
        <Metric>Vote Title</Metric>
        <div className="flex items-center">
          <Text className="mr-2">Created By</Text>
          <AccountPill address="0x47d80912400ef8f8224531EBEB1ce8f2ACf4b75a" />
        </div>
      </div>
      <ClampedText clampLine={7}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
        aliquet nunc nisl eget nunc. Sed condimentum, nisl ut aliquam aliquam,
        nunc nisl aliquet nisl, eget aliquet nunc nisl eget nunc. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut
        aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget
        nunc. Sed condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl,
        eget aliquet nunc nisl eget nunc. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed condimentum, nisl ut aliquam aliquam,
        nunc nisl aliquet nisl, eget aliquet nunc nisl eget nunc. Sed
        condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
        aliquet nunc nisl eget nunc. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed condimentum, nisl ut aliquam aliquam, nunc nisl
        aliquet nisl, eget aliquet nunc nisl eget nunc. Sed condimentum, nisl ut
        aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget
        nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
        aliquet nunc nisl eget nunc. Sed condimentum, nisl ut aliquam aliquam,
        nunc nisl aliquet nisl, eget aliquet nunc nisl eget nunc.
      </ClampedText>

      <Flex className="pt-6">
        <Text>%40 (400 VOTES)</Text>
        <Text>%15 (150 VOTES)</Text>
        <Text>%60 (600 VOTES)</Text>
      </Flex>
      <CategoryBar
        categoryPercentageValues={[40, 15, 60]}
        colors={["emerald", "amber", "rose"]}
        percentageValue={50}
        showLabels={false}
        className="mt-3"
      />
      <VotingCTA />
    </>
  );
};

export default Index;
