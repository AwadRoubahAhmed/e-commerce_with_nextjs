"use client";
import { FaCartArrowDown } from "react-icons/fa6";

const CartComponent: React.FC = () => {
  // State;

  // Comportement;
  //const handleClickShowCart = () => setShowCart(!showCart);

  // Affichage(render);
  return (
    <div className="drawer drawer-end">
      <div className="drawer-content">
        {/* Page content here */}
        <button
          type="button"
          className="relative drawer-button btn btn-primary text-gray-100 rounded-full"
        >
          <FaCartArrowDown className="w-6 h-6" />
          <span className="absolute top-1 right-2 text-gray-100/90">0</span>
        </button>
      </div>
    </div>
  );
};

export default CartComponent;

//////////////////////////////////////////
{
  /* 

 
  
  
  
  
  
  
  /////////////////////////////////
  // <div>
      {" "}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-primary rounded-full p-4"
        >
          <div className="indicator text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item text-gray-100">
              0
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-gray-800 z-[1] mt-3 w-52 shadow"
        >
          <div className="card-body">
            <span className="text-xl font-bold text-gray-100/90">0 Items</span>
            <span className="text-info">Subtotal: $0</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    
    ///////////////////////////////
    // 
    // <div className="flex items-center gap-2">
        <button
          onClick={toggleCartItemOpen}
          className="w-12 h-12 flex justify-center items-center p-2 rounded-full text-gray-100 bg-blue-500 hover:bg-blue-600  relative cursor-pointer"
        >
          <span
            className="absolute top-0 right-0 bg-red-500 rounded-full p-1 text-[11px] flex justify-center items-center
         w-4 h-4"
          >
            0
          </span>
          <FaCartShopping />
        </button>
      </div>
    // 
    // */
}
