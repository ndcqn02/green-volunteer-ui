"use client"; // This is a client component

import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
  RectangleGroupIcon,
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const news = [
  {
    name: "Quy định, điều khoản",
    description:
      "Phần này bạn có thể biết rõ hơn về quy định cũng như điều khoản khi bạn tham gia.",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Câu hỏi thường gặp",
    description:
      "Các vấn đề thườn gặp trong cuộc hành trình, hay những lo lắng của người mới tham gia.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const token = localStorage.getItem("authToken");

  console.log(">>>>>>>>>>>>>>>", token);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center -m-1.5 p-1.5">
            <Image
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Landscape picture"
              width={50}
              height={50}
            />
            <span className="ml-2 text-black font-semibold">
              Green Volunteer
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 border-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex ">
          <Popover className="relative">
            <Link
              href="/pages/volunteerTravel"
              className="px-5 py-2.5 text-center mr-2 dark:hover:text-zinc-400 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Các dự án
            </Link>
          </Popover>

          <Popover className="relative">
            <Popover.Button className=" px-5 py-2.5 text-center mr-2 dark:hover:text-zinc-400 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Thông tin
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {news.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Link
              href="/pages/post"
              className="px-5 py-2.5 text-center mr-2 dark:hover:text-zinc-400 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Bài viết
            </Link>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="  px-5 py-2.5 text-center mr-2 flex dark:hover:text-zinc-400 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Về chúng tôi
            </Popover.Button>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {token ? (
            // If token exists in localStorage, render profile images and logout button
            // <>
            //   <button
            //     type="button"
            //     onClick={handleLogout}
            //     className="text-white bg-gray-500 hover:bg-gray-900 rounded-full px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-sm font-semibold leading-6"
            //   >
            //     <UserIcon className="h-6 w-6" /> {/* Replace text with user icon */}
            //   </button>
            // </>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className=" rounded-full inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <UserIcon className="h-6 w-6" /> {/* Replace text with user icon */}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            onClick={handleLogout}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            // If no token, render the login button
            <a
              type="button"
              href="/pages/login"
              className="text-white bg-gray-800 hover:bg-gray-900 rounded-full px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-sm font-semibold leading-6"
            >
              Đăng kí<span aria-hidden="true"></span>
            </a>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                width="32"
                height="32"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <RectangleGroupIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2"></Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/pages/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Đăng kí
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
