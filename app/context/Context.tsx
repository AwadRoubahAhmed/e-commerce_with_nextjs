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
  incrementQuantity: Dispatch<SetStateAction<number>>;
  decrementQuantity: Dispatch<SetStateAction<number>>;
  addProductToCart: (data: DataType, quantity: number) => void;
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
  incrementQuantity: () => {
    return Number;
  },
  decrementQuantity: () => {
    return Number;
  },
  addProductToCart: (data: DataType, quantity: number) => {},
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

  // Comportement;
  const addProductToCart = (data: DataType, quantity: number) => {
    // Add product to cart logic here
    //...
    setCartItems([...cartItems, { ...data }]);
  };
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
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
