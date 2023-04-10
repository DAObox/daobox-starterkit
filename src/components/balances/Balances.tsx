import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";
import { Alchemy, Network } from "alchemy-sdk";
import { truncate } from "fs/promises";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    address: string
}

export default function Balances({ address }: Props) {

    const [data, setData] = useState([])

    const [empty, setEmpty] = useState(true)
    const [error, setError] = useState(false)

    const config = {
        apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
        network: Network.ETH_MAINNET,
      };
      const alchemy = new Alchemy(config);
      
      const main = async () => {
        const balances = await alchemy.core.getTokenBalances(address);
        const nonZeroBalances = balances.tokenBalances.filter((token) => {
          return token.tokenBalance !== "0";
        });
        let i = 1;
        
        let nonZeroBalanceArray: any = []
        let data: any = []
        for (let token of nonZeroBalances) {
          let balance: any = token?.tokenBalance;
          const metadata: any = await alchemy.core.getTokenMetadata(token.contractAddress);
          balance = balance / Math.pow(10, metadata.decimals);
          balance = balance?.toFixed(2);

            nonZeroBalanceArray.push({
                key: (i++).toString(),
                name: metadata.name,
                value: balance,
                href: "",
                icon: metadata?.logo
            })
            

          if (nonZeroBalanceArray.length == nonZeroBalances.length) {
            nonZeroBalanceArray.map((nonZeroBalanceItem: any) => {
                if (nonZeroBalanceItem.icon !== null) {
                    data.push({
                        key: nonZeroBalanceItem.key,
                        name: nonZeroBalanceItem.name,
                        value: Number(nonZeroBalanceItem.value),
                        href: "",
                        icon: function Icon() {
                            return <div className="pr-2"><Image src={nonZeroBalanceItem.icon} alt="logo" width={25} height={25} /></div>
                        }
                    })
                }
            })
            nonZeroBalanceArray.map((nonZeroBalanceItem: any) => {
                if (nonZeroBalanceItem.icon === null) {
                    data.push({
                        key: nonZeroBalanceItem.key,
                        name: nonZeroBalanceItem.name,
                        value: Number(nonZeroBalanceItem.value),
                        href: "",
                        icon: function Icon() {
                            return <div className="pr-2"><Image src={"/ethereum.png"} alt="logo" width={25} height={25} /></div>
                        }
                    })
                }
            })
            setData(data)
            setEmpty(false)
          }
        }
      };
      
      const runMain = async () => {
        try {
          await main();
        } catch (error) {
          setError(true)
          console.log(error);
        }
      };
      
      runMain();

      return(
        <Card className="max-w-lg">
            <Title>Dao Balance</Title>
            {
                error ? <div className="w-full min-h-[200px] bg-gray-200 rounded-md mt-2 flex flex-col items-center justify-center">
                    <p className="text-sm font-semibold text-black text-center">Error fetchind ERC20 tokens held by this dao</p>
                </div> : 
                empty ? <div className="w-full min-h-[200px] bg-gray-200 animate-pulse rounded-md mt-2" /> : 
                data.length > 0 ?
                    <div className={(empty && data.length > 0) ? "hidden" : ""} onLoad={() => document.querySelectorAll(".tremor-BarList-bar").forEach(element => element.classList.remove("bg-blue-100"))}>
                        <Flex className="mt-4">
                        <Text>
                            <Bold>Token</Bold>
                        </Text>
                        <Text>
                            <Bold>Balance</Bold>
                        </Text>
                        </Flex>
                        <BarList data={data} className="mt-2 max-h-52 overflow-y-scroll scrollbar-hide bar" color={undefined} />
                    </div>
                : <div className="w-full min-h-[200px] bg-gray-200 rounded-md mt-2 flex flex-col items-center justify-center">
                    <p className="text-sm font-semibold text-black text-center">This dao holds no ERC20 token</p>
                </div>
            }
        </Card>
      )
}