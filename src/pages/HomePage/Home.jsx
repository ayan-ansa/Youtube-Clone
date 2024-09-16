import { useContext, useEffect, useState } from "react";
import Category from "./components/Category/Category";
import "./Home.css";
import Feed from "./components/Feed/Feed";
import { OpenContext } from "../../components/AppLayout";
import Shimmer from "./components/Shimmer/Shimmer";

export const API_KEY = "AIzaSyAA-hXM8Yr2QcZlH5KwzB3Q3wi_OA8i6mE";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen,setIsOpen, category, setCategory,setIsHideHeader } = useContext(OpenContext);

  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setData(data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return isLoading ? (
    <Shimmer />
  ) : (
    <main>
      <div className={`container ${isOpen ? "active" : ""}`}>
        <Category setCategory={setCategory} />
        <Feed data={data} setIsOpen={setIsOpen} setIsHideHeader={setIsHideHeader}  />
      </div>
    </main>
  );
}

export default Home;
