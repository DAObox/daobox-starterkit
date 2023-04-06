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
      <div className="overflow-hidden rounded-lg bg-white shadow p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Avatar size="lg" img={ipfsUriToUrl(data.metadata.avatar)}>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
              {data.metadata.name}
            </p>
            <p className="text-sm font-medium text-gray-600/75">
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
    <div className="mt-5 flex space-x-2 justify-center sm:mt-0">
      <Button variant="secondary">Deposit ETH</Button>
      <Button>Withdraw ETH</Button>
    </div>
  );
}
