import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import coding from "../assets/coding.jpg";
import google from "../assets/google.256x256.png";
import facebook from "../assets/facebook.256x256.png";
import linkin from "../assets/linkedin.256x256.png";
import github from "../assets/github-fill.256x250.png";
import apple from "../assets/apple.215x256.png";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };
  return (
    <>
      <nav className="bg-white h-20  shadow-md">
        <div className="flex  items-center h-full lg:justify-between">
          <ul className="flex w-full">
            <li className="mr-auto lg:mr-0">
              <a href="#" className="flex items-center h-12 pl-4 text-black">
                <img src={coding} alt="001" width="128px" />
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className="flex items-center h-12 px-4 text-black hover:text-blue-600"
              ></a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className="flex items-center h-12 px-4 text-black hover:text-blue-600"
              >
                Resources
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className="flex items-center h-12 px-4 text-black hover:text-blue-600"
              >
                Community
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className="flex items-center h-12 px-4 text-black hover:text-blue-600"
              >
                Pricing
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className="flex items-center h-12 px-4 text-black hover:text-blue-600"
              >
                Career centers
                <span className="ml-1">
                  <sup className="items-center  text-sm bg-yellow-400 rounded-full px-2 p-py1">
                    New
                  </sup>
                </span>
              </a>
            </li>
            <li className="hidden lg:block">
              <a
                href="#"
                className="flex items-center h-12 px-4 text-black hover:text-blue-600"
              >
                For teams
              </a>
            </li>
            <li className="flex items-center lg:hidden">
              <span className="text-center">
                <a
                  className="flex  font-medium text-lg px-3 py-1 pb-2 hover:bg-indigo-200 text-gray-500 hover:text-blue-600 rounded transition ease-out duration-1000"
                  href="#"
                >
                  Login
                </a>
              </span>
              <button
                onClick={showSidebar}
                className="flex items-center h-12 px-4 mr-5 "
              >
                <span className="flex  text-2xl px-3 py-2 hover:bg-indigo-200 text-gray-500 hover:text-blue-600 rounded transition ease-out duration-1000">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </button>
            </li>
          </ul>
          <ul className="pr-10 hidden lg:flex gap-x-10 items-center">
            <li>
              <a
                className="flex items-center px-2 py-1 hover:bg-indigo-200 text-gray-500 hover:text-blue-600 rounded transition ease-out duration-1000"
                href="#"
              >
                <span className="text-2xl">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex  font-medium text-lg px-3 py-1 pb-2 hover:bg-indigo-200 text-gray-500 hover:text-blue-600 rounded transition ease-out duration-1000"
                href="#"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
        {/* ============================ */}
        {sidebarVisible && (
          <ul className="fixed top-0 right-0 h-full w-64 bg-white bg-opacity-40 backdrop-blur-md shadow-lg list-none flex flex-col items-start p-4">
            <li className="w-full">
              <button
                onClick={hideSidebar}
                className="flex font-medium text-lg w-full px-2  py-2 hover:bg-indigo-200 text-gray-500 hover:text-blue-600 rounded transition ease-out duration-1000"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowCircleRight} />
                </span>
              </button>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center w-full h-12 px-6 text-black hover:bg-gray-200 hover:text-blue-600  rounded"
              >
                Catalog
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center w-full h-12 px-6 text-black hover:bg-gray-200 hover:text-blue-600 rounded"
              >
                Resources
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center w-full h-12 px-6 text-black hover:bg-gray-200 hover:text-blue-600 rounded"
              >
                Community
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center w-full h-12 px-6 text-black hover:bg-gray-200 hover:text-blue-600 rounded"
              >
                Pricing
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center w-full h-12 px-6 text-black hover:bg-gray-200 hover:text-blue-600 rounded"
              >
                Career Centers
                <span className="ml-1">
                  <sup className="items-center  text-sm bg-yellow-400 rounded-full px-2 p-py1">
                    New
                  </sup>
                </span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="flex items-center w-full h-12 px-6 text-black hover:bg-gray-200 hover:text-blue-600 rounded"
              >
                For teams
              </a>
            </li>
          </ul>
        )}
      </nav>
      <header className="flex justify-center mt-24">
        <main className="flex w-full  justify-center">
          <form action="sign_in" className=" w-96 px-5">
            <h1 className="text-2xl font-bold mb-4">Login To CodeCambodia</h1>
            <label>* Requiretment</label>
            <div>
              <labe>Email *</labe> <br />
              <input
                type="email"
                name="email"
                className="rounded-sm w-full h-12 p-3 pb-4 mt-2 outline-none border-borderWidth border-blue-500"
              />
            </div>
            <div>
              <labe>passwords *</labe> <br />
              <input
                type="passwords"
                name="email"
                className="rounded-sm w-full h-12 p-3 pb-4 mt-2 outline-none border-borderWidth border-blue-500"
              />
              <p className="text-xs mt-1">Please enter a valid email address</p>
            </div>
            <button
              type="submite"
              className="bg-blue-700 text-base text-whiteColor font-bold py-2 mt-5 w-full rounded"
            >
              Sigin
            </button>
            <p className="mt-4 mb-2">
              By signing up for Codecambodia You agree to Codecambodia
            </p>
            <h1 className="font-medium">Or sign up using</h1>
            <div className="flex  justify-between mt-3 mb-5">
              <a
                className="flex items-center justify-center w-16 h-12 bg-white border-borderWidth border-gray-600 object-cover overflow-hidden "
                href="#"
              >
                <img src={google} alt="002" width="70%" height="50%" />
              </a>
              <a
                className="flex items-center justify-center w-16 h-12 bg-white border-borderWidth border-gray-600 object-cover overflow-hidden "
                href="#"
              >
                <img src={facebook} alt="002" width="50%" height="50%" />
              </a>
              <a
                className="flex items-center justify-center w-16 h-12 bg-white border-borderWidth border-gray-600 object-cover overflow-hidden "
                href="#"
              >
                <img src={linkin} alt="002" width="50%" height="50%" />
              </a>
              <a
                className="flex items-center justify-center w-16 h-12 bg-white border-borderWidth border-gray-600 object-cover overflow-hidden "
                href="#"
              >
                <img src={github} alt="002" width="50%" height="50%" />
              </a>
              <a
                className="flex items-center justify-center w-16 h-12 bg-white border-borderWidth border-gray-600 object-cover overflow-hidden "
                href="#"
              >
                <img src={apple} alt="002" width="50%" height="50%" />
              </a>
            </div>

            <p>Already have an acount</p>
          </form>
        </main>
      </header>
      <footer className="blok  justify-center items-center">
        <div className="w-full  border-t border-gray-800 my-5"></div>
        <div className="md:flex justify-evenly mx-10">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 ">
            <div className="w-45">
              <h2 className="font-bold">Company</h2>
              <ul className="my-3">
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-45">
              <h2 className="font-bold">Resources</h2>
              <ul className="my-3">
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    Artivles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    Scrips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    Videos
                  </a>
                </li>
              </ul>
              <h2 className="font-bold">Suport</h2>
            </div>
            <div className="w-45 ">
              <h2 className="font-bold">Plans</h2>
              <ul className="my-3">
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    For individuals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    For students
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    For teams
                  </a>
                </li>
              </ul>
              <h2 className="font-bold">Comunity</h2>
            </div>
          </div>
          <div className="h-auto border-r hidden md:flex border-gray-800 mx-3"></div>
          <div className="w-full border-t block md:hidden border-gray-800 mt-10 mb-5 "></div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-2 ml-5">
            <div className="w-45 ">
              <h2 className="font-bold">Subjects</h2>
              <ul className="my-3">
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    Database
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    System enginering
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-45 ">
              <h2 className="font-bold">Languages</h2>
              <ul className="my-3">
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    html
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    css
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    javascipt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    c++
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    python
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    java
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    tailwidcss
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    react js
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    vue js
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    sql
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    microsoft word
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    microsoft excell
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-45 ">
              <h2 className="font-bold">Carees building</h2>
              <ul className="my-3">
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    career paths
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    career center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 rounded">
                    interview prep
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-11/12 border-t border-gray-800 mt-10 "></div>
          <div className="flex w-11/12 items-center justify-between my-5">
            <h1>Thank you</h1>
            <h1>Thank you</h1>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Navbar;
