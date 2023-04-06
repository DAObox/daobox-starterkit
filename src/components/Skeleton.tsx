import React from "react";
import clsx from "clsx";

type Height = "xs" | "s" | "m" | "lg" | "xl";

const heightMap: Record<Height, string> = {
  xs: "h-16",
  s: "h-32",
  m: "h-64",
  lg: "h-96",
  xl: "h-screen",
};

interface SkeletonProps {
  height?: Height;
  animated?: boolean;
}

export function Skeleton({ height = "m", animated = true }: SkeletonProps) {
  const resolvedHeight = heightMap[height] || heightMap.m;

  return (
    <div className={clsx({ "animate-pulse": animated })}>
      <div
        className={clsx(
          "bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4",
          resolvedHeight
        )}
      />
    </div>
  );
}
