import "./Feed.css";
import Card from "./Card";

function Feed({ data,setIsOpen,setIsHideHeader }) {
  return (
    <div className="card-container">
      {data && data.map((item) => <Card key={item.id} setIsOpen={setIsOpen} setIsHideHeader={setIsHideHeader} data={item} />)}
    </div>
  );
}

export default Feed;
