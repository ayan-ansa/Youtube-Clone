import { IoIosShareAlt } from "react-icons/io";
import user from "../../../../assets/user.jpg";
import {
  BiDislike,
  BiDotsHorizontalRounded,
  BiDotsVerticalRounded,
  BiLike,
} from "react-icons/bi";
import "./PlayVideo.css";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../HomePage/Home";
import { convertViews,timeAgo } from "../../../HomePage/components/Feed/Card";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_VIDEO_BASE_URL;

function PlayVideo({ videoId, setChannelTitle }) {
  const [videoData, setVideoData] = useState("");
  const [channelData, setChannelData] = useState("");
  const [commentData, setCommentData] = useState([]);

  const fetchChannelData = async (channelId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
      );
      const data = await response.json();
      setChannelData(data?.items?.[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchVideoData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      fetchChannelData(data?.items[0]?.snippet?.channelId);
      setVideoData(data?.items[0]);
      setChannelTitle(data?.items[0]?.snippet?.channelTitle);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCommentData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      setCommentData(data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchVideoData();
      fetchCommentData();
    }
  }, [videoId]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="video-details-section">
        <div className="video-details">
          <h3 className="video-title">{videoData?.snippet?.title}</h3>
          <div className="channel-info-section">
            <div className="row">
              <div className="row channel-info">
                <img
                  src={channelData?.snippet?.thumbnails?.high?.url || user}
                  alt="user"
                />
                <div className="channel-name">
                  <h3 className="channel-title">
                    {videoData?.snippet?.channelTitle}
                  </h3>
                  <p className="channel-subscribers">
                    {convertViews(
                      channelData?.statistics?.subscriberCount || 1000000
                    ) + "..."}
                  </p>
                </div>
              </div>
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <div className="row">
              <div className="btn row">
                <div className="video-media row-gap-1">
                  <BiLike />
                  <p>{convertViews(videoData?.statistics?.likeCount)}</p>
                </div>
                <BiDislike />
              </div>
              <div className="btn row-gap-1">
                <IoIosShareAlt />
                <p>Share</p>
              </div>
              <div className="round">
                <BiDotsHorizontalRounded />
              </div>
            </div>
          </div>
          <div className="video-desc-views">
            <p>
              {convertViews(videoData?.statistics?.viewCount)} views •{" "}
              {timeAgo(videoData?.snippet?.publishedAt)}
            </p>
            <p>{videoData?.snippet?.description?.slice(0, 150) || "..."}</p>
          </div>
        </div>
        <div className="video-description">
          <h3>{convertViews(videoData?.statistics?.commentCount)} Comments</h3>
          <div className="comment-input">
            <img src={user} alt="user" />
            <input type="text" placeholder="Add a comment..." />
          </div>
          <div className="comment-section">
            {commentData?.map((item, i) => (
              <div className="comment" key={i}>
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt="user"
                />
                <div className="comment-details">
                  <div className="comment-info">
                    <div className="row">
                      <Link
                        to={`${item.snippet.topLevelComment.snippet.authorChannelUrl}`}
                        className="comment-user"
                      >
                        {item.snippet.topLevelComment.snippet.authorDisplayName}
                      </Link>
                      <p className="comment-time">
                        {timeAgo(
                          item.snippet.topLevelComment.snippet.publishedAt
                        )}
                      </p>
                    </div>
                    <p className="comment-text">
                      {item.snippet.topLevelComment.snippet.textDisplay.slice(
                        0,
                        50
                      )}
                    </p>
                  </div>
                  <div className="row">
                    <div className="row-gap-1">
                      <BiLike />
                      <p className="comment-likes">
                        {convertViews(
                          item.snippet.topLevelComment.snippet.likeCount
                        ) || ""}
                      </p>
                    </div>
                    <BiDislike />
                  </div>
                </div>
                <BiDotsVerticalRounded className="comment-dots" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PlayVideo;
