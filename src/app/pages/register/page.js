"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { instance } from "../../../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(["Client"]);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isEmailValid ? "" : "Email không hợp lệ");

    const isPhoneValid = /^\d{10,11}$/.test(phone);
    setPhoneError(
      isPhoneValid ? "" : "Số điện thoại không hợp lệ, phải là số có 10 số"
    );
    const isPasswordValid = password.length >= 6;
    setPasswordError(isPasswordValid ? "" : "Mật khẩu phải có ít nhất 6 ký tự");
  }, [email, phone, password]);

  const handleRegister = async () => {
    try {
        const response = await instance.post("/auth/register", {
          email,
          phone,
          password,
          role: ["Client"],
        });
    
        if (response.status === 400) {
          setError("Email hoặc số điện thoại đã tồn tại !!");
          return;
        } else {
          window.location.href = "/pages/login";
        }

        window.location.href = "/pages/login";
      } catch (error) {
        if (error.response && error.response.status === 400) {
            setError("Email hoặc số điện thoại đã tồn tại !!");
          } else {
            // Handle other errors if needed
          }
      }
  };

  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-20 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-bold leading-6 text-gray-800"
          >
            Đăng kí tài khoản
          </p>
          <p
            tabindex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Bạn đã có tài khoản?{" "}
            <a
              href="/pages/login"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Đăng nhập
            </a>
          </p>
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
          <div className="w-full flex items-center justify-between py-5"></div>
          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            {emailError && (
              <p className="text-xs text-red-500 mt-1">{emailError}</p>
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-labelledby="email"
              type="email"
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-7"
            />
          </div>
          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Số điện thoại
            </label>
            {phoneError && (
              <p className="text-xs text-red-500 mt-1">{phoneError}</p>
            )}
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-labelledby="phone"
              type="text"
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-2"
            />
          </div>
          <div className="mt-6  w-full">
            <label
              htmlFor="pass"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Mật khẩu
            </label>
            {passwordError && (
              <p className="text-xs text-red-500 mt-1">{passwordError}</p>
            )}
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 mb-7"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              onClick={handleRegister}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Tạo tài khoản
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
