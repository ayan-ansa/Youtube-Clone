import logo from "../../assets/youtubelogo.svg";
import user from "../../assets/user.jpg";
import { LuMenu } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { HiMicrophone } from "react-icons/hi2";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import Search from "./components/Search";
import ProfileSection from "./components/ProfileSection";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ setIsOpen, isHideHeader }) {
  return (
    <header className={isHideHeader ? "header-hide" : ""}>
      <div className="logo-section">
        <LuMenu onClick={() => setIsOpen((prev) => !prev)} />
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <Search search={<FiSearch />} micro={<HiMicrophone />} />
      <ProfileSection
        search1={<FiSearch className="icon" />}
        micro={<HiMicrophone className="icon" />}
        video={<BiVideoPlus className="video-icon" />}
        bell={<FaRegBell />}
        search2={<FiSearch className="search-show"/>}
        userUrl={user}
      />
    </header>
  );
}

export default Header;
