import "./listPage.scss";
import { listData } from "../../component/library/dummyData";
import Filter from "../../component/filter/filter";
import Card from "../../component/card/card";
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">map</div>
    </div>
  );
}

export default ListPage;
