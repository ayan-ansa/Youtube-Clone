import logo from "../../assets/yt-logo.png";
import user from "../../assets/user.jpg";
import { LuMenu } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { HiMicrophone } from "react-icons/hi2";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import Search from "./components/Search";
import ProfileSection from "./components/ProfileSection";
import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { OpenContext } from "../../context/OpenContext";

function Header() {
  
  const {
    setIsOpen,
    setApiData,
    isShow,
    setIsShow,
    isHideHeader,
  } = useContext(OpenContext);

  return (
    <header className={isHideHeader ? "header-hide" : ""}>
      <div className={`logo-section ${isShow ? "none" : ""}`}>
        <LuMenu onClick={() => setIsOpen((prev) => !prev)} />
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <Search
        search={<FiSearch />}
        micro={<HiMicrophone />}
        setApiData={setApiData}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <ProfileSection
        search1={<FiSearch className="icon" />}
        micro={<HiMicrophone className="icon" />}
        video={<BiVideoPlus className="video-icon" />}
        bell={<FaRegBell />}
        search2={<FiSearch className="search-show" />}
        setIsShow={setIsShow}
        userUrl={user}
      />
    </header>
  );
}

export default Header;
