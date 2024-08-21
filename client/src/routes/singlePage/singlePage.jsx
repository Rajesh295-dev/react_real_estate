import "./singlePage.scss";
import Slider from "../../component/slider/slider";
import Map from "../../component/map/map";
// import { useLoaderData, useNavigate } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../library/apiRequest";

function SinglePage() {
  // const post = useLoaderData();
  const location = useLocation();
  const post = location.state?.post;
  console.log(post);

  // const [saved, setSaved] = useState(post.isSaved);
  const [saved, setSaved] = useState(post?.isSaved || false); // Initialize with post.isSaved or false
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
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
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png"></img>
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user?.avatar}></img>
                <span>{post.user?.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png"></img>
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail?.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tentant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png"></img>
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail?.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png"></img>
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail?.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png"></img>
              <span>{post.bedroom}beds</span>
            </div>
            <div className="size">
              <img src="/bed.png"></img>
              <span>2 bed</span>
            </div>
            <div className="size">
              <img src="/bath.png"></img>
              <span>{post.bathroom}bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png"></img>
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail?.school}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png"></img>
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail?.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png"></img>
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail?.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" />
              {saved ? "Place is Saved" : " Save the Place"}
            </button>

            {
              <button>
                <img src="/chat.png" />
                Send a Message
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
