"use client";

import { ChartPieIcon } from "@heroicons/react/24/outline";
import Header from "../header/header";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Footer from "../footer/footer";
import Link from "next/link";
const activitiess = [
    {
      id: 1,
      title: "Tình nguyện Xanh",
      body: "",
      href: "",
      timeStart: "17-11-2023",
      time_end: "20-11-2023",
      address: "Đa Phước - An Giang",
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

      
      {/* detail */}
      <div className="bg-white">
        {activities.map((activities) => (
          <div className="pt-6">
            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div
                key={activities.id}
                className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"
              >
                <img
                  src={activities.images[0].src}
                  alt={activities.images[0].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={activities.images[1].src}
                    alt={activities.images[1].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={activities.images[2].src}
                    alt={activities.images[2].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={activities.images[3].src}
                  alt={activities.images[3].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {activities.title}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-6 lg:row-span-3 lg:mt-0">
                <h2 className="text-2xl">Liên hệ chúng tôi</h2>
                <div>
                  <p className="mt-6">
                    <span>Thời gian khởi hành: </span>
                    {activities.timeStart}
                  </p>
                  <p className="">
                    <span>Thời gian kết thúc: </span>
                    {activities.timeStart}
                  </p>
                  <p className="">
                    <span>Điểm đến: </span>
                    {activities.address}
                  </p>
                </div>
                <form className="mt-10">
                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Đăng kí tham gia
                  </button>
                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-red-400 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Ủng hộ
                  </button>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      Mục tiêu dự án Dự án nhằm duy trì và bảo tồn giá trị văn
                      hóa của người dân tộc Lô Lô Chải thông qua các hoạt động
                      hỗ trợ, tu sửa và phát triển mô hình du lịch Homestay “
                      Nhà Trình Tường” – một nét đẹp trong giá trị văn hóa của
                      người dân nơi cực bắc Tổ Quốc. Thông qua các hoạt động hỗ
                      trợ thiết thực như đào tạo kỹ năng việc làm, dạy học phi
                      chính quy, quảng bá, truyền thông về hình ảnh du lịch cộng
                      đồng tại địa phương, tổ chức các chương trình du lịch trải
                      nghiệm, V.E.O mong muốn mang lại những cơ hội thiết thực
                      nhất, phát triển kinh tế bền vững nhất cho bà con nơi đây.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Đặc điểm nổi bật
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {activities.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Lịch trình
                  </h2>
                  {activities.timeLine.map((dayTimeline, dayIndex) => (
                    <div key={dayIndex} className="mt-4 space-y-6">
                      <h1>{dayTimeline[0]}</h1>{" "}
                      <ul>
                        {dayTimeline.slice(1).map((timeLine, index) => (
                          <li key={index} className="text-sm text-gray-600">
                            {timeLine}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
            {activitiess.map((activity) => (
                <div
                  key={activity.id}
                  className="group relative bg-gray-100 shadow-xl px-4 py-4 rounded-md"
                >
                  <Link href={`/pages/activities/${activity.id}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <img
                      src={activity.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
                </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
