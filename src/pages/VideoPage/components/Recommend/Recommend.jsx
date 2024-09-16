import "./Recommend.css";
import { API_KEY } from "../../../HomePage/Home";
import { useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";

function Recommend({ category, videoId, setIsOpen, channelTitle }) {
  const [data, setData] = useState([]);
  const categories = ["All", "From the series", "From " + channelTitle];

  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL);
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
