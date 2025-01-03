import Chat from "../../component/chat/chat";

import "./profilePage.scss";
import apiRequest from "../../library/apiRequest";
import { Await, Link, useNavigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Suspense, useContext } from "react";
import List from "../../component/list/list";

function ProfilePage() {
  const data = useLoaderData();
  // console.log("chatResponse data:", data.chatResponse);

  // console.log("data from profile", data);

  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      // localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            </span>
            <span>
              Username:<b>{currentUser.username}</b>
            </span>
            <span>
              Email:<b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>

          <Suspense fallback={<p>Loading your posts...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => {
                // Ensure postResponse.data.userPosts exists and is an array
                const userPosts = Array.isArray(postResponse.data.userPosts)
                  ? postResponse.data.userPosts.filter(
                      (post) => post.userId === currentUser.id
                    )
                  : [];

                if (!userPosts.length) {
                  return <p>You have not created any posts yet.</p>;
                }

                return <List posts={userPosts} />;
              }}
            </Await>
          </Suspense>

          <div className="title">
            <h1>Saved List</h1>
            <button>Update Profile</button>
          </div>

          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading....</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
