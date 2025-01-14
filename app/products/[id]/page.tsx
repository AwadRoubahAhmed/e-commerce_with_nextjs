import Image from "next/image";
import { dataType } from "../page";
import Link from "next/link";

type paramsType = {
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
  const data: dataType = await getProducts({ params });

  return (
    <div className="relative h-screen flex items-center bg-white p-5 lg:p-10 overflow-hidden ">
      {data && (
        <div className="relative w-full max-w-6xl text-gray-800 rounded shadow-2xl bg-white p-10 lg:p-20 mx-auto">
          <div>
            <div>
              <Image
                src={data.image}
                alt=""
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-bold font-serif text-sm"> {data.title} </h2>
              <p className="mr-3 text-sm text-gray-500">{data.description}</p>
            </div>
            <div>
              <div>
                <span>${data.price}</span>
              </div>
            </div>
            <button className="btn btn-primary w-full font-bold text-base text-white my-2 overflow-hidden">
              <div>
                <Link href={`/products`}>Details</Link>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default getProductsDetails;
