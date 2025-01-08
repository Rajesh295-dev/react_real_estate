import { useContext, useEffect, useState } from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import apiRequest from "../../library/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useLoaderData } from "react-router-dom";

function Card({ item }) {
  //console.log("first Image URL:", item.images);
  //console.log("Type of item.images:", typeof item.images);
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (Array.isArray(item.images)) {
      // If item.images is an array, use the first image
      if (item.images.length > 0) {
        setImageUrl(item.images[0]);
        //console.log("Array of images:", item.images);
      }
    } else if (typeof item.images === "string") {
      // If item.images is a string, use it directly
      setImageUrl(item.images);
      //console.log("Single image string:", item.images);
    }
  }, [item.images]);

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="card">
      <Link
        to={`/${item.id}`}
        state={{ post: item }}
        className="imageContainer"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Property Image"
            onError={
              (e) =>
                (e.target.src =
                  "https://photos.zillowstatic.com/fp/0bb32d1f9a9dbfb784d913a2fabbcfec-p_e.jpg") //alernative image if error
            }
          />
        ) : (
          <p>No image available</p>
        )}
        {/* if there is list of images and only access array  */}
        {/* <img src={item.images[0]} alt=""></img> */}
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`} state={{ post: item }}>
            {" "}
            {item.title}
          </Link>
        </h2>
        <p className="address">
          <img src="./pin.png" alt=""></img>
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./bed.png" alt=""></img>
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="./bath.png" alt=""></img>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div
              className="icon"
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
              onClick={handleSave}
            >
              <img src="/save.png"></img>
            </div>
            <div className="icon">
              <img src="/chat.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
