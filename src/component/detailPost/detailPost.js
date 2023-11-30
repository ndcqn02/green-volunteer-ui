"use client";

import { ChartPieIcon } from "@heroicons/react/24/outline";
import Header from "../header/header";
import Footer from "../footer/footer";
import Image from "next/image";
import { Breadcrumbs } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {instance } from "../../api/index"
import { data } from "autoprefixer";

export default function DetailPost() {
  const [dataActivities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentPath = window.location.pathname;
      const id = currentPath.split("/").pop();
      console.log("ID:", id);

      try {
        let response = await instance.get(`/posts/getId/${id}`);
        console.log("SADS", response.data.data);
        setActivities(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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

      <div className=" max-w-7xl m-auto mt-6 text-sm breadcrumbs">
        <ul>
          <li>
            <a>Trang chủ</a>
          </li>
          <li>
            <a href="/pages/post">Bài viết</a>
          </li>
          <li>{dataActivities.title }</li>
        </ul>
      </div>

      <section className=" max-w-4xl m-auto">
        <h1 className="mt-5 font-bold text-xl mb-5">
          {dataActivities.title }
        </h1>

        <i className=" font-semibold text-sm">
          {dataActivities.body}
        </i>

        <Image
          height="450"
          width="896"
          src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
          alt=""
        ></Image>

        {/* <h1 className=" mb-3 font-bold text-2xl mt-5 ">
          Giao lưu các em nhỏ tại điểm trường Mầm non Bản Cỏi
        </h1>
        <p>
          Trong buổi sáng ngày 28/10, đoàn có dịp được ghé thăm và giao lưu với
          thầy cô và các em nhỏ tại Trường mầm non Xuân Sơn – Điểm trường Cỏi
          Lấp. Tại đây, các bạn học sinh trường Vinschool không chỉ có cơ hội
          được thử sức đứng lớp dạy học mà còn tổ chức các hoạt động vui chơi,
          sự kiện “Phiên chợ 0 đồng” và tặng quà cho các em nhỏ tại điểm trường
        </p> */}

        {/* <div className="flex mt-5">
          <Image
            height="450"
            width="296"
            src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
            alt=""
          ></Image>
          <Image
            className="ml-2"
            height="450"
            width="296"
            src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
            alt=""
          ></Image>
          <Image
            className="ml-2"
            height="450"
            width="296"
            src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
            alt=""
          ></Image>
        </div>
        <p className="mt-5">
          V.E.O tin rằng với tầm nhìn chung của hai đơn vị, hai bên sẽ tiếp tục
          mang đến các dự án xã hội có giá trị cho cộng đồng. Hãy cùng đón chờ
          các hoạt động sắp tới của V.E.O và Vinschool nhé!
        </p> */}
      </section>

      <Footer />
    </>
  );
}
