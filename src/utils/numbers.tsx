import { ethers } from "ethers";

export function calcPercentage(
  part: number | bigint,
  total: number | bigint,
  precision = 2
) {
  return parseFloat(((Number(part) / Number(total)) * 100).toFixed(precision));
}

export function formatMoney(number: number | bigint, symbol?: string) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

  return symbol ? `${symbol} ${formattedNumber}` : formattedNumber;
}

export function formatToken(number: number | bigint, symbol?: string) {
  const ether = ethers.utils.formatEther(number.toString());

  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(ether));

  return symbol ? `${symbol} ${formattedNumber}` : formattedNumber;
}
