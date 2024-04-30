import SearchBar from "../../component/searchBar/SearchBar";

import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maxime
            aliquam rerum, harum saepe facere aliquid dolores ullam, ratione nam
            eum facilis et! Reprehenderit, ipsum necessitatibus modi maxime amet
            ratione?
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
              <h2>New Developemnt</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        {" "}
        <img src="./bg.png"></img>
      </div>
    </div>
  );
}
