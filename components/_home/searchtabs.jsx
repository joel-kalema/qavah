import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import {
  Card,
  Button,
} from "@material-tailwind/react";

export default function TabsWithIcon() {
  const data = [
    {
      label: "Acheter",
      value: "acheter",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Investir",
      value: "investir",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Louer",
      value: "louer",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value="acheter">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value }) => (
          <TabPanel key={value} value={value}>
            <Card color="transparent" shadow={false}>
              <form className="">
                <div className="flex gap-2 items-center justify-between  mb-4 lg:mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="provaince"
                    required
                    className="w-4/6 md:w-2/5 px-3 py-2 border border-[#ad8954] rounded-md focus:outline-none focus:border-[#ad8954] text-[#3b3b3b] placeholder-[#979797]"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ville"
                    required
                    className="w-2/5 hidden md:block px-3 py-2 border border-[#ad8954] rounded-md focus:outline-none focus:border-[#ad8954] text-[#3b3b3b] placeholder-[#a0a0a0]"
                  />
                  <Button variant="outlined" className="flex justify-between gap-3 w-2/6 md:w-1/5">
                    Recherche
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-3 w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </Button>
                </div>
              </form>
            </Card>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}