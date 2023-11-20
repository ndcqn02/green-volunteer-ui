"use client";

import { ChartPieIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import img1 from "../../../public/image/img1.avif";
import img2 from "../../../public/image/img4.jpg";
import img4 from "../../../public/image/img5.avif"
import { useState } from "react";

const callOuts = [
  {
    name: "Cleaning up the Danube",
    description:
      "Out team is actively working to clean up the Danube River from pollution in order to restore its natural beauty",
    imageSrc:
      "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJpdmVyfGVufDB8fDB8fHww",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Forest Garden",
    description:
      "Since prehistoric times hunter-gatherers might have influenced forests, for instance in Europe by Mesolithic people bringing favored plants like hazel with them.",
    imageSrc:
      "https://images.unsplash.com/photo-1590371509519-8594d8ff37a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwZ2FyZGVufGVufDB8fDB8fHww",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Become to valley",
    description:
      "Silicon Valley is a region in Northern California that is a global center for high technology and innovation",
    imageSrc:
      "https://images.unsplash.com/photo-1513029470192-107801f1fe49?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Hero() {
  const [accordionStates, setAccordionStates] = useState([false, false, false]);

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl flex  justify-between">
        <div className="w-60">
          <div className="relative">
            <button
              type="button"
              className="absolute text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-lime-200 dark:hover:bg-lime-400 dark:focus:ring-lime-600"
            >
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>

            <button
              type="button"
              className="absolute ml-20 mt-10 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <ChartPieIcon
                className=" h-6 w-6 flex-none text-white-400"
                aria-hidden="true"
              />
              <span className="sr-only">Icon description</span>
            </button>
          </div>

          <p className="leading-normal text-sm font-semibold mt-28  text-gray-600 ">
            We are an organization that educates society about the problems of
            ecology and nature
          </p>
        </div>

        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Join us in the fight for the environment
          </h1>
        </div>

        <div className="w-60">
          <div className="relative">
            <button
              type="button"
              className="right-0 absolute text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-lime-200 dark:hover:bg-lime-400 dark:focus:ring-lime-600"
            >
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>

            <button
              type="button"
              className="absolute ml-20 mt-10 text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center border border-black"
            >
              <ChartPieIcon
                className=" h-6 w-6 flex-none text-white-400"
                aria-hidden="true"
              />
              <span className="sr-only">Icon description</span>
            </button>
          </div>

          <button
            type="button"
            className="text-black mt-36 ml-24 rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:bg-lime-300 dark:hover:bg-lime-400 dark:focus:bg-lime-400"
          >
            Learn more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl flex  justify-evenly items-center">
        <div className="w-40 h-40 rounded-[20px] overflow-hidden">
          <Image
            src={img1}
            alt="picture"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>

        <div className="dark:bg-lime-100 w-60 h-60 rounded-[20px] relative">
          <div className="text-center flex flex-col items-center h-full">
            <p className="text-xl mt-2">+685 trees planted</p>
            <p className="text-xs w-40 mt-1">
              More than 685 trees were planted last year with the help of our
              activists
            </p>
          </div>

          <div className="dark:bg-lime-200 rounded-2xl w-auto h-3/5 absolute bottom-0 left-0 right-0 text-center flex flex-col items-center">
            <p className="text-xl mt-2 w-36">6 educational programs</p>
            <p className="text-xs w-40 mt-1">
              Were launched and developed by our specicalists to educate young
              people
            </p>
          </div>
        </div>

        <div className="bg-red-900 w-60 h-80 rounded-[20px] relative overflow-hidden">
          <p className="absolute bg-white rounded-2xl px-3 mt-64 w-auto mx-3">
            Share with us your results specicalists
          </p>
          <Image
            src={img4}
            alt="picture"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="bg-white w-60 h-60 rounded-[20px] relative overflow-hidden">
          <div className="absolute overflow-hidden w-60 h-60">
            <button
              type="button"
              className=" absolute dark:bg-transparent border hover:bg-sky-700 border-white rounded-full px-4 py-1 mt-2 ml-2 dark:focus:ring-lime-600 text-white"
            >
              Support
            </button>
            <button
              type="button"
              className="absolute dark:bg-transparent border hover:bg-sky-700 border-white rounded-full px-4 py-1 mt-2 ml-28 dark:focus:ring-lime-600 text-white"
            >
              Charity
            </button>
          </div>

          <p className="absolute bg-white rounded-2xl px-3 mt-44 w-auto mx-3">
            Donate and help the environment
          </p>
          <Image
            src={img2}
            alt="picture"
            className=" w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="dark:bg-lime-200 dark:focus:ring-lime-600 flex relative w-40 h-40 rounded-[20px] overflow-hidden">
          <button
            type="button"
            className="mt-2 ml-28 absolute text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center border border-white"
          >
            <ChartPieIcon
              className=" h-4 w-4 text-white-400"
              aria-hidden="true"
            />
            <span className="sr-only">Icon description</span>
          </button>
          <p className="absolute text-black text-m mt-14 text-center">
            International environment day
          </p>
        </div>
      </div>
      {/* Line/ */}
      <div className=" w-full mt-10 h-8 bg-lime-300"></div>

      {/* Sub */}
      <div className="flex max-w-7xl justify-center mx-auto pt-10 text-center">
        <div className="w-1/3">
          <p className="w-2/3">
            The GreenVolunteer has carried out many succesfull project for
            reforestation and biodiversity conversation
          </p>
        </div>
        <div className="w-1/3">
          <h1 className="text-4xl font-bold">
            We strive to protect nature for future generations
          </h1>
          <div className="mt-10">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              About us
            </button>
            <button
              type="button"
              className="text-black  focus:ring-4 focus:outline-none foc font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center "
            >
              View Campaigns
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* sub2 */}
      <div className="bg-gray-100 mt-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl  sm:py-12 lg:max-w-none ">
            <h2 className="text-4xl font-bold text-gray-900 w-2/3">
              We hold various events, campaigns and raise funds for the
              implementation of project to preserve the environment
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callOuts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full  object-center"
                      width={500}
                      height={500}
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-7xl mt-10 m-auto">
        <h2 className="text-2xl">Get involved</h2>
        <div>
          {accordionStates.map((isOpen, index) => (
            <div
              key={index}
              className={`accordion m-auto bg-lime-300 rounded-2xl p-6 mt-5 ${isOpen ? "open" : ""
                }`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-2xl">
                  You can become a volunteer <span>{isOpen ? "-" : "+"}</span>
                </h3>
              </div>
              {isOpen && (
                <div className="accordion-content mt-7">
                  <p>This is the accordion content.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
