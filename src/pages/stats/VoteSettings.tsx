import React from "react";
import { Card } from "../../components/common/Card";
import { Title, Button, Flex, Badge } from "@tremor/react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { VoteParameter } from "./VoteParameter";

export const VoteSettings = () => {
  return (
    <Card>
      <Flex alignItems="start">
        <Title>Vote Parameters</Title>
        <Badge>Normal Mode</Badge>
      </Flex>

      <VoteParameter percentageNeeded={25} currentPercentage={20} title={"Minimum Participation"} />
      <VoteParameter percentageNeeded={50} currentPercentage={45} title={"Support Threshold"} />

      <Flex className="mt-6 border-t pt-4">
        <Button size="xs" variant="light" icon={ArrowSmallRightIcon} iconPosition="right">
          Configure
        </Button>
      </Flex>
    </Card>
  );
};
