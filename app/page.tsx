import Link from "next/link";
import Image from "next/image";
import banner from "../public/shop-store.jpg";

export default function Home() {
  return (
    <main className="container w-full min-h-screen mx-auto bg-white pt-8 ">
      <div className="container flex flex-wrap p-8 mx-auto">
        {/* Left Side */}
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl text-gray-800 font-extrabold leading-snug tracking-tight lg:tracking-tight xl:text-6xl">
              Hello buy or sell something !
            </h1>
            <p className="text-xl text-gray-500 lg:text-xl xl:text-2xl leading-normal py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              cupiditate magnam? Nesciunt, odit. Sit voluptate rerum tenetur
              beatae ducimus cumque rem tempora quisquam voluptatem nemo
              aliquid, id iusto accusantium non sed totam enim fugit a,
              recusandae vel fugiat temporibus quasi culpa? Dolorem qui
              obcaecati minima est veritatis vel excepturi assumenda. Nemo
              aliquid, id iusto accusantium non sed totam enim fugit a,
              recusandae vel fugiat temporibus quasi culpa? Dolorem qui
              obcaecati minima est veritatis vel excepturi assumenda.
            </p>
            {/* Button Left Side */}
            <div>
              <Link
                href="products"
                className="w-52 btn btn-primary text-white p-2 rounded-md"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
        {/* Rigth Side Image */}
        <div className="flex items-center w-full lg:w-1/2">
          <div>
            <Image src={banner} alt="Shop-store" width={600} height={600} />
          </div>
        </div>
      </div>
    </main>
  );
}
