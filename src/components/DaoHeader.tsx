import { useFetchDao } from "@daobox/use-aragon";
import { daoAddress } from "../constants";
import { Skeleton } from "./Skeleton";
import { Avatar } from "flowbite-react";
import { ipfsUriToUrl } from "../utils/strings";
import { Button } from "@tremor/react";

export function DaoHeader() {
  const { data } = useFetchDao({ daoAddressOrEns: daoAddress });

  if (!data) return <Skeleton height="s" animated={true} />;

  return (
    <section className="pb-6" aria-labelledby="profile-overview-title">
      <div className="p-6 overflow-hidden bg-white dark:!bg-gray-700 dark:border dark:border-white rounded-lg shadow">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Avatar size="lg" img={ipfsUriToUrl(data.metadata.avatar)}>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
              {data.metadata.name}
            </p>
            <p className="text-sm font-medium text-gray-600/75 dark:text-white">
              {data.ensDomain}
            </p>
          </Avatar>

          <DaoHeaderButtons />
        </div>
      </div>
    </section>
  );
}

function DaoHeaderButtons() {
  return (
    <div className="flex justify-center mt-5 space-x-2 sm:mt-0">
      <Button variant="secondary">Deposit ETH</Button>
      <Button>Withdraw ETH</Button>
    </div>
  );
}
