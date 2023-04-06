import { Button } from "@tremor/react";
import React, { ReactNode, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

export const ClampedText: React.FC<AnimatedClampedTextProps> = ({
  clampLine,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpandState = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleExpand = () => {
    toggleExpandState();
  };

  const clampedStyles = isExpanded ? "" : `line-clamp-[${clampLine}]`;

  return (
    <div className="container">
      <div className={`content ${clampedStyles}`}>{children}</div>
      <div className="flex justify-center pt-2">
        <Button
          variant="light"
          className="flex toggle-button"
          onClick={handleToggleExpand}
          icon={isExpanded ? ArrowUpIcon : ArrowDownIcon}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
};
interface AnimatedClampedTextProps {
  clampLine: number;
  children: ReactNode;
}
