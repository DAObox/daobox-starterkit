import { ProposalStatus } from "@aragon/sdk-client";

export const votes = [
  {
    address: "0x123456789123456789123456789123456789",
    vote: 2, // VoteValues.YES
    voteWeight: 5689207448323386710n,
    date: "2023-04-01T00:00:00.000Z",
  },
  {
    address: "0x234567891234567891234567891234567890",
    vote: 3, // VoteValues.NO
    voteWeight: 751326559883297370n,
    date: "2023-04-01T01:00:00.000Z",
  },
  {
    address: "0x3456789012345678901234567890123456789012",
    vote: 1, // VoteValues.ABSTAIN
    voteWeight: 1011376675437890230n,
    date: "2023-04-01T02:00:00.000Z",
  },
  {
    address: "0x4567890123456789012345678901234567890123",
    vote: 2,
    voteWeight: 387197982524013360n,
    date: "2023-04-01T03:00:00.000Z",
  },
  {
    address: "0x5678901234567890123456789012345678901234",
    vote: 3,
    voteWeight: 7938881289357821270n,
    date: "2023-04-01T04:00:00.000Z",
  },
  {
    address: "0x6789012345678901234567890123456789012345",
    vote: 1,
    voteWeight: 5563303836722040640n,
    date: "2023-04-01T05:00:00.000Z",
  },
  {
    address: "0x7890123456789012345678901234567890123456",
    vote: 2,
    voteWeight: 600543516321697730n,
    date: "2023-04-01T06:00:00.000Z",
  },
  {
    address: "0x8901234567890123456789012345678901234567",
    vote: 3,
    voteWeight: 2458725200148793990n,
    date: "2023-04-01T07:00:00.000Z",
  },
  {
    address: "0x9012345678901234567890123456789012345678",
    vote: 1,
    voteWeight: 1604024373172671770n,
    date: "2023-04-01T08:00:00.000Z",
  },
  {
    address: "0xA012345678901234567890123456789012345678",
    vote: 2,
    voteWeight: 1476910495222382210n,
    date: "2023-04-01T09:00:00.000Z",
  },
  {
    address: "0xB123456789012345678901234567890123456789",
    vote: 3,
    voteWeight: 1708605241642760360n,
    date: "2023-04-01T10:00:00.000Z",
  },
];

export const mockVoteDetails = {
  creatorAddress: "0x47d80912400ef8f8224531EBEB1ce8f2ACf4b75a",
  result: {
    yes: 700000n,
    no: 300000n,
    abstain: 0n,
  },
  settings: {
    minParticipation: 0.5,
    supportThreshold: 0.25,
    minDuration: 7200,
  },
  votes,
  metadata: {
    title: "Test Proposal",
    Description: `    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut
      aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nunc. Sed
      condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl
      eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum,
      nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl eget nunc.
      Sed condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc
      nisl eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet nunc nisl
      eget nunc. Sed condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
      aliquet nunc nisl eget nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Sed condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquet
      nunc nisl eget nunc. Sed condimentum, nisl ut aliquam aliquam, nunc nisl aliquet
      nisl, eget aliquet nunc nisl eget nunc. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Sed condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl,
      eget aliquet nunc nisl eget nunc. Sed condimentum, nisl ut aliquam aliquam, nunc
      nisl aliquet nisl, eget aliquet nunc nisl eget nunc.`,
    resources: [
      {
        url: "https://dicord.com/...",
        name: "Discord",
      },
    ],
  },
  token: {
    address: "0x1234567890123456789012345678901234567890",
    name: "The Token",
    symbol: "TOK",
    decimals: 5,
  },
};

export const mockDistributionData = [
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

export const mockVote = {
  id: "0x123",
  title: "Some Vote Title",
  description:
    "ipsum lorem some description lorem ipsum astum fak lorem ipsumipsum lorem some description lorem ipsum astum fak lorem ipsumipsum lorem some description lorem ipsum astum fak lorem ipsum ",
  startDate: new Date(new Date().getTime() + 5 * 60 * 1000),
  endDate: new Date(),
  status: ProposalStatus.ACTIVE,
  results: {
    yes: BigInt(420),
    no: BigInt(69),
    abstain: BigInt(21),
  },
};
