import { createContext, useContext, useState } from "react";

//types
type ContextPropsType = {
  firstName: string;
  setFirstName: (name: string) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (event: string) => void;
  password: number;
  setPassword: (event: number) => void;
};

/////////////////////////////////////// 1 ////////////////////////////////////////

// 1. Création de Context;
export const Context = createContext<ContextPropsType>({
  firstName: "",
  setFirstName: () => {},
  name: "",
  setName: () => {},
  email: "",
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
  const [firstName, setFirstName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<number>(0);

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
