import { createContext, useState } from "react";

export const OpenContext = createContext();

export const OpenProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [category, setCategory] = useState(0);
  const [isHideHeader, setIsHideHeader] = useState(false);

  const data = {
    apiData,
    setApiData,
    isOpen,
    setIsOpen,
    isShow,
    setIsShow,
    category,
    setCategory,
    isHideHeader,
    setIsHideHeader,
  };

  return (
    <OpenContext.Provider value={data}>
      {children}
    </OpenContext.Provider>
  );
};
