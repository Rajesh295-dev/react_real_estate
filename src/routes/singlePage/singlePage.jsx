import "./singlePage.scss";

import { listData } from "../../component/library/dummyData";

function SinglePage() {
  const data = listData;
  return (
    <div className="singlePage">
      <div className="listContainer">lsit</div>
      <div className="mapContainer">map</div>
    </div>
  );
}

export default SinglePage;
