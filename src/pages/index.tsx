import React from "react";
import { Layout } from "../components/Layout";
import { Skeleton } from "../components/Skeleton";
import { DaoHeader } from "../components/DaoHeader";
import { VotePannel } from "../components/voting/VoteControls";
import { TokenDistribution } from "../components/charts/TokenDistribution";

const Index = () => {
  return (
    <Layout
      rightColumn={
        <>
          <TokenDistribution />
          <Skeleton height="lg" animated={false} />
        </>
      }
    >
      <DaoHeader />

      <VotePannel />
    </Layout>
  );
};

export default Index;
