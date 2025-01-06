// import "./listPage.scss";
// import Filter from "../../component/filter/filter";
// import Card from "../../component/card/card";
// import Map from "../../component/map/map";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";

// function ListPage() {
//   const data = useLoaderData();
//   // console.log("Data from ListPage:", data);
//   return (
//     <div className="listPage">
//       <div className="listContainer">
//         <div className="wrapper">
//           <Filter />
//           <Suspense fallback={<p>Loading posts...</p>}>
//             <Await
//               resolve={data.postResponse}
//               errorElement={<p>Error loading posts!</p>}
//             >
//               {(postResponse) => {
//                 if (!postResponse?.data?.length) {
//                   return <p>No posts found!</p>;
//                 }
//                 return postResponse.data.map((post) => (
//                   <Card
//                     key={post.id}
//                     item={{
//                       id: post.id,
//                       title: post.title,
//                       price: post.price,
//                       images: post.images,
//                       address: post.address,
//                     }}
//                   />
//                 ));
//               }}
//             </Await>
//           </Suspense>
//         </div>
//       </div>
//       <div className="mapContainer">
//         <Suspense fallback={<p>Loading map...</p>}>
//           <Await
//             resolve={data.postResponse}
//             errorElement={<p>Error loading map data!</p>}
//           >
//             {(postResponse) => {
//               if (!postResponse?.data?.length) {
//                 return <p>No locations available for mapping!</p>;
//               }
//               return <Map items={postResponse.data} />;
//             }}
//           </Await>
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// export default ListPage;

// import "./listPage.scss";
// import Filter from "../../component/filter/filter";
// import Card from "../../component/card/card";
// import Map from "../../component/map/map";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";
// import Toggle from "../../component/toggle/Toggle";

// function ListPage() {
//   const data = useLoaderData();
//   console.log("Post Response:", data?.postResponse);
//   console.log("Is data array:", Array.isArray(data?.postResponse?.data));
//   console.log("Data length:", data?.postResponse?.data?.length);
//   return (
//     <div className="listPage">
//       <div className="listContainer">
//         <div className="wrapper">
//           <Filter />

//           <Suspense fallback={<p>Loading posts...</p>}>
//             <Await
//               resolve={data.postResponse}
//               errorElement={<p>Error loading posts!</p>}
//             >
//               {(postResponse) =>
//                 postResponse.data.map((post) => (
//                   <Card
//                     key={post.id}
//                     item={{
//                       id: post.id,
//                       title: post.title,
//                       price: post.price,
//                       images: post.images,
//                       address: post.address,
//                     }}
//                   />
//                 ))
//               }
//             </Await>
//           </Suspense>
//           {/* <div className="mapListToggle"> Map</div> */}
//         </div>
//       </div>
//       <div className="mapContainer">
//         <Suspense fallback={<p>Loading map...</p>}>
//           <Await
//             resolve={data.postResponse}
//             errorElement={<p>Error loading map data!</p>}
//           >
//             {(postResponse) => <Map items={postResponse.data} />}
//           </Await>
//         </Suspense>
//       </div>

//       <div className="toggleContainer">
//         <Toggle
//           activeView={view}
//           setActiveView={setView}
//           options={["list", "map"]}
//         />
//       </div>
//     </div>
//   );
// }

// import "./listPage.scss";
// import Filter from "../../component/filter/filter";
// import Card from "../../component/card/card";
// import Map from "../../component/map/map";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense, useState } from "react";
// import Toggle from "../../component/toggle/Toggle";

// function ListPage() {
//   const data = useLoaderData();
//   const [isMapView, setIsMapView] = useState(false); // Toggle state for map and list views

//   console.log("Post Response:", data?.postResponse);
//   console.log("Is data array:", Array.isArray(data?.postResponse?.data));
//   console.log("Data length:", data?.postResponse?.data?.length);

//   return (
//     <div className="listPage">
//       <div className="listContainer">
//         <div className="wrapper">
//           <Filter />

//           {!isMapView && (
//             <Suspense fallback={<p>Loading posts...</p>}>
//               <Await
//                 resolve={data.postResponse}
//                 errorElement={<p>Error loading posts!</p>}
//               >
//                 {(postResponse) =>
//                   postResponse.data.map((post) => (
//                     <Card
//                       key={post.id}
//                       item={{
//                         id: post.id,
//                         title: post.title,
//                         price: post.price,
//                         images: post.images,
//                         address: post.address,
//                       }}
//                     />
//                   ))
//                 }
//               </Await>
//             </Suspense>
//           )}
//         </div>
//       </div>

//       {!isMapView && (
//         <div className="mapContainer">
//           <Suspense fallback={<p>Loading map...</p>}>
//             <Await
//               resolve={data.postResponse}
//               errorElement={<p>Error loading map data!</p>}
//             >
//               {(postResponse) => <Map items={postResponse.data} />}
//             </Await>
//           </Suspense>
//         </div>
//       )}

//       {/* Toggle Button */}
//       <div className="mapListToggle">
//         <Toggle
//           activeView={isMapView ? "map" : "list"}
//           setActiveView={(view) => setIsMapView(view === "map")}
//           options={["list", "map"]}
//         />
//       </div>
//     </div>
//   );
// }

// export default ListPage;

import "./listPage.scss";
import Filter from "../../component/filter/filter";
import Card from "../../component/card/card";
import Map from "../../component/map/map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";
import Toggle from "../../component/toggle/Toggle";

function ListPage() {
  const data = useLoaderData();
  const [isMapView, setIsMapView] = useState(false); // Toggle state for map and list views

  console.log("Post Response:", data?.postResponse);
  console.log("Is data array:", Array.isArray(data?.postResponse?.data));
  console.log("Data length:", data?.postResponse?.data?.length);

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {!isMapView && (
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
          )}
        </div>
      </div>

      {isMapView && (
        <div className="mapContainer">
          <Suspense fallback={<p>Loading map...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading map data!</p>}
            >
              {(postResponse) => <Map items={postResponse.data} />}
            </Await>
          </Suspense>
        </div>
      )}

      {/* Toggle Button */}
      <div className="mapListToggle">
        <Toggle
          activeView={isMapView ? "map" : "list"}
          setActiveView={(view) => setIsMapView(view === "map")}
          options={["list", "map"]}
        />
      </div>
    </div>
  );
}

export default ListPage;
