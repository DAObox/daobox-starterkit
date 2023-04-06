import React from "react";
import { Layout } from "../components/Layout";
import { Skeleton } from "../components/Skeleton";
import { DaoHeader } from "../components/DaoHeader";
import { VotePannel } from "../components/voting/VoteControls";
import { TokenDistribution } from "../components/charts/TokenDistribution";
import { toDarkMode, toLightMode, toSystemMode } from '../components/modes/theme';

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
      <button onClick={() => toDarkMode()}>Hi</button>
    </Layout>
  );
};

export default Index;
