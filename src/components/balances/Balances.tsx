import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";
import { Alchemy, Network } from "alchemy-sdk";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Balances() {

    const [data, setData] = useState([{
        name: "",
        value: 0,
        href: "",
        icon: function Icon() {
            return <div className="pr-2"><Image src={"/ethereum.png"} alt="logo" width={25} height={25} /></div>
        }
    }])

    const [empty, setEmpty] = useState(true)
    const [error, setError] = useState(false)

    const config = {
        apiKey: "u7mo84yrNu1bA1VyRAWGI7UdHbDdeLMb",
        network: Network.ETH_MAINNET,
      };
      const alchemy = new Alchemy(config);
      
      const main = async () => {
        // Wallet address
        const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
      
        // Get token balances
        const balances = await alchemy.core.getTokenBalances(address);
      
        // Remove tokens with zero balance
        const nonZeroBalances = balances.tokenBalances.filter((token) => {
          return token.tokenBalance !== "0";
        });
      
        // Counter for SNo of final output
        let i = 1;
        
        let data: any = []
      
        // Loop through all tokens with non-zero balance
        for (let token of nonZeroBalances) {
          // Get balance of token
          let balance: any = token?.tokenBalance;
      
          // Get metadata of token
          const metadata: any = await alchemy.core.getTokenMetadata(token.contractAddress);
      
          // Compute token balance in human-readable format
          balance = balance / Math.pow(10, metadata.decimals);
          balance = balance?.toFixed(2);

          if (balance > 10000) {
            balance = 10000+"+"
          }

          data.push({
            name: metadata.name,
            value: balance,
            href: "",
            icon: function Icon() {
                return <div className="pr-2"><Image src={metadata?.logo || "/ethereum.png"} alt="logo" width={25} height={25} /></div>
            }
          })
          console.log(i++)
          if (data.length == nonZeroBalances.length) {
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
                    <div className={(empty && data.length > 0) ? "hidden" : ""}>
                        <Flex className="mt-4">
                        <Text>
                            <Bold>Token</Bold>
                        </Text>
                        <Text>
                            <Bold>Balance</Bold>
                        </Text>
                        </Flex>
                        <BarList data={data} className="mt-2 max-h-52 overflow-y-scroll scrollbar-hide" />
                    </div>
                : <div className="w-full min-h-[200px] bg-gray-200 rounded-md mt-2 flex flex-col items-center justify-center">
                    <p className="text-sm font-semibold text-black text-center">This dao holds no ERC20 token</p>
                </div>
            }
        </Card>
      )
}