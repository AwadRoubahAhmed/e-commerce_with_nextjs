"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { useFilter } from "../context/Context";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import CardSideBar from "../card/page";
import { User } from "lucide-react";
import { FaCartArrowDown } from "react-icons/fa6";

export default function HeaderNavigation() {
  // State;
  const { showMenu, setShowMenu, showCart, setShowCart, totalQuantity } =
    useFilter();

  // Comportement;
  const toggleMenu = () => setShowMenu(!showMenu);

  const handleClickShowCart = () => setShowCart(!showCart);

  //Affichage(render)
  return (
    <>
      <header className="w-full h-20 sticky top-0 z-50 flex sm:flex-wrap justify-between items-center p-4 bg-white border-b-2 shadow-2xl ">
        {/* container */}
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="flex justify-center items-center">
              <Image
                src={logo}
                alt="logo"
                className="dark:bg-white rounded-full mx-auto w-8 h-8"
              />
              <span className="font-bold text-xl text-gray-800">
                Shop Store <strong className="text-blue-500">.</strong>
              </span>
            </Link>
          </div>
          {/* Center Navigation Menu */}
          <div className="flex">
            <ul className="hidden md:flex justify-center items-center font-bold space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-800 text-lg hover:text-blue-400 font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-800 text-lg hover:text-blue-400 font-bold"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Rigth Side */}
          <div className="hidden md:flex justify-center items-center space-x-4">
            {/* Right Side cart*/}
            <div className="">
              <button
                onClick={handleClickShowCart}
                type="button"
                className="relative text-blue-500"
              >
                <span className="absolute top-3 right-1 text-red-700 text-base">
                  {totalQuantity}
                </span>
                <FaCartArrowDown className="w-6 h-6 hover:text-blue-400" />
              </button>
            </div>

            {/* Right Side Login */}
            <div>
              {/* <button className="btn btn-primary w-28 text-white p-1 rounded-md">
              <Link
                href="/header/connection"
                className="flex justify-center items-center text-base"
              >
                Login <User />
              </Link>
            </button> */}
              <Link
                href="/header/connection"
                className="text-blue-500 hover:text-blue-400 text-base p-1"
              >
                <User size={24} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <div
              onClick={toggleMenu}
              className="flex items-center justify-center"
            >
              {showMenu ? (
                <IoMdClose className="h-6 w-6 fill-current text-gray-800 cursor-pointer" />
              ) : (
                <IoMdMenu className="h-6 w-6 fill-current border text-gray-800 cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          onClick={toggleMenu}
          className={
            showMenu
              ? "w-[300px] h-screen md:hidden absolute right-0 top-20 bg-slate-900  bg-opacity-90 text-gray-800 text-center px-4 py-6 transition-opacity duration-300"
              : "absolute left-[-100%]"
          }
        >
          <ul className="flex flex-col space-y-3">
            <li className="mb-2">
              <Link
                href="/"
                className="w-[500px] text-gray-100/90 text-lg hover:text-blue-400 font-bold rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="w-full text-gray-100/90 text-lg hover:text-blue-400 font-bold rounded-md"
              >
                Products
              </Link>
            </li>
          </ul>

          <div className="mt-6 flex flex-col justify-around items-center space-y-5">
            {/* Right Side Login */}
            <div className="">
              <Link
                href="/header/connection"
                className="btn btn-primary w-40 text-white text-lg p-2 rounded-md"
              >
                <User />
              </Link>
            </div>
            {/* Right Side Panier*/}
            <div>
              <button
                onClick={handleClickShowCart}
                type="button"
                className="relative drawer-button btn btn-primary text-gray-100"
              >
                <FaCartArrowDown className="w-6 h-6" />
                <span className="absolute top-1 right-2 text-red-500 font-semibold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Cart Sidebar */}
        {showCart && <CardSideBar />}
      </header>
    </>
  );
}

//////////////////////////////////////////////////

//  {
//    /* Mobile Menu Icon */
//  }
//  <div className="md:hidden">
//    <div
//      onClick={toggleMenu}
//      className="flex items-center justify-center cursor-pointer"
//    >
//      {showMenu ? (
//        <IoMdClose className="h-6 w-6 fill-current text-gray-500" />
//      ) : (
//        <IoMdMenu className="h-6 w-6 fill-current border text-black-950" />
//      )}
//    </div>
//  </div>;

//  {
//    /* Mobile Menu */
//  }
//  <div
//    onClick={toggleMenu}
//    className={`md:hidden fixed top-0 inset-x-0 z-50 text-gray-800 p-2 transition-opacity duration-300 ${
//      showMenu
//        ? "w-full absolute left-0 top-0 bg-gray-200/100 text-gray-800 px-4 py-4 flex flex-col rounded-xl"
//        : "absolute left-[-100%]"

//      //"opacity-100" : "opacity-0"
//    }`}
//  >
//    <div>
//      <Link href="/">
//        <Image
//          src={logo}
//          alt="logo"
//          width={50}
//          height={50}
//          className="dark:bg-white rounded-full"
//        />
//      </Link>
//    </div>

//    <div className="w-full min-h-16 p-2 bg-gray-400 rounded-md shadow-lg absolute top-16 right-0">
//      <Link
//        href="/"
//        className="block px-4 py-2 text-lg mb-1 hover:bg-gray-200 text-gray-700 hover:text-blue-500 rounded-md"
//      >
//        Home
//      </Link>
//      <Link
//        href="/products"
//        className="block px-4 py-2 text-lg hover:bg-gray-200 text-gray-700 hover:text-blue-500 rounded-md"
//      >
//        Products
//      </Link>
//    </div>

//    <div>
//      <button className="btn btn-primary w-full text-gray-800 p-1 rounded-md">
//        <Link
//          href="/header/connection"
//          className="flex justify-center items-center text-base"
//        >
//          Login <User />
//        </Link>
//      </button>
//    </div>
//  </div>;
