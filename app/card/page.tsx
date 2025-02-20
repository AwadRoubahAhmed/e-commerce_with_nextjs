"use client";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useFilter } from "../context/Context";
import Image from "next/image";

const CardSideBar = () => {
  // State;
  const {
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    totalQuantity,
    totalPrice,
    incrementQuantity,
    decrementQuantity,
  } = useFilter();

  // Comportement;
  const handleClose = () => {
    console.log("handle back icon clicked !");
    setShowCart(!showCart);
  };

  const handleDelete = (itemId: string) => {
    console.log("handle delete icon clicked!");
    // TODO: Delete item from cartItems;

    // 1. Copie du State;
    const newCartItems = [...cartItems];

    // 2. Suppression de l'item;
    // Méthode 1.
    const newCartItemsUpdated = newCartItems.filter(
      (item) => item.id !== itemId
    );
    // Méthode 2.
    // newCartItems.splice(
    //   newCartItems.findIndex((item) => item.id === itemId),
    //   1
    // );

    // 3. Mise à jour du State;
    setCartItems(newCartItemsUpdated);
  };
  // Affichage(render);
  return (
    <div className="absolute top-20 right-0 bg-slate-950 bg-opacity-80 z-10 rounded-md">
      <div className=" w-[500px] h-fit text-gray-800 px-[40px] py-[50px] shadow-lg float-right">
        <button type="button" className="">
          <AiOutlineLeft
            onClick={handleClose}
            className="w-6 h-6 text-gray-100 absolute left-3 top-3"
          />
          <h2 className="text-lg font-bold font-mono text-gray-100/90">
            Cart Shopping {totalQuantity} item(s)
          </h2>
        </button>
        <div className="flex flex-col space-y-3 bg-gray-400 rounded-md p-6 my-4 shadow-xl">
          <span className="text-center text-gray-800 text-xl font-bold">
            Total Price: {totalPrice}$
          </span>
          <div className="flex flex-col space-y-2">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="bg-slate-100/90 flex justify-center items-center border-b-2 mb-6 space-x-2 p-3 rounded-md"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="aspect-square overflow-hidden rounded-full mb-3"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800 mb-3">
                    {product.title}
                  </span>
                  <span className="text-sm text-gray-800 font-semibold">
                    {product.quantity} x ${product.price}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center my-4 mx-auto">
                  <div className="">
                    <button
                      onClick={incrementQuantity}
                      className="w-16 bg-blue-500 text-lg text-gray-100 text-center rounded-md"
                    >
                      +
                    </button>
                    <span className="ml-7 text-lg">{product.quantity}</span>
                    <button
                      onClick={decrementQuantity}
                      className="w-16 bg-red-500 text-lg text-gray-100 text-center rounded-md"
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-sm btn-danger w-full text-gray-100 mt-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSideBar;
