import { createContext,useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export const OpenContext = createContext();
function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [category, setCategory] = useState(0);
  const [isHideHeader, setIsHideHeader] = useState(false);

  const data = {
    isOpen,
    setIsOpen,
    category,
    setCategory,
    setIsHideHeader,
  };
  window.addEventListener("popstate", () => {
    setIsHideHeader(false);
  });
  return (
    <>
      <Header setIsOpen={setIsOpen} isHideHeader={isHideHeader} />
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
