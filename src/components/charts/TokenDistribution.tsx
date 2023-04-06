import {
  BarList,
  Divider,
  DonutChart,
  Flex,
  Metric,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { useState } from "react";
import { ListBulletIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { calcPercentage, formatMoney } from "../../utils/numbers";
import { shortenHash } from "../../utils/strings";
import { Card } from "../common/Card";

export const distributionData = [
  {
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    balance: 12160.43,
  },
  { address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", balance: 9325.56 },
  { address: "0x4fabb145d64652a948d72533023f6e7a623c7c53", balance: 4912.75 },
  { address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", balance: 5123.01 },
  { address: "0xdac17f958d2ee523a2206206994597c13d831ec7", balance: 8252.19 },
  { address: "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44", balance: 732.99 },
  { address: "0x45804880de22913dafe09f4980848ece6ecbaf78", balance: 2366.66 },
  { address: "0xe41d2489571d322189246dafa5ebde1f4699f498", balance: 1867.43 },
  { address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9", balance: 3975.22 },
  { address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", balance: 1296.51 },
];

interface TokenDistributionProps {
  top?: number;
  donutOptions?: any;
  barlistOptions?: any;
}

export const TokenDistribution = ({
  top = 5,
  donutOptions,
  barlistOptions,
}: TokenDistributionProps) => {
  const [selectedView, setSelectedView] = useState("chart");

  // const {data} = useFetchMembersWithBalance();

  const total = distributionData.reduce(
    (sum, member) => sum + member.balance,
    0
  );
  const formatedData = distributionData
    .map((member) => ({
      ...member,
      percentage: calcPercentage(member.balance, total),
    })) // give each entry a percentage
    .map((member) => ({ ...member, address: shortenHash(member.address) })) // shorten the address
    .sort((a, b) => b.balance - a.balance); // sort by balance

  const displayData = [
    ...formatedData.slice(0, top), // split the {top} members
    // add the rest as a single entry
    {
      address: "Rest...",
      balance: formatedData
        .slice(top)
        .reduce((sum, member) => sum + member.balance, 0),
      percentage: formatedData
        .slice(top)
        .reduce((sum, member) => sum + member.percentage, 0),
    },
  ];

  return (
    <Card className="mx-auto p-6">
      <Flex className="space-x-8" justifyContent="between" alignItems="center">
        <Title>Token Distribution</Title>
        <Toggle
          defaultValue="chart"
          color="gray"
          onValueChange={(value) => setSelectedView(value)}
        >
          <ToggleItem value="chart" icon={ChartPieIcon} />
          <ToggleItem value="list" icon={ListBulletIcon} />
        </Toggle>
      </Flex>

      <Metric className="mt-8">TKN {formatMoney(total)}</Metric>
      <Divider />

      {selectedView === "chart" ? (
        <DonutChart
          data={formatedData}
          category="balance"
          index="address"
          valueFormatter={(value) => formatMoney(value, "TKN")}
          className="mt-6"
          {...donutOptions}
        />
      ) : (
        <BarList
          data={displayData.map((member) => ({
            name: member.address,
            value: member.balance,
          }))}
          {...barlistOptions}
        />
      )}
    </Card>
  );
};
