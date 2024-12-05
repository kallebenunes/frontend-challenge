import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the context's value
interface MyContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

// Create new context with the defined type
export const MyContext = createContext<MyContextType | undefined>(undefined);

// Define the types for the props of MyContextProvider
interface MyContextProviderProps {
  children: ReactNode;
}

// Create Provider to wrap app
export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<string>("");

  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};
