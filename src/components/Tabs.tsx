import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useEthers } from "@usedapp/core";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import Voters from "./Voters";

interface Tab {
  title: string;
  value: string;
}

const Tabs: React.FC<{
  chairperson: string;
  children: JSX.Element | null;
}> = ({ chairperson, children }) => {
  const { account } = useEthers();
  const isAdmin = chairperson === account;

  const tabs: Tab[] = isAdmin
    ? [
        {
          title: "General",
          value: "tab1",
        },
        {
          title: "Admin: Add voters",
          value: "tab2",
        },
      ]
    : [
        {
          title: "General",
          value: "tab1",
        },
      ];
  const [tabValue, setTabValue] = useState<string>();
  return (
    <TabsPrimitive.Root
      defaultValue="tab1"
      className="w-full max-w-2xl bg-gray-700 p-5 rounded-sm"
    >
      {tabs.length > 1 ? (
        <TabsPrimitive.List className={cx("flex w-full rounded-t-lg")}>
          {tabs.map(({ title, value }) => (
            <TabsPrimitive.Trigger
              key={`tab-trigger-${value}`}
              value={value}
              className={cx(
                "text-black bg-gray-800 rounded-sm",
                "border-gray-300 dark:border-gray-600",
                "radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-600 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800",
                "flex-1 p-2 m-2",
                "focus:radix-state-active:border-b-red",
                "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <span className={cx("text-sm font-medium text-white")}>
                {title}
              </span>
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
      ) : null}
      {tabs.map(({ value }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={cx(" px-6 py-4 ")}
        >
          <span className="text-sm text-white ">
            {
              {
                tab1: children,
                tab2: <Voters chairperson={chairperson} />,
              }[value]
            }
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default Tabs;
