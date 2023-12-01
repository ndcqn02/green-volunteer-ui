import { ChartPieIcon } from "@heroicons/react/24/outline";
import Header from "../header/header";
import Footer from "../footer/footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { instance } from "@/api";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";


export default function DetailAct() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [amount, setAmount] = useState("");
  const [order_desc, setOrder_desc] = useState("");
  const cancelButtonRef = useRef(null);
  const [images, setimages] = useState([]);
  const [detail, setDetail] = useState({})
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
        const res = response.data.data
        setActivities(response1.data.data.data);
        setimages(res.images);
        setDetail(res)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleRegistration = async () => {
    try {
      const response = await instance.post("/vnpay/", { order_desc, amount });

      if (response.status === 200) {
        const link = response.data.data;
        window.location.href = link
  
        setOpen1(false);
      } else {
        console.error('API request failed with status:', response.status);
      }
    } catch (error) {
      // Xử lý lỗi nếu cần
      console.error(error);
    }
  };

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
        <div className="pt-6">
          {/* Image gallery */}
          {images ? (
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <Image
                  src={images[0]?.image_url}
                  alt={images[0]?.image_url}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Image
                    src={images[1]?.image_url}
                    alt={images[1]?.image_url}
                    className="h-full w-full object-cover object-center"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Image
                    src={images[2]?.image_url}
                    alt={images[2]?.image_url}
                    className="h-full w-full object-cover object-center"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <Image
                  src={images[3]?.image_url}
                  alt={images[3]?.image_url}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          ) : (
            // Hiển thị một thông báo hoặc loader khi đang tải dữ liệu
            <p>Loading...</p>
          )}

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {detail ? (
                <div>
                  {/* Sử dụng dữ liệu khi đã sẵn sàng */}
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {detail.title}
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
                  {detail.timeStart}
                </p>
                <p className="">
                  <span>Thời gian kết thúc: </span>
                  {detail.timeStart}
                </p>
                <p className="">
                  <span>Điểm đến: </span>
                  {detail.address}
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

                <button
                  type="submit"
                  onClick={() => {
                    setOpen1(true);
                  }}
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
                                    {images.title}
                                  </p>
                                  <p className="text-sm text-gray-800">
                                    Thời gian đi:
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {images.timeStart}
                                  </p>
                                  <p className="text-sm text-gray-800">
                                    Thời gian về:
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {images.time_end}
                                  </p>
                                  <p className="text-sm text-gray-800">
                                    Địa điểm đến:
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {images.address}
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

              <Transition.Root show={open1} as={Fragment}>
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
                                  className=" text-xl font-semibold leading-6 mb-6 text-gray-900"
                                >
                                  Ủng hộ
                                </Dialog.Title>
                                <div className="mb-4">
                                  <label
                                    htmlFor="amount"
                                    className="block text-sm font-medium text-gray-800"
                                  >
                                    Số tiền:
                                  </label>
                                  <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    className="mt-1 p-2 border rounded-md w-full"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-800"
                                  >
                                    Lời nhắn:
                                  </label>
                                  <input
                                    type="text"
                                    id="message"
                                    name="message"
                                    className="mt-1 p-2 border rounded-md w-full"
                                    value={order_desc}
                                    onChange={(e) =>
                                      setOrder_desc(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                              onClick={handleRegistration}
                            >
                              Chuyển tiếp
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={() => setOpen1(false)}
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
                  <p className="text-base text-gray-900">{detail.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-0 max-w-7xl m-auto ">
        <h1 className="mx-auto text-2xl font-bold tracking-tight text-gray-900">
          Các chương trình du lịch tình nguyện tương tự
        </h1>

        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {dataActivities.map((activity) => (
              <div
                key={activity.id}
                className="group relative bg-gray-100 shadow-xl px-4 py-4 rounded-md"
              >
                <Link href={`/pages/activities/${activity.id || ""}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <Image
                      src={activity.images[0].image_url}
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
      <Footer />
    </>
  );
}
