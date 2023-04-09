export const shortenHash = (hash: string, charsStart = 4, charsEnd?: number): string => {
  return `${hash.substring(0, charsStart + 2)}...${hash.substring(
    hash.length - (charsEnd || charsStart)
  )}`;
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function ipfsUriToUrl(ipfsUri: string | undefined) {
  if (typeof ipfsUri === "string" && ipfsUri.startsWith("https://")) {
    return ipfsUri;
  }
  if (typeof ipfsUri === "string" && ipfsUri.startsWith("ipfs://")) {
    return "https://ipfs.io/ipfs/" + ipfsUri.slice(7);
  } else {
    return `https://api.dicebear.com/6.x/identicon/svg?seed=${ipfsUri}&backgroundColor=b6e3f4`;
  }
}

function formatTimeDifference(diffMilliseconds: number, unit: string, isFuture: boolean) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diffMinutes = diffMilliseconds / (1000 * 60);
  const diffHours = diffMinutes / 60;

  if (diffHours < 1) {
    const formattedMinutes = rtf.format(
      isFuture ? Math.round(diffMinutes) : -Math.round(diffMinutes),
      "minute"
    );
    return (isFuture ? formattedMinutes.replace("in ", "") : formattedMinutes) + unit;
  } else {
    const diffDays = diffHours / 24;
    const formattedDays = rtf.format(
      isFuture ? Math.round(diffDays) : -Math.round(diffDays),
      "day"
    );
    return (isFuture ? formattedDays.replace("in ", "") : formattedDays) + unit;
  }
}

export function getTimeLeft(startDate: Date, endDate: Date) {
  const now = new Date();
  const isFutureStart = now < startDate;
  const isFutureEnd = now >= startDate && now < endDate;
  const diffMilliseconds =
    (isFutureStart ? startDate : isFutureEnd ? endDate : now).getTime() - now.getTime();
  const unit = isFutureStart ? " until start" : isFutureEnd ? " until end" : " ago";

  return formatTimeDifference(diffMilliseconds, unit, isFutureStart || isFutureEnd);
}

export const formatDateLabel = (date: string) => {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};
