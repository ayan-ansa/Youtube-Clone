import { useState } from "react";
import { API_KEY } from "../../../pages/HomePage/Home";
import { MdOutlineHistory } from "react-icons/md";
import { searchHistory } from "../../../data";
import { VIDEO_BASE_URL } from "../../../pages/VideoPage/components/PlayVideo/PlayVideo";

function Search({ search, micro, setApiData, isShow, setIsShow }) {
  const [query, setQuery] = useState("");
  const [searchHistoryData, setSearchHistoryData] = useState(
    JSON.parse(localStorage.getItem("searchHistoryItems")) || searchHistory
  );

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 600) {
      setIsShow(false);
    }
  });
  const fetchSearchData = async () => {
    try {
      const res = await fetch(
        `${VIDEO_BASE_URL}/search?part=snippet&maxResults=50&q=${query}&key=${API_KEY}`
      );
      const data = await res.json();
      if (data) {
        setApiData(data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addSearchItem = () => {
    const search = { id: crypto.randomUUID(), text: query };
    setSearchHistoryData([...searchHistoryData, search]);
    localStorage.setItem(
      "searchHistoryItems",
      JSON.stringify([...searchHistoryData, search])
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow(false);
    if (query.length > 0) {
      addSearchItem();
      fetchSearchData();
      window.scrollTo(0, 0);
    }
  };

  const handleDelete = (id) => {
    const filterData = searchHistoryData.filter((item) => item.id !== id);
    setSearchHistoryData(filterData);
    localStorage.setItem("searchHistoryItems", JSON.stringify(filterData));
  };

  return (
    <div className={`search-section ${isShow ? "show" : ""}`}>
      <form onSubmit={handleSubmit}>
        <div className="search-bar" onClick={() => setIsShow(true)}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search"
          />
          {search}
        </div>
      </form>
      <div className="mic">{micro}</div>
      <ul className={`search-items ${isShow ? "open" : ""}`}>
        <li className={`search-item ${query.length > 0 ? "" : "hide"}`}>
          <div className="search-text">
            <MdOutlineHistory />
            <p>{query}</p>
          </div>
          <a href="#">Remove</a>
        </li>
        {searchHistoryData.map((item) => (
          <li key={item.id} className="search-item">
            <div className="search-text">
              <MdOutlineHistory />
              <p onClick={(e) => setQuery(e.target.textContent)}>{item.text}</p>
            </div>
            <a
              href="#"
              className="remove-btn"
              onClick={() => handleDelete(item.id)}
            >
              Remove
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
