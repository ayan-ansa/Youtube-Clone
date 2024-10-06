import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export const OpenContext = createContext();
function AppLayout() {
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
    setIsShow,
    category,
    setCategory,
    setIsHideHeader,
  };
  window.addEventListener("popstate", () => {
    setIsHideHeader(false);
  });
  return (
    <>
      <Header
        setIsOpen={setIsOpen}
        setApiData={setApiData}
        isShow={isShow}
        setIsShow={setIsShow}
        setIsHideHeader={setIsHideHeader}
        category={category}
        setCategory={setCategory}
        isHideHeader={isHideHeader}
      />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCategory={setCategory}
      />
      <OpenContext.Provider value={data}>
        <Outlet />
      </OpenContext.Provider>
    </>
  );
}

export default AppLayout;
