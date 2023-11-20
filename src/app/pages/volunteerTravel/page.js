"use client"

import Header from "@/component/header/header";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import axios from 'axios';
import img1 from "../../../../public/image/moitruong.jpg";
import Footer from "@/component/footer/footer";
import Link from "next/link";
import { useEffect, useState } from "react";


const people = [
  {
    name: "Nguyễn Đức Cường",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Võ Trần Trung Anh",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Phan kiên",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lê Thu",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const api = axios.create({
  baseURL: 'https://655238c15c69a7790329b9a2.mockapi.io/api/activities',
});

export default function VolunteerTravel() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/activity');
        setApiData(response.data);
        console.log("response.data: ", response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
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

        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {apiData.map((activity) => (
              <div
                key={activity.id}
                className="group relative bg-gray-100 shadow-xl px-4 py-4 rounded-md"
              >
                <Link href={`/pages/activities/${activity.id}`}>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mt-8 py-12 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Được dẫn dắt bởi Leader giàu kinh nghiệm
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Leader nổi tiếng trên cả nước về tình nguyện
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16"
                    src={person.imageUrl}
                    alt=""
                    width={500}
                    height={500}

                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
