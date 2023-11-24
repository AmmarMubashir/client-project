"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  return (
    <div className="flex w-[98%] flex-col text-green-500">
      <Tabs aria-label="Options" variant="underlined">
        <Tab
          key="Advance reasoning"
          title="Advance reasoning"
          className="mx-[-10px] text-[12px]"
        >
          <Card className="flex flex-row flex-wrap text-xl bg-[#51DA4C]">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores corrupti illo praesentium nobis fuga sapiente ipsa vitae
                rerum aut quaerat.
              </p>
              <Link href="#" className="underline">
                Try on chatgpt
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <p>
                    Andrew is free from 11 am to 3 pm, Joanne is free from noon
                    to 2 pm and then 3:30 pm to 5 pm. Hannah is available at
                    noon for half an hour, and then 4 pm to 6 pm. What are some
                    options for start times for a 30 minute meeting for Andrew,
                    Hannah, and Joanne?
                  </p>
                </div>
                <div
                  className="min-h-[400px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <p></p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
