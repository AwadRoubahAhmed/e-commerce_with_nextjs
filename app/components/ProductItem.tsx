"use client";

import Image from "next/image";
import { DataType } from "../types";
import Link from "next/link";
import { useFilter } from "../context/Context";

type ProductItemProps = {
  data: DataType;
};

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  // States;
  const { cartItems, addProductToCart, quantity } = useFilter();
  console.log(cartItems);

  // Comportement;
  //   const addProductToCart = (data: DataType) => {
  //     // Add product to cart logic here

  //     // 1. Copy du State;
  //     const newCartItems = [...cartItems];

  //     // 2. Ajout du produit à la nouvelle liste => Update du copy du state;
  //     newCartItems.push({ ...data, quantity: 1 });

  //     // 3. Mise à jour du State;
  //     setCartItems(newCartItems);
  //     //setCartItems([...cartItems, { ...data }]);
  //   };

  // Affichage(render);
  return (
    <div className="mx-auto">
      <div className="relative h-dvh flex flex-col justify-center items-center overflow-hidden p-6 border bg-white text-gray-800 shadow-xl rounded-lg mx-auto">
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
            <p className="mr-3 text-md font-bold text-red-500">${data.price}</p>
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
        <button
          onClick={() => addProductToCart(data, quantity)}
          className="btn btn-primary w-full font-bold text-base text-white my-2 overflow-hidden"
        >
          <div>
            <Link href="">Add to cart</Link>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
