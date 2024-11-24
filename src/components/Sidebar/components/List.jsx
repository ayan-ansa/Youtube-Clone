import { NavLink } from "react-router-dom";

function List({
  className,
  icon,
  text,
  image,
  isOpen,
  setCategory,
  setIsOpen,
}) {
  const setCategoryFun = (e) => {
    setIsOpen(true);
    let clickText = e.target.innerText;
    switch (clickText) {
      case "Home":
        setCategory(0);
        break;
      case "Shorts":
        setCategory(1);
        break;
      case "Music":
        setCategory(10);
        break;
      case "News":
        setCategory(25);
        break;
      default:
        setCategory(0);
    }
  };
  return (
    <NavLink
      to={`/${text.toLowerCase()}`}
      className={({ isActive }) => (isActive ? "link-active" : "link-inactive")}
    >
      <li
        className={isOpen ? (className += " hide") : className}
        onClick={setCategoryFun}
      >
        <div className="list-item">
          {icon || <img src={image} alt="profile" />}
          <span>{isOpen && text === "Your videos" ? "You" : text}</span>
        </div>
      </li>
    </NavLink>
  );
}

export default List;
