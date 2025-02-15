"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

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
