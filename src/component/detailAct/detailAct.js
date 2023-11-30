import { ChartPieIcon } from "@heroicons/react/24/outline";
import Header from "../header/header";
<<<<<<< HEAD
import Footer from "../footer/footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { instance } from "@/api";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";


const activities = [
=======
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Footer from "../footer/footer";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios'
const activitiess = [
>>>>>>> dev
  {
    id: 1,
    title: "Tình nguyện Xanh",
    body: "",
    href: "",
    timeStart: "17-11-2023",
    time_end: "20-11-2023",
    address: "Đa Phước - An Giang",
<<<<<<< HEAD
    images: [
      {
        src: "https://pbgdpl.haiphong.gov.vn/upload/phobienphapluat/product/2022/2/tinh-nguyen-998e2df06ff1465d9ce22d7e00b0cce6.jpg?maxwidth=1000",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tuyengiao.vn/Uploads/2018/9/3/25/thanh-nien-tinh-nguyen-he-hanh-trinh-truong-thanh-cua-thanh-nien-1.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tuyengiao.vn/Uploads/2016/12/25/3tn.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tuyengiao.vn/Uploads/2016/12/25/3tn.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    highlights: [
      "Hand cut and sewn Tham quan làng văn hóa Lũng Cẩm, nơi lấy bối cảnh những thước phim nổi tiếng Chuyện củaPao",
      "Trải nghiệm độc đáo lại ngôi làng cổ tích Lô Lô Chải",
      "Chinh phục cột cờ Lũng Cú, nơi địa đầu tổ quốc.",
      "Chinh phục Mã Pì Lèng, nơi được mệnh danh là đệ nhất hùng quan của Việt Nam.",
    ],
    timeLine: [
      [
        "Ngày 1: Hà Nội – TP Hà Giang – Quản Bạ",
        "19h30: Tập trung, di chuyển tại 142 Giảng Võ (Cửa hàng Kính mắt Việt Tín), Ba Đình, Hà Nội.",
        "20h00: Đoàn bắt đầu xuất phát.",
      ],
      [
        "Ngày 2: Hà Nội – TP Hà Giang – Quản Bạ",
        "03h00: Đoàn đến điểm dừng chân Cán Tỷ, huyện Quản Bạ để nghỉ ngơi, ăn sáng.",
        "8h00: Khởi hành khám phá Công Văn địa chất Hà Giang trên cung đường và check-in tại những địa điểm nổi tiếng (cổng trời Quản Bạ, núi đôi,…).",
        "10h30: Dừng chân tại thung lũng Sủng Là, làng văn hóa Lũng Cẩm – nơi quay bộ phim “Chuyện của Pao”.",
        "12h30: Nghỉ ngơi ăn trưa tại làng Lô Lô Chải, chân cột cờ Lũng Cú.",
        "14h00: Thực hiện hoạt động tình nguyện buổi chiều.",
        "18h00: Nghỉ ngơi ăn tối.",
        "20h00: Chương trình Gala Night giao lưu văn nghệ với bà con Lô Lô Chải.",
        "22h30: Nghỉ ngơi.",
      ],
    ],
  },
];
export default function DetailAct() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [dataActivity, setDataActivity] = useState({});
  const [dataActivities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentPath = window.location.pathname;
      const id = currentPath.split("/").pop();
      console.log("ID:", id);

      try {
        let response1 = await instance.get(
          `/activities?page=${"1"}&pageSize=${"4"}`
        );
        let response = await instance.get(`/activities/getId/${id}`);
        console.log("SADS", response1.data.data.data);
        setActivities(response1.data.data.data);
        setDataActivity(response.data.data);
        console.log(">>>>>>>>>>>", response1.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

=======
    imageSrc: "https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg",
  },
  {
    id: 2,
    title: "Tình nguyện Xanh",
    body: "",
    timeStart: "17-11-2023",
    time_end: "20-11-2023",
    address: "Đa Phước - An Giang",
    imageSrc: "https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg",
  },
  {
    id: 3,
    title: "Tình nguyện Xanh",
    body: "",
    timeStart: "17-11-2023",
    time_end: "20-11-2023",
    address: "Đa Phước - An Giang",
    imageSrc: "https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg",
  },
  {
    id: 4,
    title: "Tình nguyện Xanh",
    body: "",
    timeStart: "17-11-2023",
    time_end: "20-11-2023",
    address: "Đa Phước - An Giang",
    imageSrc: "https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg",
  },
  // More products...
];
export default function DetailAct() {
  const activities = [
    {
      id: 1,
      title: "Tình nguyện Xanh",
      body: "",
      href: "",
      timeStart: "17-11-2023",
      time_end: "20-11-2023",
      address: "Đa Phước - An Giang",
      images: [
        {
          src: "https://pbgdpl.haiphong.gov.vn/upload/phobienphapluat/product/2022/2/tinh-nguyen-998e2df06ff1465d9ce22d7e00b0cce6.jpg?maxwidth=1000",
          alt: "Two each of gray, white, and black shirts laying flat.",
        },
        {
          src: "https://tuyengiao.vn/Uploads/2018/9/3/25/thanh-nien-tinh-nguyen-he-hanh-trinh-truong-thanh-cua-thanh-nien-1.jpg",
          alt: "Model wearing plain black basic tee.",
        },
        {
          src: "https://tuyengiao.vn/Uploads/2016/12/25/3tn.jpg",
          alt: "Model wearing plain gray basic tee.",
        },
        {
          src: "https://cdnimg.vietnamplus.vn/t1200/Uploaded/ngtmbh/2021_09_05/ttxvn_thanh_nien_hn_phong_chong_dich.jpg",
          alt: "Model wearing plain white basic tee.",
        },
      ],
      highlights: [
        "Hand cut and sewn Tham quan làng văn hóa Lũng Cẩm, nơi lấy bối cảnh những thước phim nổi tiếng Chuyện củaPao",
        "Trải nghiệm độc đáo lại ngôi làng cổ tích Lô Lô Chải",
        "Chinh phục cột cờ Lũng Cú, nơi địa đầu tổ quốc.",
        "Chinh phục Mã Pì Lèng, nơi được mệnh danh là đệ nhất hùng quan của Việt Nam.",
        "Chinh phục Mã Pì Lèng, nơi được mệnh danh là đệ nhất hùng quan của Việt Nam.",
      ],
      timeLine: [
        [
          "Ngày 1: Hà Nội – TP Hà Giang – Quản Bạ",
          "19h30: Tập trung, di chuyển tại 142 Giảng Võ (Cửa hàng Kính mắt Việt Tín), Ba Đình, Hà Nội.",
          "20h00: Đoàn bắt đầu xuất phát.",
        ],
        [
          "Ngày 2: Hà Nội – TP Hà Giang – Quản Bạ",
          "03h00: Đoàn đến điểm dừng chân Cán Tỷ, huyện Quản Bạ để nghỉ ngơi, ăn sáng.",
          "8h00: Khởi hành khám phá Công Văn địa chất Hà Giang trên cung đường và check-in tại những địa điểm nổi tiếng (cổng trời Quản Bạ, núi đôi,…).",
          "10h30: Dừng chân tại thung lũng Sủng Là, làng văn hóa Lũng Cẩm – nơi quay bộ phim “Chuyện của Pao”.",
          "12h30: Nghỉ ngơi ăn trưa tại làng Lô Lô Chải, chân cột cờ Lũng Cú.",
          "14h00: Thực hiện hoạt động tình nguyện buổi chiều.",
          "18h00: Nghỉ ngơi ăn tối.",
          "20h00: Chương trình Gala Night giao lưu văn nghệ với bà con Lô Lô Chải.",
          "22h30: Nghỉ ngơi.",
        ],
      ],
    },
  ];

  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      await axios.get('http://54.169.253.94/api/activities')
        .then(res => setData(res.data.data))
        .catch(err => console.log(err))
    }
    )();
  }, []);

  console.log(data.data)


>>>>>>> dev
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

<<<<<<< HEAD
=======

>>>>>>> dev
      {/* detail */}
      <div className="bg-white">
        {activities.map((activities, index) => (
          <div className="pt-6" key={index}>
            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
<<<<<<< HEAD
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
=======
              <div

                className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"
              >
>>>>>>> dev
                <Image
                  src={activities.images[0].src}
                  alt={activities.images[0].alt}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Image
                    src={activities.images[1].src}
                    alt={activities.images[1].alt}
                    className="h-full w-full object-cover object-center"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Image
                    src={activities.images[2].src}
                    alt={activities.images[2].alt}
                    className="h-full w-full object-cover object-center"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <Image
                  src={activities.images[3].src}
                  alt={activities.images[3].alt}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                {dataActivity ? (
                  <div>
                    {/* Sử dụng dữ liệu khi đã sẵn sàng */}
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {dataActivity.title}
                    </h1>
                    {/* Các thành phần JSX khác */}
                  </div>
                ) : (
                  // Hiển thị một thông báo hoặc loader khi đang tải dữ liệu
                  <p>Loading...</p>
                )}
              </div>

              <div className="mt-6 lg:row-span-3 lg:mt-0">
                <h2 className="text-2xl">Liên hệ chúng tôi</h2>
                <div>
                  <p className="mt-6">
                    <span>Thời gian khởi hành: </span>
                    {dataActivity.timeStart}
                  </p>
                  <p className="">
                    <span>Thời gian kết thúc: </span>
                    {dataActivity.timeStart}
                  </p>
                  <p className="">
                    <span>Điểm đến: </span>
                    {dataActivity.address}
                  </p>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Đăng kí tham gia
                  </button>
                  <div
                    id="default-modal"
                    tabindex="-1"
                    aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                          </h3>
                          <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                          >
                            <svg
                              class="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span class="sr-only">Close modal</span>
                          </button>
                        </div>
                        <div class="p-4 md:p-5 space-y-4">
                          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European
                            Union enacts new consumer privacy laws for its
                            citizens, companies around the world are updating
                            their terms of service agreements to comply.
                          </p>
                          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection
                            Regulation (G.D.P.R.) goes into effect on May 25 and
                            is meant to ensure a common set of data rights in
                            the European Union. It requires organizations to
                            notify users as soon as possible of high-risk data
                            breaches that could personally affect them.
                          </p>
                        </div>
                        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button
                            data-modal-hide="default-modal"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            I accept
                          </button>
                          <button
                            data-modal-hide="default-modal"
                            type="button"
                            class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          >
                            Decline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Ủng hộ
                  </button>
                </div>

                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                  <Dialog.Title
                                    as="h3"
                                    className=" text-xl font-semibold leading-6 text-gray-900"
                                  >
                                    Xác nhận đăng kí
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-800">
                                    Tên hoạt động: 
                                    </p>
                                    <p className="text-sm text-gray-500">
                                    {dataActivity.title}
                                    </p>
                                    <p className="text-sm text-gray-800">
                                    Thời gian đi: 
                                    </p>
                                    <p className="text-sm text-gray-500">
                                    {dataActivity.timeStart}
                                    </p>
                                    <p className="text-sm text-gray-800">
                                    Thời gian về: 
                                    </p>
                                    <p className="text-sm text-gray-500">
                                    {dataActivity.time_end}
                                    </p>
                                    <p className="text-sm text-gray-800">
                                    Địa điểm đến: 
                                    </p>
                                    <p className="text-sm text-gray-500">
                                    {dataActivity.address}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                onClick={() => setOpen(false)}
                              >
                                Đăng kí
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen(false)}
                                ref={cancelButtonRef}
                              >
                                Huỷ
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {dataActivity.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide */}
      <div className=" mt-0 max-w-7xl m-auto ">
        <h1 className="mx-auto text-2xl font-bold tracking-tight text-gray-900">
          Các chương trình du lịch tình nguyện tương tự
        </h1>

        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
<<<<<<< HEAD
            {dataActivities.map((activity) => (
              <div
                key={activity.id}
                className="group relative bg-gray-100 shadow-xl px-4 py-4 rounded-md"
              >
                <Link href={`/pages/activities/${activity.id || ""}`}>
=======

            {
              data.data && data.data?.map((item, index) => (

                <div key={index}
                  className="group relative bg-gray-100 shadow-xl px-4 py-4 rounded-md"
                >
                  <Link href={`/pages/activities/${item.id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                      <Image
                        src={item.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        alt=""
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="mt-4 w-full ">
                      <div>
                        <h3 className="text-2xl text-gray-700">
                          <a href={item.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {item.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          <span className="mr-10">Nơi khởi hành:</span>
                          {item.address}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          <span className="mr-10">Ngày khởi hành:</span>{" "}
                          {item.timeStart}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          <span className="mr-10">Ngày kết thúc:</span>
                          {item.time_end}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-white w-full mt-5 m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Đăng kí tham gia
                    </button>
                  </Link>
                </div>


              ))
            }
            {/* {activitiess.map((activity) => (
                <div
                  key={activity.id}
                  className="group relative bg-gray-100 shadow-xl px-4 py-4 rounded-md"
                >
                  <Link href={`/pages/activities/${activity.id}`}>
>>>>>>> dev
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <Image
                      src={activity.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mt-4 w-full ">
                    <div>
                      <h3 className="text-2xl text-gray-700">
                        <a href={activity.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {activity.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        <span className="mr-10">Nơi khởi hành:</span>
                        {activity.address}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        <span className="mr-10">Ngày khởi hành:</span>{" "}
                        {activity.timeStart}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        <span className="mr-10">Ngày kết thúc:</span>
                        {activity.time_end}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-white w-full mt-5 m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Đăng kí tham gia
                  </button>
                </Link>
<<<<<<< HEAD
              </div>
            ))}
=======
                </div>
            ))} */}
>>>>>>> dev
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
