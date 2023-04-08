import { Button } from "@tremor/react";
import { useFetchDao } from "@daobox/use-aragon";
import { Avatar } from "flowbite-react";
import { Skeleton } from "@components/common";
import { ipfsUriToUrl } from "@utils/strings";
import { daoAddress } from "../../constants";

export function DaoHeader() {
  const { data } = useFetchDao({ daoAddressOrEns: daoAddress });
  if (!data) return <Skeleton height="s" animated={true} />;

  const { metadata, ensDomain } = data;

  return (
    <section className="pb-6" aria-labelledby="profile-overview-title">
      <div className="p-6 overflow-hidden bg-white rounded-lg shadow dark:!bg-gray-700 dark:border dark:border-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Avatar size="lg" img={ipfsUriToUrl(metadata?.avatar)}>
            <p className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">{metadata.name}</p>
            <p className="text-sm font-medium text-gray-600/75 dark:text-white">{ensDomain}</p>
          </Avatar>
          <button>Hi</button>
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
