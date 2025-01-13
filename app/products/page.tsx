import Image from "next/image";
import Link from "next/link";

type datasType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // rating: {
  //   rate: number;
  //   count: number;
  // };
};

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to get products !");
  }
  return res.json();
}

export default async function ProductsPage() {
  const data = await getProducts();
  return (
    <main>
      <div className="py-12 sm:py-16 lg:py-20 bg-white min-h-screen">
        <div className="mx-auto max-w-screen-xl sm:py-6 lg:py-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="max-w-md text-center text-2xl text-black font-bold font-serif contrast-50">
              All Products{" "}
            </h1>
          </div>
          {/* Products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {data.map((product: datasType) => (
              <div
                key={product.id}
                className="relative flex flex-col justify-center items-center overflow-hidden p-6 border bg-white text-black shadow-xl rounded-lg mx-auto"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
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
                    <p className="mr-3 text-sm text-gray-500">
                      ${product.price}
                    </p>
                  </div>
                  <h2 className="font-bold font-serif text-sm">{product.title}</h2>
                </div>
                <button className="btn btn-primary w-full font-bold text-base text-white my-2 overflow-hidden">
                  <Link href="/products">Details</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
