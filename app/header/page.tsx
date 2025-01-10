import Image from "next/image";
import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <div className="container">
      <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 text-white ">
        {/* Left */}
        <div>
          <Link href="/">
          <Image src="" alt=""/>
          </Link>
        </div>
        <div className="flex ">
          {/* Center */}
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
        <div>
          {/* Rigth */}
          <button className="btn btn-primary text-white p-2 rounded-md">
            Login/Sing Up
          </button>
        </div>
      </nav>
    </div>
  );
}
