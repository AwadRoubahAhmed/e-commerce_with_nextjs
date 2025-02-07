"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { User } from "lucide-react";
import { ContextProvider } from "../context/Context";

export default function HeaderNavigation() {
  return (
    <ContextProvider>
      <header className="w-full h-16 sticky top-0 z-50 bg-white border-b-2 shadow-2xl ">
        <nav className="container flex sm:flex-wrap justify-between items-center p-2  ">
          {/* Left */}
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="dark:bg-white rounded-full mx-auto"
              />
            </Link>
          </div>
          {/* Center */}
          <div className="flex">
            <ul className="flex space-x-5">
              <li>
                <Link
                  href="/"
                  className="text-gray-800 text-lg hover:text-blue-400  font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-800 text-lg hover:text-blue-400  font-bold"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
          {/* Rigth */}
          <div>
            <button className="btn btn-primary w-28 text-white p-1 rounded-md">
              <Link
                href="/header/connection"
                className="flex justify-center items-center text-base"
              >
                Login <User />
              </Link>
            </button>
          </div>
        </nav>
      </header>
    </ContextProvider>
  );
}
