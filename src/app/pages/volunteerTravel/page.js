"use client";

import Header from "@/component/header/header";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import axios from "axios";
import img1 from "../../../../public/image/moitruong.jpg";
import Footer from "@/component/footer/footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { instance } from "@/api";

export default function VolunteerTravel() {
  const [dataActivity, setDataActivity] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await instance.get(
          `/activities?page=${"1"}&pageSize=${"10"}`
        );
        console.log(response.data.data.data);
        setDataActivity(response.data.data.data);
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

        {/* banner */}
        <div className="bg-black w-full h-[500px] relative">
          <div className="w-full h-[500px] relative">
            <Image
              src={img1}
              alt="picture"
              className="w-full h-full object-cover opacity-80"
              width={5000}
              height={5000}
            />
            <div className="absolute inset-0 text-white">
              <div className="text-center mt-[350px]">
                <h1 className="text-4xl font-bold">Du lịch tình nguyện</h1>
                <p className="text-xl">
                  Chương trình tình nguyện kết hợp với trải nghiệm khám phá văn
                  hóa địa phương.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="infor max-w-7xl m-auto mt-8">
        <div>
          <p>
            Du lịch tình nguyện là chương trình tình nguyện kết hợp giữa du lịch
            địa phương và giúp đỡ người dân hoàn thiện cơ sở vật chất, dịch vụ
            và các hoạt động cộng đồng khác ở vùng sâu vùng xa. VEO luôn đặt sự
            phát triển cộng đồng lên hàng đầu và theo cách của riêng mình, hướng
            đến mục tiêu giúp người dân địa phương có thể phát triển và khai
            thác du lịch ngay tại trên quê hương, từ chính ngôi nhà và nếp văn
            hóa của mình.
          </p>
          <p className="mt-3">
            Chương trình du lịch tình nguyện nằm trong chuỗi dự án hỗ trợ phát
            triển du lịch cộng đồng của VEO tại các địa phương. Mục tiêu mang
            đến cho người dân sinh kế mới, gia tăng nguồn thu nhập thông qua du
            lịch, hỗ trợ cải thiện kĩ năng việc làm và bảo tồn các giá trị văn
            hoá của người dân tộc thiểu số
          </p>
          <p className="mt-3">
            Tình nguyện viên sẽ được hòa mình vào thiên nhiên, trải nghiệm cuộc
            sống bình yên tại các vùng quê. Đồng thời khám phá văn hoa địa
            phương, mở rộng kiến thức xã hội và phát triển bản thân.
          </p>
        </div>
      </div>

      {/* Slide */}
      <div className=" mt-10 max-w-7xl m-auto ">
        <h1 className="mx-auto text-2xl font-bold tracking-tight text-gray-900">
          Các chương trình du lịch tình nguyện đang triển khai
        </h1>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {dataActivity.map((activity) => (
              <div key={activity.id} className="p-4 md:w-1/3  ">
              <div className="h-full border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://veo.com.vn/wp-content/uploads/2023/10/WEB-SLIDER-1.jpg"
                  alt="blog"
                  width="720"
                  height="400"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {activity.title}
                  </h1>
                  <div className="flex justify-between">
                    <p className="leading-relaxed mb-1">Địa điểm:</p>
                    <p className=" leading-relaxed mb-1">{activity.address}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="leading-relaxed mb-1">Thời gian đi:</p>
                    <p className=" leading-relaxed mb-1">{activity.timeStart}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="leading-relaxed mb-1">Thời gian về:</p>
                    <p className=" leading-relaxed mb-1">{activity.time_end}</p>
                  </div>
                  <div className="flex items-center flex-wrap ">
                    <Link href={`/pages/activities/${activity.id}`} passHref className="text-indigo-500 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                      Xem chi tiết
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
              ))}

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
