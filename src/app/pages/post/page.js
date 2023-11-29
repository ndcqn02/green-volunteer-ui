"use client";

import { ChartPieIcon } from "@heroicons/react/24/outline";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useState, useEffect } from "react";
import { instance } from "@/api";

const posts = [
  {
    id: 1,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More posts...
];

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

export default function Post() {
  const [dataActivity, setDataActivity] = useState([]);
  const [dataNewest, setDataNewest] = useState();
  const [dataNewest1, setDataNewest1] = useState();
  const [event, setEvent] = useState([]);
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const response1 = await instance.get(
          `/posts?page=${"1"}&pageSize=${"4"}&sort=timestamp:desc`
        );
        const response = await instance.get(
          `/posts?page=${"1"}&pageSize=${"50"}&sort=timestamp:desc`
        );
        setDataActivity(response.data.data.data);
        setEvent(response1.data.data.data)
        let data = response.data.data.data;
        console.log(">>>>>>>>>>>", data);

        if (data.length > 0) {
          let valueNewest = data[data.length - 1];
          let valueNewest1 = data[data.length - 2];
          console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", valueNewest);
          setDataNewest(valueNewest);
          setDataNewest1(valueNewest1);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className="w-full  bg-purple-600">
        <div className="line flex max-w-7xl h-11  m-auto text-white justify-between">
          <div className="flex  items-center">
            <ChartPieIcon
              className=" h-6 w-6 flex-none text-white-400"
              aria-hidden="true"
            />
            <p>50.000+ tình nguyện viên từ 2023</p>
          </div>
          <div className="flex items-center">
            <ChartPieIcon
              className=" h-6 w-6 flex-none text-white-400"
              aria-hidden="true"
            />
            <p>15+ điểm dự án triển khai</p>
          </div>
          <div className="flex items-center">
            <ChartPieIcon
              className=" h-6 w-6 flex-none text-white-400"
              aria-hidden="true"
            />
            <p>An toàn tuyệt đối</p>
          </div>
          <div className="flex items-center">
            <ChartPieIcon
              className=" h-6 w-6 flex-none text-white-400"
              aria-hidden="true"
            />
            <p>8 Giải thưởng tình nguyện</p>
          </div>
        </div>
      </div>

      <div className=" max-w-6xl m-auto mt-16">
        <div className="max-w-7xl h-full">
          <div className="flex ">
            <div className="  w-3/4 h-[590px] flex">
              <div className="  w-3/5 h-[590px] flex flex-col relative">
                <div className="bg-slate-200 w-full rounded-xl h-[370px] overflow-hidden">
                  <Image
                    src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
                    alt=""
                    width="576"
                    height="370"
                    className="object-cover w-full h-full"
                  ></Image>
                </div>
                <h1 className="  text-xl mt-3 font-bold">
                  {dataNewest ? dataNewest.title : ""}
                </h1>
                <p className="overflow-hidden mt-3 text-sm">
                  {dataNewest ? truncateString(dataNewest.body, 200) : ""}
                </p>
                <div className=" flex mt-5 absolute bottom-0">
                  <Image
                    width="12"
                    height="12"
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className=" flex items-center ml-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      Đức Cường
                    </p>
                    <p className=" text-xs text-gray-500 ml-3">
                      27/11/2023 -{" "}
                      <time dateTime="2023-01-23T13:23Z">3h ago</time>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-2/5 h-[590px] flex justify-center relative">
                <div className=" w-3/4 h-[500px] flex items-start flex-col">
                  <div className="bg-slate-200 w-full rounded-xl overflow-hidden">
                    <Image
                      src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
                      alt=""
                      width="576"
                      height="370"
                      className="object-cover w-full h-full"
                    ></Image>
                  </div>
                  <h1 className=" text-xl mt-3 font-bold">
                    {dataNewest1 ? dataNewest1.title : ""}
                  </h1>
                  <p className=" mt-3 text-sm">
                    {dataNewest1 ? truncateString(dataNewest1.body, 200) : ""}
                  </p>
                  <div className=" flex mt-5 absolute bottom-0">
                    <Image
                      width="12"
                      height="12"
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className=" flex items-center ml-3">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        Đức Cường
                      </p>
                      <p className=" text-xs text-gray-500 ml-3">
                        27/11/2023 -{" "}
                        <time dateTime="2023-01-23T13:23Z">3h ago</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-gray-100 rounded-xl w-1/4 text-center">
              <h1 className=" text-orange-300 font-bold text-2xl p-3">
                {" "}
                XU HƯỚNG
              </h1>
              <div className=" w-4/5 m-auto">
                <ul role="list" className="divide-y divide-gray-300">
                  {people.map((person, index) => (
                    <li
                      key={person.index}
                      className="flex justify-between gap-x-6 py-5"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {person.name}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl m-auto mt-24">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold my-2">Tin tức và Sự kiện</h1>
          <a
            type="button"
            href="/pages/listPost"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Xem tất cả bài viết
          </a>
        </div>
        <p>
          Bài viết về các hoạt động tình nguyện, chiến dịch, và những câu chuyện
          thành công.
        </p>
        <div className="grid grid-cols-4 gap-4 h-[670px]">
          <div className="col-span-2 h-[670px] relative">
            <div className="flex flex-col ">
              <div className=" w-full rounded-xl h-[370px] overflow-hidden">
                <Image
                  src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
                  alt=""
                  width="576"
                  height="370"
                  className="object-cover w-full h-full"
                ></Image>
              </div>
              <h1 className=" text-2xl mt-3 font-bold">
              {dataNewest1 ? dataNewest1.title : ""}
              </h1>
              <p className=" mt-3 text-sm text-gray-500">
              {dataNewest1 ? truncateString(dataNewest1.body, 200) : ""}
              </p>
              <div className=" flex mt-2 absolute bottom-0">
                <Image
                  width="12"
                  height="12"
                  className="h-12 w-12 flex-none rounded-full "
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className=" flex items-center ml-3">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    Đức Cường
                  </p>
                  <p className=" text-xs text-gray-500 ml-3">
                    27/11/2023 -{" "}
                    <time dateTime="2023-01-23T13:23Z">3h ago</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-4 col-span-2">
            {event.map((event, index) => (
            <div key={index} className=" relative">
            <div className="col-span-2 h-[150px]">
              <div className="flex flex-col ">
                <div className=" w-full rounded-xl h-[150px] overflow-hidden">
                  <Image
                    src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
                    alt=""
                    width="576"
                    height="370"
                    className="object-cover w-full h-full"
                  ></Image>
                </div>
                <h1 className=" text-lg mt-3 font-bold">
                  {event.title}
                </h1>
                <div className=" flex mt-2 absolute bottom-0 mb-2">
                  <Image
                    width="10"
                    height="10"
                    className="h-10 w-10 flex-none rounded-full "
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className=" flex items-center ml-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      Đức Cường
                    </p>
                    <p className=" text-xs text-gray-500 ml-3">
                      27/11/2023 -{" "}
                      <time dateTime="2023-01-23T13:23Z">3h ago</time>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
             ))} 


          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
