import "./Recommend.css";
import { useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";
import { BASE_URL, API_KEY } from "../../../HomePage/Home";

function Recommend({ category, videoId, setIsOpen, channelTitle }) {
  const [data, setData] = useState([]);
  const categories = ["All", "From the series", "From " + channelTitle];

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}${category}&key=${API_KEY}`);
      const data = await response.json();
      setData(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [videoId]);

  return (
    <div className="recommend">
      <hr />
      <div className="recommend-categories">
        <ul>
          {categories.map((category, i) => (
            <li key={i}>{category}</li>
          ))}
        </ul>
      </div>
      <div className="recommend-list">
        {data.map((item) => (
          <RecommendCard setIsOpen={setIsOpen} key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Recommend;
