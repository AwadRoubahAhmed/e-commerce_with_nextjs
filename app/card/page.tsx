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
    quantity,
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
    <div className="w-[100vw] bg-black bg-opacity-50 sticky right-0 top-0 z-10">
      <div
        className="container relative w-[500px] h-fit text-gray-800
       float-right px-[40px] py-[50px] shadow-lg"
      >
        <button type="button" className="">
          <AiOutlineLeft
            onClick={handleClose}
            className="w-6 h-6 text-gray-100 absolute left-3 top-3"
          />
          <h2 className="text-lg font-bold font-mono text-gray-100/90">
            Cart Shopping {totalQuantity} item(s)
          </h2>
        </button>
        <div className="flex flex-col space-y-2 border-2 bg-gray-100 rounded-md p-6 my-4 shadow-xl">
          <span className="flex justify-end items-center text-gray-800 text-xl font-bold">
            Total Price: {totalPrice}$
          </span>
          <div className="flex flex-col space-y-2">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="flex items-center border-b-2 mb-2 space-x-2"
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
                <div className="w-full flex flex-col items-center my-4 mx-auto">
                  <div>
                    <button
                      onClick={incrementQuantity}
                      className="w-16 bg-blue-500 text-lg text-gray-100 text-center rounded-md"
                    >
                      +
                    </button>
                    <span className="mx-2 text-lg">{product.quantity}</span>
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

{
  /* 
  <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here 
          <div className="card-body">
            <span className="text-xl font-bold text-gray-100/90 mb-3">0 Items</span>
            <span className="text-info mb-3">Subtotal: $0</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div> 
      */
}
