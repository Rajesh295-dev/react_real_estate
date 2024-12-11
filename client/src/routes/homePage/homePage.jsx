import { useContext } from "react";
import SearchBar from "../../component/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

export default function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="backgroundImg"></div>
        <div className="wrapper">
          <h1 className="title">Discover Your Dream Home Today</h1>

          <p>
            Explore a wide range of real estate options to find the perfect
            place for you. From cozy apartments to spacious family homes, we
            make it easy to turn your vision into reality. Let us help you find
            a property that meets your needs and suits your lifestyle.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>300</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1100+</h1>
              <h2>New Development</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
}
