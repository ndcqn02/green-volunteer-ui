"use client";

import Image from "next/image";
import img14 from "../../../public/image/img14.jpg";
import React, {useState, useEffect} from "react";
import axios from "axios";

const api = axios.create({
    baseURL:''
})

const apiUsers1 = [
    {
        id: 1,
        username: "Pham Van Dat",
        phone:"0399939239",
        email:"nguyenvana@gmail.com",
        school:"Trường đại học Sư phạm kỹ thuật-DHDN"
    },
];

export default function popuptnv ({visible, onClose}){
    const handleOnClose = () =>{
        onClose();
    };

    const [apiUsers, setApiUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await api.get('/users');
            setApiUsers(response.data);
            console.log("response.data: ", response.data);
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
        };

        fetchData();
    }, []);

    if (!visible) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[1200px] h-[660px] relative">
                <div className="">
                    <Image 
                        src={img14}
                        alt="picture"
                        className="w-[550px] h-[660px] object-cover opacity rounded-r-[140px]"
                    />
                    <div className="absolute inset-0 h-[660px] w-[700px] bg-[#D7E5BE] mx-[512px] rounded-l-[140px] text-[#346344]">
                        <div className="flex flex-col px-20 py-20 space-y-6">
                            <h1 className="text-center text-2xl font-light">Đăng Ký Tham Gia</h1>

                            <div className="bg-white rouded-lg flex flex-col w-full space-y-2 font-light px-6 py-5 rounded-lg ">
                                <div className="grid grid-cols-3 gap-1">
                                    <label htmlFor="username" className="col-span-1">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="col-span-2 block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Pham van A"
                                        value={apiUsers1[0].username}
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-1">
                                    <label htmlFor="phone" className="col-span-1">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        autoComplete="phone"
                                        className="col-span-2 block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="0399939239"
                                        value={apiUsers1[0].phone}
                                    ></input>
                                </div>
                                <div className="grid grid-cols-3 gap-1">
                                    <label htmlFor="email" className="col-span-1">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="col-span-2 block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="nguyenvana@gmail.com"
                                        value={apiUsers1[0].email}
                                    ></input>
                                </div>
                                <div className="grid grid-cols-3 gap-1">
                                    <label htmlFor="school" className="col-span-1">
                                        Công tác/học tập
                                    </label>
                                    <input
                                        type="text"
                                        name="school"
                                        id="school"
                                        autoComplete="school"
                                        className="col-span-2 block flex-1 border-0 bg-transparent pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Trường đại học Sư phạm Kỹ thuật-DHDN"
                                        value={apiUsers1[0].school}
                                    ></input>
                                </div>
                                
                            </div>
                            <div className="bg-white rouded-lg w-full space-y-1 font-light rounded-lg flex flex-row space-x-4">
                                <img
                                    src="https://veo.com.vn/wp-content/uploads/2020/03/MCC2-740x490.jpeg"
                                    className="h-[152px] w-[240px] rounded-l-lg "
                                />
                                <div className="flex flex-col justify-center ">
                                    <h1 className="font-bold">DU LỊCH TÌNH NGUYỆN VÂN HỒ –SƠN LA</h1>
                                    <div className="flex flex-row">
                                        <p>Khởi hành gần nhất</p>
                                        <p>: 04-11-2023</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p>Nơi khởi hành</p>
                                        <p>: Hà Nội</p>
                                    </div>
                                    <p>2 ngày 1 đêm</p>
                                    <div className="flex flex-row">
                                        <p>Tổng chi phí</p>
                                        <p>: 1,490,000đ</p>
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-center">
                                <button className="transition ease-in-out delay-150 bg-[#346344] hover:-translate-y-1 hover:scale-110 duration-300 text-[#ffffff] text-2xl rounded-lg h-[42px] w-[140px]">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleOnClose} className="text-xl font-semibold text-black absolute inset-0 h-[40px] w-[40px] mx-[1156px] mt-[16px] rounded-lg "> X </button>
            </div>
        </div>

    )
}