import { useContext, useEffect, useRef, useState } from "react";
import Category from "./components/Category/Category";
import "./Home.css";
import Feed from "./components/Feed/Feed";
import Shimmer from "./components/Shimmer/Shimmer";
import { OpenContext } from "../../context/OpenContext";

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pageToken, setPageToken] = useState("");

  const {
    isOpen,
    setIsOpen,
    setIsShow,
    category,
    setCategory,
    setIsHideHeader,
    apiData,
    setApiData,
  } = useContext(OpenContext);

  const scrollPosition = useRef(0);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}${category}${
          pageToken ? `&pageToken=${pageToken}` : ""
        }&key=${API_KEY}`
      );
      const data = await response.json();
      setPageToken(data.nextPageToken);
      setApiData((prevData) => [...prevData, ...data?.items]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 400
      ) {
        if (!isLoading) {
          scrollPosition.current = window.scrollY;
          fetchData();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageToken, isLoading]);

  useEffect(() => {
    fetchData();
    setApiData([]);
    setPageToken(null);
  }, [category]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, scrollPosition.current);
    }
  }, [apiData, isLoading]);

  return isLoading && apiData.length === 0 ? (
    <Shimmer />
  ) : (
    <main>
      <div className={`container ${isOpen ? "active" : ""}`}>
        <Category setCategory={setCategory} setIsShow={setIsShow} />
        <Feed
          data={apiData}
          setIsOpen={setIsOpen}
          setIsHideHeader={setIsHideHeader}
        />
      </div>
    </main>
  );
}

export default Home;
