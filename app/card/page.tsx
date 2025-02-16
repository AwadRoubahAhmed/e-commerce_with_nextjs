"use client";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useFilter } from "../context/Context";
import Image from "next/image";

const CardSideBar = () => {
  // State;
  const { showCart, setShowCart, cartItems } = useFilter();

  // Comportement;
  const handleClose = () => {
    console.log("handle back icon clicked !");
    setShowCart(!showCart);
  };

  // Affichage(render);
  return (
    <div className="w-[100vw] bg-black bg-opacity-50 sticky right-0 top-0 z-10">
      <div
        className="container relative border w-[500px] h-screen bg-gray-200 text-gray-800
       float-right px-[40px] py-[50px] shadow-lg"
      >
        <button type="button" className="">
          <AiOutlineLeft
            onClick={handleClose}
            className="w-6 h-6 text-gray-800 absolute left-3 top-3"
          />
          {/* <span className="text-lg text-gray-700 font-bold">Cart is empty</span> */}
        </button>
        <div className="flex flex-col w-full space-y-2 border-2 bg-gray-300 rounded-md p-6 shadow-xl">
          <h2 className="text-lg font-bold text-gray-800">Cart Shopping !</h2>
          <div className="flex flex-col space-y-2">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center space-x-2"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="aspect-square overflow-hidden rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-800">
                    {product.title}
                  </span>
                  <span className="text-sm text-gray-700">
                    {product.quantity} x ${product.price}
                  </span>
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
