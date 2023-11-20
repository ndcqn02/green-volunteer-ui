import { ChartPieIcon } from "@heroicons/react/24/outline";
import Header from "../../../component/header/header";
import Footer from "../../../component/footer/footer"
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    title: "Chia sẻ hoàn cảnh khó khăn cùng chúng tôi",
    href: "#",
    description:
      "Vào ngày 28 và 29/10 vừa qua, V.E.O đã cùng Quý phụ huynh và các em học sinh trường Tiểu học Vinschool tổ chức chuyến…",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More posts...
];

export default function about() {
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

      <div className=" w-full h-[500px]">
        <div className=" max-w-7xl h-[400px] m-auto mt-4 flex">
          <div className="">
            <div className="w-[500px] ml-11 mt-11 mr-11">
              <Image src="https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg" alt="" width={500} height={500} />
              <p className="">Tháng 11 đồng hành cùng chúng tôi</p>
              <p>
                Trong sự kiện tháng 10 này chúng tôi tổ chức rất nhiều hoạt động
                liên quan đến môi trường
              </p>
            </div>
          </div>
          <div className="ml-5 flex justify-around flex-col">
            <div className="bg-gray-100 flex rounded-lg p-4">
              <Image
                className="h-12 w-auto "
                src="https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg"
                alt=""
                height={500}
                width={500}
              />
              <div className="ml-2">
                <p className="">Chia sẻ hoàn cảnh khó khăn cùng chúng tôi</p>
                <p className="text-sm">
                  Cùng với sự hát triển của quỹ, mong rằng chúng ta có thể vươn
                  rộng....
                </p>
              </div>
            </div>

            <div className="bg-gray-100 flex rounded-lg p-4">
              <Image
                className="h-12 w-auto"
                src="https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg"
                alt=""
                height={500}
                width={500}
              />
              <div className="ml-2">
                <p className="">Chia sẻ hoàn cảnh khó khăn cùng chúng tôi</p>
                <p className="text-sm">
                  Cùng với sự hát triển của quỹ, mong rằng chúng ta có thể vươn
                  rộng....
                </p>
              </div>
            </div>

            <div className="bg-gray-100 flex rounded-lg p-4">
              <Image
                className="h-12 w-auto"
                src="https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg"
                alt=""
                height={100}
                width={300}
              />
              <div className="ml-2">
                <p className="">Chia sẻ hoàn cảnh khó khăn cùng chúng tôi</p>
                <p className="text-sm">
                  Cùng với sự hát triển của quỹ, mong rằng chúng ta có thể vươn
                  rộng....
                </p>
              </div>
            </div>

            <div className="bg-gray-100 flex rounded-lg p-4">
              <Image
                className="h-12 w-auto"
                src="https://lawnet.vn/uploads/image/2023/05/04/042507347.jpg"
                alt=""
                height={500}
                width={500}
              />
              <div className="ml-2">
                <p className="">Chia sẻ hoàn cảnh khó khăn cùng chúng tôi</p>
                <p className="text-sm">
                  Cùng với sự hát triển của quỹ, mong rằng chúng ta có thể vươn
                  rộng....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tin nổi bật
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-4 gap-x-8  border-t border-gray-200 pt-10   lg:max-w-none lg:grid-cols-4">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start"
              >
                <Image
                  src={post.image}
                  className="object-cover object-center lg:h-1/3 lg:w-full"
                  alt=""
                  height={500}
                  width={500}
                />
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/pages/detailPost/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl m-auto">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
    </>
  );
}
