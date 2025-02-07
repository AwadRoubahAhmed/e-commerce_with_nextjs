import { DataType } from "@/app/appTypes";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export type paramsType = {
  params: {
    id: string;
  };
};

async function getProducts({ params }: paramsType) {
  console.log(params);
  const res = await fetch(`http://fakestoreapi.com/products/${params.id}`);

  if (!res.ok) {
    throw new Error("Failed to get products !");
  }
  return res.json();
}

async function getProductsDetails({ params }: paramsType) {
  const data: DataType = await getProducts({ params });

  // Check if product id is valid (between 1 and 20)
  if (parseInt(params.id) > 20) {
    notFound();
  }

  return (
    <div className="relative min-h-screen flex items-center bg-white p-5 lg:p-10 overflow-hidden ">
      {data && (
        <div
          key={data.id}
          className="relative flex flex-col justify-center items-center overflow-hidden p-6 border bg-white text-black shadow-xl rounded-lg mx-auto mt-12"
        >
          <div className="aspect-square overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              width={200}
              height={200}
              className="w-full h-full object-fill"
            />
          </div>
          {/* sale */}
          <div className="absolute right-0 top-2 bg-white rounded-full">
            <p className=" bg-emerald-600 rounded-full p-1 sm:p-1.5 md:p-2 text-white text-[12px] tracking-wide uppercase font-mono">
              Sale
            </p>
          </div>
          <div className="my-2 mx-auto flex flex-col w-10/12 items-start justify-between">
            <div className="mb-2 flex">
              <p className="mr-3 text-sm text-red-500">${data.price}</p>
            </div>
            <h2 className="font-bold font-serif text-sm">{data.title}</h2>
            <div className="text-gray-700 my-2">
              <p>
                {data.description.length > 100
                  ? `${data.description.slice(0, 100)}...`
                  : data.description}
              </p>
            </div>
            <div>
              <p>Rate: {data.rating.rate}</p>
            </div>
            <div>
              <p>Count: {data.rating.count}</p>
            </div>
          </div>
          <button className="btn btn-primary w-full font-bold text-base text-white my-2 overflow-hidden">
            <div>
              <Link href={`../header/connection ${data.id}`}>Add</Link>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
export default getProductsDetails;
