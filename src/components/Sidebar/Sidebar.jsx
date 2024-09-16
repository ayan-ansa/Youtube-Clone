import List from "./List";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { listItems, subscriptions, explore } from "../../data";
import "./Sidebar.css";

function Sidebar({ isOpen, setCategory, setIsOpen }) {
  return (
    <aside className={isOpen ? "active" : ""}>
      <div className="sidebar">
        <ul>
          <List
            icon={<AiFillHome />}
            setIsOpen={setIsOpen}
            text="Home"
            setCategory={setCategory}
          />
          <List
            icon={<SiYoutubeshorts />}
            text="Shorts"
            setIsOpen={setIsOpen}
            setCategory={setCategory}
          />
          <List
            icon={<MdSubscriptions />}
            setIsOpen={setIsOpen}
            text="Subscriptions"
          />
          <hr className={`show ${isOpen ? "hide" : ""} margin-bottom`} />
          <li className={`show ${isOpen ? "hide" : ""}`}>
            <a href="#">You</a>
          </li>
          {listItems.map((item) => (
            <List
              key={item.id}
              icon={<item.icon />}
              className={item.class}
              text={item.title}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))}
          <hr className={`show ${isOpen ? "hide" : ""} margin-bottom`} />
          <h3 className={`subscription show ${isOpen ? "hide" : ""}`}>
            Subscriptions
          </h3>
          {subscriptions.map((item) => (
            <List
              key={item.id}
              image={item.imgUrl}
              className={item.class}
              text={item.title}
              isOpen={isOpen}
            />
          ))}
          <hr className={`show ${isOpen ? "hide" : ""} margin-bottom`} />
          <h3 className={`subscription show ${isOpen ? "hide" : ""}`}>
            Explore
          </h3>
          {explore.map((item) => (
            <List
              key={item.id}
              isOpen={isOpen}
              icon={<item.icon />}
              text={item.title}
              className={item.class}
              setCategory={setCategory}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
