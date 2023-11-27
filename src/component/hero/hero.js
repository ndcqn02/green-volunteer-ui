"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { instance } from "../../api/index";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

// const callOuts = [
//   {
//     name: "Cleaning up the Danube",
//     description:
//       "Out team is actively working to clean up the Danube River from pollution in order to restore its natural beauty",
//     imageSrc:
//       "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJpdmVyfGVufDB8fDB8fHww",
//     imageAlt:
//       "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
//     href: "#",
//   },
//   {
//     name: "Forest Garden",
//     description:
//       "Since prehistoric times hunter-gatherers might have influenced forests, for instance in Europe by Mesolithic people bringing favored plants like hazel with them.",
//     imageSrc:
//       "https://images.unsplash.com/photo-1590371509519-8594d8ff37a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwZ2FyZGVufGVufDB8fDB8fHww",
//     imageAlt:
//       "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
//     href: "#",
//   },
//   {
//     name: "Become to valley",
//     description:
//       "Silicon Valley is a region in Northern California that is a global center for high technology and innovation",
//     imageSrc:
//       "https://images.unsplash.com/photo-1513029470192-107801f1fe49?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
//     href: "#",
//   },
// ];

export default function Hero() {
  const [dataActivity, setDataActivity] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await instance.get(
          `/activities?page=${"1"}&pageSize=${"4"}`
        );
        setDataActivity(response.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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
  return (
    <>
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

      <div className=" bg-gray-50 mt-20">
        <section className=" text-gray-600 body-font max-w-7xl m-auto">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  Các hoạt động sắp triển khai
                </h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p className=" w-full leading-relaxed text-gray-500 mt-5">
                Trong tháng 12 sắp tới sẽ có các hoạt động rất ý nghĩa, tại
                Green-volunteer bạn sẽ trải nghiệm một không gian mở, đầy đủ cơ
                hội để tham gia vào các hoạt động tình nguyện đa dạng. Từ giáo
                dục cho trẻ em đến bảo vệ môi trường, có nhiều cơ hội đang chờ
                bạn để tạo ra ảnh hưởng tích cực.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {dataActivity.map((activity, index) => (
                <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-200 p-6 rounded-lg">
                    <Image
                      width="40"
                      height="40"
                      className="h-auto rounded w-full object-center mb-6"
                      srcSet="url-to-small-image.jpg 400w,
                      url-to-medium-image.jpg 800w,
                      url-to-large-image.jpg 1200w"
                      sizes="(max-width: 600px) 400px,
                     (max-width: 1200px) 800px,
                     1200px"
                      src="https://veo.com.vn/wp-content/uploads/2023/10/WEB-SLIDER-1.jpg"
                      alt="content"
                    />
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {activity.title}
                    </h2>
                    <p className="leading-relaxed text-base mb-5">
                      {activity.body}
                    </p>
                    <a className=" text-blue-400 cursor-pointer">
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="text-gray-600 body-font max-w-7xl m-auto">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font text-xl mb-2 text-gray-900 font-bold">
                Thành tựu đạt được trong suốt thời gian qua
              </h1>
              <div className="leading-relaxed">
                Trở thành một phần của hành trình tình nguyện đầy ý nghĩa của
                chúng tôi. Hãy cùng nhau xây dựng những khoảnh khắc đáng nhớ và
                để lại dấu ấn tích cực trong thế giới xung quanh! 🚀✨
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                500+
              </h2>
              <p className="leading-relaxed">Tình nguyện viên</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">20+</h2>
              <p className="leading-relaxed">Điểm triển khai</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
              <p className="leading-relaxed">Giải thưởng</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <Image
              className="object-cover object-center w-full h-full"
              width="600"
              height="300"
              src="https://veo.com.vn/wp-content/uploads/2023/10/WEB-SLIDER-1.jpg"
              alt="stats"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              6 tiêu chí chúng tôi hướng đến
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Dưới đây là 6 tiêu chí quan trọng để bạn cân nhắc khi tham gia một
              chuyến du lịch tình nguyện.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Bền Vững và Tác Động Dài Hạn
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Tôn Trọng Văn Hóa và Phương Thức Sống Địa Phương
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Đối Tác Địa Phương và Sự Hợp Tác
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Hỗ Trợ Cộng Đồng Thay Vì Thay Thế
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  An Toàn và Trách Nhiệm
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Tổ Chức và Chuẩn Bị
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative bg-slate-50">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Để lại phản hồi
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy gửi cho chúng tôi những thứ chúng tôi chưa làm được, những điều chưa tốt để xây dựng cộng đồng lớn mạnh hơn
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="  flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Hòm thư góp ý
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
