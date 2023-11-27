"use client";

import { ChartPieIcon } from "@heroicons/react/24/outline";
import Header from "../header/header";
import Footer from "../footer/footer";
import Image from "next/image";
import { Breadcrumbs } from "@material-tailwind/react";

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
export default function DetailPost() {
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
          src: "https://cdnImage.vietnamplus.vn/t1200/Uploaded/ngtmbh/2021_09_05/ttxvn_thanh_nien_hn_phong_chong_dich.jpg",
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

      <div className=" max-w-7xl m-auto mt-6 text-sm breadcrumbs">
        <ul>
          <li>
            <a>Trang chủ</a>
          </li>
          <li>
            <a href="/pages/post">Bài viết</a>
          </li>
          <li>Khám phá đỉnh Phanxipang</li>
        </ul>
      </div>

      <section className=" max-w-4xl m-auto">
        <h1 className="mt-5 font-bold text-xl mb-5">
          [V.E.O x Vinschool] Hành trình kết nối thế hệ trẻ
        </h1>

        <i className=" font-semibold text-sm">
          Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em
          học sinh trường Tiểu học Vinschool tổ chức chuyến du lịch tình nguyện
          tới điểm dự án Bản Cỏi – Phú Thọ với mục tiêu mở rộng kiến thức và
          cung cấp trải nghiệm thực tế về đời sống, văn hóa, cũng như khuyến
          khích tinh thần xã hội và tình nguyện cho các em.
        </i>

        <Image
          height="450"
          width="896"
          src="https://veo.com.vn/wp-content/uploads/2023/11/tap-the-8.jpg"
          alt=""
        ></Image>

        <h1 className=" mb-3 font-bold text-2xl mt-5 ">
          Giao lưu các em nhỏ tại điểm trường Mầm non Bản Cỏi
        </h1>
        <p>
          Trong buổi sáng ngày 28/10, đoàn có dịp được ghé thăm và giao lưu với
          thầy cô và các em nhỏ tại Trường mầm non Xuân Sơn – Điểm trường Cỏi
          Lấp. Tại đây, các bạn học sinh trường Vinschool không chỉ có cơ hội
          được thử sức đứng lớp dạy học mà còn tổ chức các hoạt động vui chơi,
          sự kiện “Phiên chợ 0 đồng” và tặng quà cho các em nhỏ tại điểm trường
        </p>

        <div className="flex mt-5">
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
        </p>
      </section>

      <Footer />
    </>
  );
}
