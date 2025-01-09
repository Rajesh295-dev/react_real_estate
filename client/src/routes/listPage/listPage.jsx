import React, { useEffect, useState } from "react";
import "./listPage.scss";
import Filter from "../../component/filter/filter";
import Card from "../../component/card/card";
import Map from "../../component/map/map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Toggle from "../../component/toggle/Toggle";

function ListPage() {
  const data = useLoaderData();
  const [isMapView, setIsMapView] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 738);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 738);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="listPage">
      {/* Filter Bar */}
      <div className="filterBar">
        <Filter />
      </div>

      {/* Content Area */}
      <div className="contentArea">
        {/* List Container */}
        <div
          className={`listContainer ${
            !isLargeScreen && isMapView ? "hidden" : ""
          }`}
        >
          <div className="wrapper">
            <Suspense fallback={<p>Loading posts...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) =>
                  postResponse.data.map((post) => (
                    <Card
                      key={post.id}
                      item={{
                        id: post.id,
                        title: post.title,
                        price: post.price,
                        images: post.images,
                        address: post.address,
                      }}
                    />
                  ))
                }
              </Await>
            </Suspense>
          </div>
        </div>

        {/* Map Container */}
        <div
          className={`mapContainer ${
            isLargeScreen || isMapView ? "visible" : ""
          }`}
        >
          <Suspense fallback={<p>Loading map...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading map data!</p>}
            >
              {(postResponse) => (
                <Map items={postResponse.data} isMapView={isMapView} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="mapListToggle">
        <Toggle
          activeView={isMapView ? "List" : "Map"}
          setActiveView={(view) => setIsMapView(view === "Map")}
          options={["List", "Map"]}
        />
      </div>
    </div>
  );
}

export default ListPage;
