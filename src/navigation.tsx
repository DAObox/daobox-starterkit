import {
  CpuChipIcon,
  ChartPieIcon,
  HomeIcon,
  BanknotesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  {
    name: "Governance",
    href: "/governance",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Tokens",
    href: "/tokens",
    icon: ChartPieIcon,
    current: false,
  },
  { name: "Finance", href: "/finance", icon: BanknotesIcon, current: false },
  {
    name: "Custom Apps",
    href: "/apps",
    icon: CpuChipIcon,
    current: false,
    children: [
      { name: "Uniswap", href: "/uniswap" },
      { name: "Aave", href: "/aave" },
      { name: "Token Sale", href: "/token-sale" },
    ],
  },
];
