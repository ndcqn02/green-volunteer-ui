"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { instance } from "../../../api/index";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import { format } from "date-fns";

export default function Hero() {
  const [dataActivity, setDataActivity] = useState([]);
  const slides = [
    {
      url: "https://veo.com.vn/wp-content/uploads/2023/11/WEB-SLIDER-4.jpg",
    },
    {
      url: "https://veo.com.vn/wp-content/uploads/2023/10/WEB-SLIDER-2.jpg",
    },
    {
      url: "https://veo.com.vn/wp-content/uploads/2023/10/1-3.jpg",
    },

    {
      url: "https://veo.com.vn/wp-content/uploads/2023/10/2-3.jpg",
    },
    {
      url: "https://veo.com.vn/wp-content/uploads/2023/10/WEB-SLIDER-1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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

  const handelDetail = async (id) => {
    try {
      let response = await instance.get(`/activities/getId/${id}`);

      // Check if the response status is 401 (Unauthorized)
      if (response.status === 401) {
        alert("You need to log in to access this content.");
        // You can redirect the user to the login page or take any other appropriate action.
        // Example: window.location.href = "/login";
      } else {
        // Handle the response data as needed
        console.log(response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const userConfirmed = window.confirm(
          "Bạn cần đăng nhập để xem chi tiết. Chuyển đến trang đăng nhập?"
        );

        if (userConfirmed) {
          window.location.href = "/pages/login";
        } else {
          return;
        }
      } else {
        // Handle other errors if needed
      }
    }
  };

  return (
    <>
      <Header />

      <div className="max-w-[1400px] h-[580px] w-full m-auto py-8 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <section className="text-gray-600 body-font max-w-7xl m-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {dataActivity.map((activity) => (
              <div key={activity.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {activity.title}
                    </h1>
                    <div className="flex justify-between">
                      <p className="   leading-relaxed">Địa điểm: </p>
                      <p className=" text-right">{activity.address}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="   leading-relaxed">Thời gian đi: </p>
                      <p className=" text-right">
                        {format(new Date(activity.timeStart), "dd/MM/yyyy")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="   leading-relaxed">Thời gian về: </p>
                      <p className=" text-right">
                        {format(new Date(activity.time_end), "dd/MM/yyyy")}
                      </p>
                    </div>
                    <div className="flex items-center flex-wrap ">
                      <button
                        onClick={() => handelDetail(activity.id)}
                        className=" text-center bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Đăng kí
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className=" max-w-7xl m-auto flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
