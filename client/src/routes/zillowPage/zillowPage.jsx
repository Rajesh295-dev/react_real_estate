import React from "react";
import "./zillowPage.scss";
import Filter from "../../component/filter/filter";
import Card from "../../component/card/card";
import Map from "../../component/map/map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useMemo } from "react";

const transformData = (data) => {
  return data.map((item, index) => {
    const property = item.property; // Access the nested 'property' object
    //console.log(`Transforming item ${index}:`, property);

    function generateLoremIpsum(length = 100) {
      const loremIpsumText =
        "Nestled in a quiet, family-friendly neighborhood, this charming home offers a perfect blend of modern amenities and classic appeal. Featuring spacious living areas, a well-appointed kitchen, and serene bedrooms, this property is ideal for comfortable living and entertaining. The backyard is a private oasis, complete with a patio for outdoor dining and a lush garden. Close to schools, parks, and shopping, this home provides convenience and tranquility in equal measure..";
      return loremIpsumText.slice(0, length); // Return the specified length of the lorem ipsum text
    }

    return {
      id: property.zpid,
      title: `Home for Sale in ${property.address.city}`,
      //"https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img: property.imgSrc, // Fallback image if imgSrc is not available
      bedroom: property.bedrooms,
      bathroom: property.bathrooms,
      price: property.price,
      address: `${property.address.streetAddress}, ${property.address.city}, ${property.address.state} ${property.address.zipcode}`,
      latitude: property.latitude,
      longitude: property.longitude,
      desc: property.description || generateLoremIpsum(350), // Fallback description
      // images: property.imgSrc,
      images:
        property.imgSrc && property.imgSrc.length > 0
          ? property.imgSrc
          : [
              "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            ], // Fallback image if images array is not available
    };
  });
};

function ZillowPage() {
  const listings = useLoaderData();
  //console.log("Fetched listings:", listings);

  //const filteredData = transformData(listings);
  //console.log("Filtered listings:", JSON.stringify(filteredData, null, 2));

  //useMemo is used to memoize the result of transformData.
  //This prevents unnecessary recomputation and re-renders,
  //which could cause infinite API calls indirectly.
  const filteredData = useMemo(() => transformData(listings), [listings]);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={filteredData}
              errorElement={<p>Error loading Zillow data!</p>}
            >
              {(zillowResponse) =>
                zillowResponse.map((post) => <Card key={post.id} item={post} />)
              }
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={filteredData}
            errorElement={<p>Error loading Zillow data!</p>}
          >
            {(zillowResponse) => <Map items={zillowResponse} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ZillowPage;
