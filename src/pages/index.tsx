import React from "react";

import { PageView } from "../components/layout";
import { Card, Skeleton } from "@components/common";
import { useFetchDaos } from "@daobox/use-aragon";
import { Flex, Metric, Text } from "@tremor/react";
import { Avatar } from "flowbite-react";
import { ipfsUriToUrl } from "@utils/strings";
import { useNetwork } from "wagmi";

const Index = () => {
  const { data } = useFetchDaos({ limit: 10 });
  const { chain } = useNetwork();

  return (
    <PageView>
      {!data ? (
        <Skeleton animated={true} height="xl" />
      ) : (
        data?.map((dao) => (
          <Card
            key={dao.address}
            hoverable
            pressable
            href={`https://app.aragon.org/#/daos/${chain.network}/${dao.address}/dashboard`}
          >
            <Flex justifyContent="start" className="space-x-4">
              <Avatar bordered size="lg" img={ipfsUriToUrl(dao.metadata.avatar)} />
              <div className="truncate">
                <Text>{dao.ensDomain}</Text>
                <Metric className="truncate">{dao.metadata.name}</Metric>
              </div>
            </Flex>
          </Card>
        ))
      )}
    </PageView>
  );
};

export default Index;
