"use client";

import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import Image from "next/image";
import banner from "../../../../public/image/banner_listActivities.png";
import img7 from "../../../../public/image/img7.jpg";
import img8 from "../../../../public/image/img8.jpg";
import img9 from "../../../../public/image/img9.jpg";
import img10 from "../../../../public/image/img10.jpg";
import img11 from "../../../../public/image/img11.jpg";
import img12 from "../../../../public/image/img12.jpg";
import React, { useState, Fragment, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from "axios";
import PopUpRegister from "../../../component/popup/PopUpRegister";

const activities = [
    {
        id: 1,
        title: "Trải nghiệm độc đáo",
        body: "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        imageSrc: "https://veo.com.vn/wp-content/uploads/2023/01/CF28DAAB-BEF3-4561-B771-E19142F19EDE-470x470.jpeg"
    },
];

const test1 = [
    {
        id: 1,
        title: "Mạnh Thường Quân",
        body: "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        imageSrc: "https://veo.com.vn/wp-content/uploads/2023/01/CF28DAAB-BEF3-4561-B771-E19142F19EDE-470x470.jpeg",
        button: "Quyên góp"
    },
    {
        id: 2,
        title: "Tình Nguyện Viên",
        body: "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        imageSrc: "https://veo.com.vn/wp-content/uploads/2023/01/CF28DAAB-BEF3-4561-B771-E19142F19EDE-470x470.jpeg",
        button: "Đăng ký"
    },
];

const news = [
    {
        "title": "Trải nghiệm độc đáo",
        "body": "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        "images": "https://veo.com.vn/wp-content/uploads/2022/08/ve%CC%83-scaled-2-740x490.jpeg",
        "status": "status 1",
        "updated_at": "17-11-2023",
        "created_at": "17-11-2023",
        "user_id": "user_id 1",
        "address": "Đa Phước - An Giang",
        "id": "1"
    },
    {
        "title": "Trải nghiệm độc đáo",
        "body": "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        "images": "https://veo.com.vn/wp-content/uploads/2022/08/ve%CC%83-scaled-2-740x490.jpeg",
        "status": "status 1",
        "updated_at": "17-11-2023",
        "created_at": "17-11-2023",
        "user_id": "user_id 1",
        "address": "Đa Phước - An Giang",
        "id": "2"
    },
    {
        "title": "Trải nghiệm độc đáo",
        "body": "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        "images": "https://veo.com.vn/wp-content/uploads/2022/08/ve%CC%83-scaled-2-740x490.jpeg",
        "status": "status 1",
        "updated_at": "17-11-2023",
        "created_at": "17-11-2023",
        "user_id": "user_id 1",
        "address": "Đa Phước - An Giang",
        "id": "3"
    },
    {
        "title": "Trải nghiệm độc đáo",
        "body": "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        "images": "https://veo.com.vn/wp-content/uploads/2022/08/ve%CC%83-scaled-2-740x490.jpeg",
        "status": "status 1",
        "updated_at": "17-11-2023",
        "created_at": "17-11-2023",
        "user_id": "user_id 1",
        "address": "Đa Phước - An Giang",
        "id": "4"
    },
    {
        "title": "Trải nghiệm độc đáo",
        "body": "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        "images": "https://veo.com.vn/wp-content/uploads/2022/08/ve%CC%83-scaled-2-740x490.jpeg",
        "status": "status 1",
        "updated_at": "17-11-2023",
        "created_at": "17-11-2023",
        "user_id": "user_id 1",
        "address": "Đa Phước - An Giang",
        "id": "5"
    },
    {
        "title": "Trải nghiệm độc đáo",
        "body": "Khám phá nền văn hoá truyền thống của mỗi vũng miền, giao lưu cùng người dân và tình nguyện viên quốc tế.",
        "images": "https://veo.com.vn/wp-content/uploads/2022/08/ve%CC%83-scaled-2-740x490.jpeg",
        "status": "status 1",
        "updated_at": "17-11-2023",
        "created_at": "17-11-2023",
        "user_id": "user_id 1",
        "address": "Đa Phước - An Giang",
        "id": "6"
    },
]

const api = axios.create({
    baseURL: ''
})

export default function ListActivities() {
    const [showPopuptnv, setShowPopuptnv] = useState(false);
    const handleOnClose = () => setShowPopuptnv(false);

    const [apiPosts, setApiPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/posts');
                setApiPosts(response.data);
                console.log("response.data: ", response.data);
            } catch (error) {
                console.error('Error fetching data from API:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <Fragment>
            <Header />

            <div className="w-full  bg-purple-600">
                <div className="bg-black w-full h-[500px] relative">
                    <div className="w-full h-[500px] relative">
                        <Image
                            src={banner}
                            alt="picture"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 text-white">
                            <div className="text-center mt-[150px]">
                                <h1 className="text-7xl font-bold">Quỹ Từ Thiện Green Volunteer</h1>
                                <p className="text-3xl mt-[40px]">
                                    Chung tay cải thiện đời sống cộng đồng Việt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl m-auto mt-[45px] space-y-20  ">
                {/*Introduce*/}
                <div className="font-light text-[#346344] text-center flex flex-col space-y-4">
                    <h1 className="text-6xl italic font-bold ">Đôi Lời Giới Thiệu</h1>
                    <p className="italic text-xl">Hương vị của đời là giúp đỡ, vẻ đẹp của đời là cho đi.</p>
                    <p className="text-xl">Nằm ở trung tâm Đà Nẵng, quỹ từ thiện Green Volunteer được sáng lập với mong ước giúp đỡ những mảnh đời còn khó khăn trong cộng đồng. Với sự cống hiến của các tình nguyện viên, các đối tác, mạnh thường quân và đội ngũ vận hành, chúng tôi luôn cố gắng góp phần cải thiện cuộc sống của tất cả những người cần giúp đỡ trong thành phố nói riêng và Việt Nam nói chung. Tham gia cùng chúng tôi để mang lại sự thay đổi tích cực cho chính cộng đồng bạn đang sống.
                    </p>
                </div>
                <div className="bg-[#D7E5BE] w-full relative rounded-lg">
                    <div className="flex space-x-4 px-14 py-16 contrast-125 ">
                        <div className=" basis-1/3 contrast-125">
                            <Image
                                src={img7}
                                alt="picture"
                                className="object-cover opacity-80 rounded-2xl w-[378.663px] h-[556.037px]"
                            />
                        </div>
                        <div className=" basis-1/3 contrast-125 grid grid-cols-2 gap-3">
                            <div className="col-span-2 ">
                                <Image
                                    src={img9}
                                    alt="picture"
                                    className="w-[378.663px] h-[259.6px] object-cover opacity-80 rounded-2xl"
                                />
                            </div>
                            <div>
                                <Image
                                    src={img10}
                                    alt="picture"
                                    className="w-[183.325px] h-[282.812px] object-cover opacity-80 rounded-2xl"
                                />
                            </div>
                            <div>
                                <Image
                                    src={img11}
                                    alt="picture"
                                    className="w-[183.337px] h-[282.812px] object-cover opacity-80 rounded-2xl"
                                />
                            </div>
                        </div>
                        <div className=" basis-1/3 contrast-125">
                            <Image
                                src={img8}
                                alt="picture"
                                className="object-cover opacity-80 rounded-2xl w-[378.663px] h-[556.037px]"
                            />
                        </div>
                    </div>
                </div>
                {/*Program*/}
                <div className="font-light text-[#346344] text-center flex flex-col space-y-4">
                    <h1 className="text-6xl italic font-bold ">Chương Trình Hoạt Động Của Quỹ</h1>
                    <p className="italic text-xl">Trao tặng niềm vui, thắp lên hy vọng.</p>
                    <p className="text-xl">Có thực mới vực được đạo, chúng tôi ấp ủ mong muốn được gieo duyên cho những hoàn cảnh khó khăn bằng những bữa ăn thuần chay nhưng đầy đủ dinh dưỡng. Cùng với sự phát triển của quỹ, mong rằng chúng ta có thể vươn rộng cánh tay giúp đỡ những hoàn cảnh ở vùng sâu vùng xa,với đa dạng chương trình hỗ trợ.
                    </p>
                </div>
                <div className="bg-[#D7E5BE] w-full relative rounded-lg ">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="h-[535px] items-center justify-center py-20 px-10">
                                {activities.map((activities) => (
                                    <div key={activities.id} className="group relative rounded-md basis-1/2 swiper-slide">
                                        <div className="contrast-125">
                                            <Image
                                                src={activities.imageSrc}
                                                className="w-[500px] h-[300px] object-cover opacity-80 rounded-2xl mx-7"
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="w-[418px] h-[160px] bg-gray-100 absolute inset-0 mx-[70px] mt-[240px] font-light text-[#346344] text-center rounded-2xl px-6 py-5 flex flex-col space-y-3 ">
                                            <h1 className="h1 text-center text-2xl font-medium">
                                                {activities.title}
                                            </h1>
                                            <p>
                                                {activities.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[535px] items-center justify-center py-20 px-10">
                                {activities.map((activities) => (
                                    <div key={activities.id} className="group relative rounded-md basis-1/2 swiper-slide">
                                        <div className="contrast-125">
                                            <Image
                                                src={activities.imageSrc}
                                                className="w-[500px] h-[300px] object-cover opacity-80 rounded-2xl mx-7"
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="w-[418px] h-[160px] bg-gray-100 absolute inset-0 mx-[70px] mt-[240px] font-light text-[#346344] text-center rounded-2xl px-6 py-5 flex flex-col space-y-3 ">
                                            <h1 className="h1 text-center text-2xl font-medium">
                                                {activities.title}
                                            </h1>
                                            <p>
                                                {activities.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[535px] items-center justify-center py-20 px-10">
                                {activities.map((activities) => (
                                    <div key={activities.id} className="group relative rounded-md basis-1/2 swiper-slide">
                                        <div className="contrast-125">
                                            <Image
                                                src={activities.imageSrc}
                                                className="w-[500px] h-[300px] object-cover opacity-80 rounded-2xl mx-7"
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="w-[418px] h-[160px] bg-gray-100 absolute inset-0 mx-[70px] mt-[240px] font-light text-[#346344] text-center rounded-2xl px-6 py-5 flex flex-col space-y-3 ">
                                            <h1 className="h1 text-center text-2xl font-medium">
                                                {activities.title}
                                            </h1>
                                            <p>
                                                {activities.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[535px] items-center justify-center py-20 px-10">
                                {activities.map((activities) => (
                                    <div key={activities.id} className="group relative rounded-md basis-1/2 swiper-slide">
                                        <div className="contrast-125">
                                            <Image
                                                src={activities.imageSrc}
                                                className="w-[500px] h-[300px] object-cover opacity-80 rounded-2xl mx-7"
                                                alt=""
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="w-[418px] h-[160px] bg-gray-100 absolute inset-0 mx-[70px] mt-[240px] font-light text-[#346344] text-center rounded-2xl px-6 py-5 flex flex-col space-y-3 ">
                                            <h1 className="h1 text-center text-2xl font-medium">
                                                {activities.title}
                                            </h1>
                                            <p>
                                                {activities.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
                {/*Project*/}
                <div className="font-light text-[#346344] text-center">
                    <h1 className="text-6xl italic font-bold ">Dự Án Quan Trọng</h1>
                </div>
                <div className="bg-[#D7E5BE] w-full relative rounded-lg">
                    <div className="px-20 py-20">
                        <div className="contrast-125">
                            <Image
                                src={img12}
                                alt="picture"
                                className="w-[500px] h-full object-cover opacity-80 rounded-2xl"
                            />
                            <div className="w-[700px] h-[350px] bg-gray-100 absolute inset-0 mx-[420px] mt-[90px] font-light text-[#346344] text-center rounded-2xl px-12 py-5 flex flex-col space-y-3">
                                <h1 className="text-2xl ">Đang kêu gọi | Bắc Kạn</h1>
                                <h1 className="text-4xl font-bold">Dự Án Em Đến Trường</h1>
                                <p className="text-2xl">Là một dự án hỗ trợ giáo dục đầu tiên được quỹ Green Convoluteer triển khai, bao gồm chương trình là lo việc học trẻ em hoàn cảnh khó khăn, cung cấp suất ăn dinh dưỡng, quần áo, đồ dùng học tập cho học sinh nghèo tại Bắc Kạn.</p>
                                <div>
                                    <a href="#">
                                        <button className="transition ease-in-out delay-150 bg-[#346344] hover:-translate-y-1 hover:scale-110 duration-300 text-[#ffffff] text-2xl rounded-lg h-[42px] w-[140px]">
                                            Đóng góp
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Activity*/}
                <div className="font-light text-[#346344] text-center flex flex-col space-y-4">
                    <h1 className="text-6xl italic font-bold ">Hoạt Động Thường Nhật</h1>
                </div>
                <div className="w-full">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {news.map((news) => (
                            <div key={news.id} className="group relative bg-[#D7E5BE] shadow-xl py-4 px-4 rounded-2xl ">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                                    <Image
                                        src={news.images}
                                        className="object-cover object-center h-[240px] w-[374px]"
                                        alt=""
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="mt-4 w-full text-center">
                                    <div className="text-[#346344] flex flex-col space-y-4">
                                        <h3 className="text-3xl ">
                                            <a href={news.href}>
                                                <span aria-hidden="true" className="absolute inset-0 " />
                                                {news.title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm">
                                            {news.body}
                                        </p>
                                        <div className="flex justify-between">
                                            <p className="mt-1 text-sm">
                                                {news.address}
                                            </p>
                                            <p className="mt-1 text-sm">
                                                {news.updated_at}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Support*/}
                <div className="font-light text-[#346344] text-center flex flex-col space-y-4">
                    <h1 className="text-6xl italic font-bold ">Đóng Góp Tuỳ Tâm</h1>
                    <p className="italic text-xl">Trao tặng niềm vui, thắp lên hy vọng.</p>
                </div>
                <div className="w-full">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-28">
                        {test1.map((test1) => (
                            <div key={test1.id} className="group relative bg-[#D7E5BE] shadow-xl py-4 px-4 rounded-2xl ">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                                    <Image
                                        src={test1.imageSrc}
                                        className="object-cover object-center h-[240px] w-[555px]"
                                        alt=""
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="mt-4 w-full text-center">
                                    <div className="text-[#346344] flex flex-col space-y-5 px-12">
                                        <h3 className="text-3xl ">
                                            {test1.title}
                                        </h3>
                                        <p className="mt-1 text-sm">
                                            {test1.body}
                                        </p>

                                    </div>
                                    <div className="pt-[20px]">
                                        <button onClick={() => setShowPopuptnv(true)} type="button" className="transition ease-in-out delay-150 bg-[#346344] hover:-translate-y-1 hover:scale-110 duration-300 text-[#ffffff] text-2xl rounded-lg h-[42px] w-[140px]">
                                            {test1.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
            <PopUpRegister onClose={handleOnClose} visible={showPopuptnv} />
        </Fragment>


    )
}