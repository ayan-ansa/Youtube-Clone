import { NavLink } from "react-router-dom";
import "./Category.css";
function Category({ setCategory, setIsShow }) {

  const categories = [
    "All",
    "Music",
    "News",
    "Sports",
    "Gaming",
    "Technology",
    "Comedy",
    "Entertainment",
    "Blogs",
  ];

  const changeCategory = (category) => {
    switch (category) {
      case "All":
        setCategory(0);
        break;
      case "Music":
        setCategory(10);
        break;
      case "News":
        setCategory(25);
        break;
      case "Sports":
        setCategory(17);
        break;
      case "Gaming":
        setCategory(20);
        break;
      case "Technology":
        setCategory(28);
        break;
      case "Comedy":
        setCategory(23);
        break;
      case "Entertainment":
        setCategory(24);
        break;
      case "Blogs":
        setCategory(22);
        break;
    }
  };
  return (
    <div className="categories" onClick={() => setIsShow(false)}>
      <ul>
        {categories.map((category, i) => (
          <NavLink
            to={`/${category.toLowerCase()}`}
            key={i}
            className={({ isActive }) =>
              isActive ? "category-active" : "category-inactive"
            }
          >
            <li
              key={i}
              className={category === "All" ? "all-active" : ""}
              onClick={(e) => changeCategory(e.target.innerText)}
            >
              {category}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Category;
