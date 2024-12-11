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

import "./listPage.scss";
import Filter from "../../component/filter/filter";
import Card from "../../component/card/card";
import Map from "../../component/map/map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
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
    </div>
  );
}

export default ListPage;
