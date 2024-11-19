import Data from "./Data";
import Image from "./Image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowCircleLeft,
  faSearch,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imagesUrl1 from "../assets/peb.png";
import imagesUrl2 from "../assets/prak1.png";
import imagesUrl3 from "../assets/jp.png";
import imagesUrl4 from "../assets/korea.png";
import imagesUrl5 from "../assets/pablo.jpg";
import imagesUrl6 from "../assets/sano.jpg";
import imagesUrl7 from "../assets/teylor.jpg";
import imagesUrl8 from "../assets/sidone.jpg";
import imagesUrl9 from "../assets/bunpachan.jpg";
import imagesUrl10 from "../assets/cristion.jpg";
// ======================>
import tShord1 from "../assets/t1.jpg";
import tShord2 from "../assets/t2.jpg";
import tShord3 from "../assets/t3.jpg";
import tShord4 from "../assets/t4.jpg";

// ======
import preah from "../assets/preah.png";

const Main = () => {
  const data = [
    {
      id: 1,
      images: imagesUrl1,
      name: "Pep Muñoz",
      age: 52,
      position: "Coaching",
      price: "92",
    },
    {
      id: 2,
      images: imagesUrl2,
      name: "Prakmoni udom",
      age: 36,
      position: "Legend",
      price: "89",
    },
    {
      id: 3,
      images: imagesUrl3,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
    {
      id: 4,
      images: imagesUrl4,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
    {
      id: 5,
      images: imagesUrl5,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
    {
      id: 6,
      images: imagesUrl6,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
    {
      id: 7,
      images: imagesUrl7,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
    {
      id: 8,
      images: imagesUrl8,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
    {
      id: 9,
      images: imagesUrl9,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
    {
      id: 10,
      images: imagesUrl10,
      name: "Liones messei",
      age: 36,
      position: "key players of Enter maiami",
      price: "80",
    },
  ];
  ///===================
  const images = [
    { id: 1, images: tShord1, price: "$35" },
    { id: 2, images: tShord4, price: "$17" },
    { id: 3, images: tShord2, price: "$15" },
    { id: 4, images: tShord4, price: "$23" },
    { id: 5, images: tShord2, price: "$15" },
    { id: 6, images: tShord4, price: "$23" },
    { id: 7, images: tShord2, price: "$15" },
    { id: 8, images: tShord4, price: "$23" },
  ];
  //=================SideLeft===================>
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };
  //=======================SideRight=============>
  const [sideRightVisible, setSideRightVisible] = useState(false);
  const showSideRight = () => {
    setSideRightVisible(true);
  };

  const hideSideRight = () => {
    setSideRightVisible(false);
  };
  return (
    <>
      <nav className="flex bg-whiteColor  shadow sticky top-0 z-10">
        <div className="flex w-full justify-between items-center px-5 py-2">
          {/* ========================Bar ansd Getstart================================== */}
          <div className="flex items-center">
            <div>
              <button
                onClick={showSidebar}
                type="button"
                className="items-center  ms-3 text-sm text-gray-800 px-3 py-1 hover:bg-indigo-200  hover:text-blue-600 rounded transition ease-out duration-1000"
              >
                <span className="text-2xl">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </button>
            </div>
            <div>
              <span className=" text-2xl font-medium flex-nowrap uppercase hover:text-blue-500 cursor-pointer">
                Home
              </span>
            </div>
          </div>
          {/* ============================Btn Search================================= */}

          <div className="flex w-400 mx-2 overflow-hidden bg-white  justify-center border-borderWidth border-gray-300 shadow">
            <div className="flex w-full items-center">
              <span className="px-2 text-gray-500">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <form action="search" className="w-full ">
                <input
                  type="search"
                  placeholder="Search..."
                  className=" w-full px-2 py-1 outline-none bg-transparent"
                />
              </form>
            </div>
            <div className="flex items-center  px-2  bg-yellow-300 ">
              <span className=" text-gray-50 cursor-pointer font-medium pb-[3px] ">
                Serch
              </span>
            </div>
          </div>
          {/* ================================List of nav======================================== */}

          <div className="md:mr-10">
            <button
              onClick={showSideRight}
              className="py-1 px-2 md:hidden bg-indigo-50 hover:bg-indigo-100 rounded transition ease-out duration-200"
            >
              <span className="text-xl text-indigo-500">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </span>
            </button>
            <ul className="gap-x-6 hidden md:flex items-center">
              <li className="cursor-pointer hover:text-indigo-500">
                Categories
              </li>
              <li className="cursor-pointer hover:text-indigo-500">Tickets</li>
              <li className="cursor-pointer hover:text-indigo-500">Product</li>
              <li className="cursor-pointer hover:text-indigo-500">Shop</li>
              <li>
                <button className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-md border-2 border-indigo-500">
                  Sign in
                </button>
              </li>
            </ul>
          </div>
          {/* =======================AsideRight=================================================== */}
        </div>
        {sideRightVisible && (
          <aside className=" h-screen w-64  bg-white absolute right-0 shadow ">
            <ul className="m-3 w-11/12  font-medium">
              <li>
                <button
                  onClick={hideSideRight}
                  className="p-1 w-full text-start bg-indigo-500 rounded "
                >
                  <span className="text-xl text-gray-100">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </span>
                </button>
              </li>
              <li className="pt-2 mt-3 ml-3 p-2 text-gray-600 hover:text-indigo-500  hover:bg-indigo-50 cursor-pointer rounded transition ease-out duration-500">
                Categeries
              </li>
              <li className="pt-2 mt-2 ml-3  p-2  text-gray-600 hover:text-indigo-500  hover:bg-indigo-50 cursor-pointer rounded transition ease-out duration-500 ">
                Tickets
              </li>
              <li className="pt-2 mt-2 ml-3  p-2  text-gray-600 hover:text-indigo-500  hover:bg-indigo-50 cursor-pointer rounded transition ease-out duration-500 ">
                Product
              </li>
              <li className="pt-2 mt-2 ml-3  p-2  text-gray-600 hover:text-indigo-500  hover:bg-indigo-50 cursor-pointer rounded transition ease-out duration-500 ">
                Shop
              </li>
              <li>
                <button className="bg-white w-full text-indigo-600 font-semibold py-2 px-4 rounded-md border-2 border-indigo-500">
                  Sign in
                </button>
              </li>
            </ul>
          </aside>
        )}
      </nav>
      {/*=================Asideleft============== */}
      {sidebarVisible && (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0">
          <div className="h-full px-3 py-4   dark:bg-white">
            <a href="#" className="flex items-center  ps-2.5 mb-5 ">
              <img
                src={preah}
                width={36}
                height={36}
                className=" me-3"
                alt="001"
              />
              <span className="self-center text-xl font-semibold dark:text-gray-600 hover:text-blue-500 ">
                Home
              </span>
              <button className="text-end w-full">
                <span
                  onClick={hideSidebar}
                  className="dark:text-indigo-500  text-2xl px-3 py-2 hover:bg-indigo-200  hover:text-blue-600 rounded transition ease-out duration-1000"
                >
                  <FontAwesomeIcon icon={faArrowCircleLeft} />
                </span>
              </button>
            </a>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:text-indigo-500  hover:bg-indigo-50 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-indigo-400 group-hover:text-gray-900 dark:group-hover:text-indigo-500"
                    fill="currentColor"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:text-indigo-500  hover:bg-indigo-50  group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-indigo-400 group-hover:text-gray-900 dark:group-hover:text-indigo-500"
                    fill="currentColor"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:text-indigo-500">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:text-indigo-500 hover:bg-indigo-50 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 rounded-full bg-gray-100  dark:text-blue-500">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:text-indigo-500  hover:bg-indigo-50 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-indigo-400 group-hover:text-gray-900 dark:group-hover:text-indigo-500"
                    fill="currentColor"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:text-indigo-500  hover:bg-indigo-50 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-indigo-400 group-hover:text-gray-900 dark:group-hover:text-indigo-500"
                    fill="currentColor"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:text-indigo-500  hover:bg-indigo-50 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-indigo-400 group-hover:text-gray-900 dark:group-hover:text-indigo-500"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <Link to="/Navbar">
                  <div className="flex items-center p-2 text-gray-900 rounded-lg hover:text-indigo-500  hover:bg-indigo-50 group">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-indigo-400 group-hover:text-gray-900 dark:group-hover:text-indigo-500"
                      fill="currentColor"
                    >
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                      <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
      {/* ================Grid Product=========== */}
      <div className="p-4">
        <div className="p-4 rounded-lg dark:border-gray-700">
          {/* =====================box1============================= */}
          <div className="grid md:grid-cols-5 grid-cols-2 w-full  justify-center gap-3 mb-4">
            {data.map((items) => {
              return <Data {...items} key={items.id} />;
            })}
          </div>
          {/* ==========================box2========================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4 justify-center">
            {images.map((img) => {
              return <Image {...img} key={img.id} />;
            })}
          </div>
          {/* ==========================box3========================== */}
          {/* <div className="grid md:grid-cols-3 grid-cols-2 w-full justify-center gap-3 mb-4">
            {data.map((items) => {
              return <Data {...items} key={items.id} />;
            })}
          </div> */}
          {/* ==========================box4=========================== */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4 justify-center">
            {images.map((img) => {
              return <Image {...img} key={img.id} />;
            })}
          </div>
          {/* ========================box5============================== */}

          <div className="grid md:grid-cols-5 grid-cols-2 w-full  justify-center gap-3 mb-4">
            {data.map((items) => {
              return <Data {...items} key={items.id} />;
            })}
          </div>
        </div>
      </div>
      {/* ==================================================== */}
      <footer className="flex flex-col items-center justify-center mb-11 px-5">
        <h1 className="font-semibold text-3xl text-blue-700">
          Preah Khan Reach Svay Rieng FC
        </h1>
        <div className="grid grid-cols-4 gap-x-5 mt-3">
          <span className="font-semibold">Foothball</span>
          <span className="font-semibold">The Club</span>
          <span className="font-semibold">The Legend</span>
          <span className="font-semibold">Team</span>
        </div>
      </footer>
    </>
  );
};
export default Main;
