import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { User } from "lucide-react";

export default function HeaderNavigation() {
  return (
    <div className="container max-w-full">
      <nav className="w-full h-20 flex justify-between items-center p-6 bg-white dark:bg-gray-800 text-white shadow-slate-950">
        {/* Left */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={70}
              height={70}
              className="bg-white dark:bg-gray-400 rounded-full mx-auto"
            />
          </Link>
        </div>
        {/* Center */}
        <div className="flex ">
          <ul className="flex space-x-5">
            <li>
              <Link
                href="/"
                className="text-gray-300 text-base hover:text-gray-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-300 text-base hover:text-gray-500"
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
    </div>
  );
}
