import { useParams } from "react-router-dom";
import { OpenContext } from "../../components/AppLayout";
import { useContext, useState } from "react";
import PlayVideo from "./components/PlayVideo/PlayVideo";
import Recommend from "./components/Recommend/Recommend";
import "./Video.css";
function Video() {
  const { isOpen, setIsOpen, category } = useContext(OpenContext);
  const { videoId } = useParams();
  const [channelTitle, setChannelTitle] = useState("");

  return (
    <main>
      <div className={`video-section container ${isOpen ? "active" : ""}`}>
        <PlayVideo videoId={videoId} setChannelTitle={setChannelTitle} />
        <Recommend
          channelTitle={channelTitle}
          category={category}
          videoId={videoId}
          setIsOpen={setIsOpen}
        />
      </div>
    </main>
  );
}

export default Video;
