import "./Feed.css";
import Card from "./Card";

function Feed({ data, setIsOpen, setIsHideHeader }) {
  return (
    <div className="card-container">
      {data &&
        data.map((item, i) => (
          <Card
            key={item.statistics ? item.id : item.id.videoId || i}
            setIsOpen={setIsOpen}
            setIsHideHeader={setIsHideHeader}
            data={item}
          />
        ))}
    </div>
  );
}

export default Feed;
