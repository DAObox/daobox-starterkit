import React from "react";
import { Button, Callout } from "@tremor/react";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  HandRaisedIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export function VotingCTA() {
  return (
    <>
      <div className="flex items-center justify-center space-x-4 py-6">
        <Button icon={HandThumbUpIcon} className="w-32">
          YES
        </Button>
        <Button icon={HandRaisedIcon} className="w-32">
          ABSTAIN
        </Button>
        <Button icon={HandThumbDownIcon} className="w-32">
          NO
        </Button>
      </div>
      <div className="flex justify-center">
        <Callout
          className=" max-w-4xl"
          title="Voting with 12345 TKN. This was your balance when the vote started
      (block 41215032, mined at 18:34 on 6th of Apr. 2023)"
          icon={CheckCircleIcon}
          color="teal"
        />
      </div>
    </>
  );
}
