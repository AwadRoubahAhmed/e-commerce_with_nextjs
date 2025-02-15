"use client";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useFilter } from "../context/Context";

const CardSideBar = () => {
  // State;
  const { showCart, setShowCart } = useFilter();

  // Comportement;
  const handleClickShowCart = () => setShowCart(!showCart);

  // Affichage(render);
  return (
    <div className="w-[100vw] bg-black bg-opacity-50 sticky right-0 top-0 z-10">
      <div className="container relative border border-black w-[500px] h-screen bg-white float-right px-[40px] py-[50px]">
        <button onClick={handleClickShowCart} className="">
          <AiOutlineLeft className="w-6 h-6 text-gray-800 absolute left-3 top-3" />
          <span className="text-lg text-gray-700 font-bold">Cart is empty</span>
        </button>
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
