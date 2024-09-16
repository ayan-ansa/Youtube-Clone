import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import { convertViews, timeAgo } from "../../../HomePage/components/Feed/Card";
function RecommendCard({ data, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
  };
  return (
    <Link to={`/watch/${data.id}`} onClick={handleClick}>
      <div className="recommend-card">
        <img src={data.snippet.thumbnails.high.url} alt="" />
        <div className="recommend-card-info">
          <h3>{data.snippet.title.slice(0, 40)}</h3>
          <p>{data.snippet.channelTitle}</p>
          <p>
            {convertViews(data.statistics.viewCount)} views •{" "}
            {timeAgo(data.snippet.publishedAt)}
          </p>
        </div>
        <BiDotsVerticalRounded />
      </div>
    </Link>
  );
}

export default RecommendCard;
