import "./list.scss";
import Card from "../component/card/card";

// By adding {posts && ...} before posts.map(...),
// you're ensuring that posts is truthy (i.e., not undefined or null)
// before attempting to map through it.
// This will prevent the error when posts is undefined.

function List({ posts }) {
  return (
    <div className="list">
      {posts && posts.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}

export default List;
