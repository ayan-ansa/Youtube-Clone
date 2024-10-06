import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
export function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const secondsAgo = Math.floor((now - past) / 1000);

  // Define time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  // Determine the largest interval and calculate time difference
  for (let interval in intervals) {
    const intervalSeconds = intervals[interval];
    const timeDifference = Math.floor(secondsAgo / intervalSeconds);

    if (timeDifference >= 1) {
      return `${timeDifference} ${interval}${
        timeDifference > 1 ? "s" : ""
      } ago`;
    }
  }
  return "Just now";
}
export const convertViews = (value) => {
  if (value >= 1000000) {
    return `${Math.floor(value / 1000000)}M`;
  } else if (value >= 1000) {
    return `${Math.floor(value / 1000)}K`;
  } else {
    return value;
  }
};
function Card({ data, setIsOpen, setIsHideHeader }) {
  const handleClick = () => {
    setIsOpen(true);
    setIsHideHeader(true);
  };

  return (
    <span className="video-card ">
      <div className="thumbnail-container">
        <Link
          to={`/watch/${
            data.statistics ? data.id : data.id.videoId || "VlPiVmYuoqw"
          }`}
          onClick={handleClick}
        >
          <img src={data.snippet.thumbnails.high.url} alt="thumbnail" />
        </Link>
      </div>
      <div className="video-info">
        <div className="video-title-info">
          <h2 className="title">{data.snippet.title.slice(0, 60)}</h2>
          <BiDotsVerticalRounded />
        </div>
        <div className="channel-info">
          <p className="channel-name">{data.snippet.channelTitle}</p>
          <div className="video-views">
            <span>
              {data.statistics ? convertViews(data.statistics.viewCount) : "1M"}
            </span>
            <span> • {timeAgo(data.snippet.publishedAt)} </span>
          </div>
        </div>
      </div>
    </span>
  );
}

export default Card;
