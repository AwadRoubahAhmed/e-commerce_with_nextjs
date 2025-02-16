"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DataType } from "../types";

//types
type ContextPropsType = {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: number;
  setPassword: Dispatch<SetStateAction<number>>;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  cartItems: DataType[];
  setCartItems: Dispatch<SetStateAction<DataType[]>>;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  addProductToCart: (data: DataType, quantity: number) => void;
  totalQuantity: number;
  setTotalQuantity: () => void;
  totalPrice: number;
  setTotalPrice: () => void;
};

/////////////////////////////////////// 1 ////////////////////////////////////////

// 1. Création de Context;
export const Context = createContext<ContextPropsType>({
  firstName: "",
  setFirstName: () => {},
  name: "",
  setName: () => {},
  email: "",
  showCart: false,
  showMenu: false,
  setShowMenu: () => {},
  setShowCart: () => {},
  setEmail: () => {},
  password: 0,
  setPassword: () => {},
  quantity: 0,
  setQuantity: () => {},
  cartItems: [],
  setCartItems: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  addProductToCart: () => {},
  totalQuantity: 0,
  setTotalQuantity: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

/////////////////////////////////////// 2 ////////////////////////////////////////

// 2. Installations de Context(Provider);
export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Déclaration des états dans le ContextProvider et leurs initialisations.

  {
    /* States */
  }
  const [firstName, setFirstName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useState<DataType[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Comportement;
  const addProductToCart = (data: DataType, quantity: number) => {
    // Add product to cart logic here
    //...

    // Check quantity in cartItem;
    const checkProductInCart = cartItems.find((item) => item.id === data.id);
    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice((prev) => prev + data.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === data.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        } else {
          return cartProduct;
        }
      });

      setCartItems(updatedCartItems);
    } else {
      data.quantity = quantity;
      setCartItems([...cartItems, { ...data }]);
    }
  };
  const incrementQuantity = () => setQuantity(quantity + 1);
  //setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    setQuantity((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  // Définition des valeurs dans le ContextProvider.
  return (
    <Context.Provider
      value={{
        firstName,
        setFirstName,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        showCart,
        setShowCart,
        showMenu,
        setShowMenu,
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
        addProductToCart,
        totalQuantity,
        setTotalQuantity: () => {},
        totalPrice,
        setTotalPrice: () => {},
      }}
    >
      {children}
    </Context.Provider>
  );
};
/////////////////////////////////////// 3 ////////////////////////////////////////

// 3. Consommation de Context;
export const useFilter = () => {
  const filterContext = useContext(Context);
  return filterContext;
};
