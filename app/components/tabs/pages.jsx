"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { Type } from "../Typography/type";
// import Typo from "./Typo";
import Image from "next/image";
import Egg from "../../../public/img/Egg.png";

export default function App() {
  return (
    <div className="flex w-[100%] flex-col mx-auto">
      {/* <Tabs aria-label="Options" variant="underlined">
        <Tab key="Advance reasoning" title="Advance reasoning">
          <Card className="flex flex-row flex-wrap">
            <CardBody className="w-3/3 md:w-1/3 flex flex-col gap-3">
              <p className="w-[90%] text-black">
                With broad general knowledge and domain expertise, GPT-4 can
                follow complex instructions in natural language and solve
                difficult problems with accuracy.
              </p>
              <Link href="" className="underline">
                Try on ChatGPT Plus
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ml-auto mr-auto">
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
        <Tab key="Advance reasoning" title="Advance reasoning">
          <Card className="flex flex-row flex-wrap">
            <CardBody className="w-3/3 md:w-1/3 flex flex-col gap-3">
              <p className="w-[90%] text-black">
                With broad general knowledge and domain expertise, GPT-4 can
                follow complex instructions in natural language and solve
                difficult problems with accuracy.
              </p>
              <Link href="" className="underline">
                Try on ChatGPT Plus
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ml-auto mr-auto">
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
        <Tab key="Advance reasoning" title="Advance reasoning">
          <Card className="flex flex-row flex-wrap">
            <CardBody className="w-3/3 md:w-1/3 flex flex-col gap-3">
              <p className="w-[90%] text-black">
                With broad general knowledge and domain expertise, GPT-4 can
                follow complex instructions in natural language and solve
                difficult problems with accuracy.
              </p>
              <Link href="" className="underline">
                Try on ChatGPT Plus
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ml-auto mr-auto">
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
        <Tab key="Advance reasoning" title="Advance reasoning">
          <Card className="flex flex-row flex-wrap">
            <CardBody className="w-3/3 md:w-1/3 flex flex-col gap-3">
              <p className="w-[90%] text-black">
                With broad general knowledge and domain expertise, GPT-4 can
                follow complex instructions in natural language and solve
                difficult problems with accuracy.
              </p>
              <Link href="" className="underline">
                Try on ChatGPT Plus
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ml-auto mr-auto">
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
      </Tabs> */}

      <Tabs aria-label="Options" variant="underlined">
        <Tab
          key="Advance reasoning"
          title="Advance reasoning"
          className="text-[12px] mx-0"
        >
          <Card className="flex w-full flex-row flex-wrap text-xl gap-0">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                With broad general knowledge and domain expertise, GPT-4 can
                follow complex instructions in natural language and solve
                difficult problems with accuracy.
              </p>
              <Link href="#" className="underline">
                Try on chatgpt
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-full md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col  text-[17px]"
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
                  <Type />
                  {/* <Typo /> */}
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="Creativity"
          title="Creativity"
          className="mx-[-10px] text-[12px]"
        >
          <Card className="flex flex-row flex-wrap text-xl">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                GPT-4 is more creative and collaborative than ever before. It
                can generate, edit, and iterate with users on creative and
                technical writing tasks, such as composing songs, writing
                screenplays, or learning a user’s writing style.
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
                    Explain the plot of Cinderella in a sentence where each word
                    has to begin with the next letter in the alphabet from A to
                    Z, without repeating any letters.
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
        <Tab
          key="Visual input"
          title="Visual input"
          className="mx-[-10px] text-[12px]"
        >
          <Card className="flex flex-row flex-wrap  text-xl">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                GPT-4 can accept images as inputs and generate captions,
                classifications, and analyses.
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
                  <p>What can I make with these ingredients?</p>
                  <Image src={Egg} />
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
        <Tab
          key="Longer context"
          title="Longer context"
          className="mx-[-10px] text-[12px]"
        >
          <Card className="flex flex-row flex-wrap text-xl">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                GPT-4 is capable of handling over 25,000 words of text, allowing
                for use cases like long form content creation, extended
                conversations, and document search and analysis.
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
                  <p>[Text from: https://en.wikipedia.org/wiki/Rihanna]</p>
                  <p>
                    Describe her Super Bowl performance and what made it
                    special.
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
