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
import { RiSearchLine } from "react-icons/ri";

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
                <div className="flex items-center justify-between gap-5 mb-4 lg:mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="provaince"
                    required
                    className="w-[95%] md:w-[48%] px-3 py-2 border-b border-b-[#ad8954] outline-none text-[#3b3b3b] placeholder-[#979797]"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ville"
                    required
                    className="w-[48%] hidden md:block p-2 md:px-3 md:py-2 border-b border-b-[#ad8954] outline-none text-[#3b3b3b] placeholder-[#a0a0a0]"
                  />
                  
                  <RiSearchLine className="text-3xl w-[4%]"/>
            
                </div>
              </form>
            </Card>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}