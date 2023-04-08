import React from "react";

import { Skeleton } from "../components/common/Skeleton";
import { DaoHeader } from "../components/controls/DaoHeader";
import { VotePannel } from "../components/voting/VotePanel";
import { TokenDistribution } from "../components/charts/TokenDistribution";
import { PageView } from "../components/layout";

const Index = () => {
  return (
    <PageView
      rightColumn={
        <>
          <TokenDistribution />
          <Skeleton height="lg" animated={false} />
        </>
      }
    >
      <DaoHeader />
      <VotePannel />
    </PageView>
  );
};

export default Index;
