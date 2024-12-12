// import { useContext } from "react";
// import SearchBar from "../../component/searchBar/SearchBar";
// import "./homePage.scss";
// import { AuthContext } from "../../context/AuthContext";

// export default function HomePage() {
//   const { currentUser } = useContext(AuthContext);

//   return (
//     <div className="homePage">
//       <div className="textContainer">
//         <div className="backgroundImg"></div>
//         <div className="wrapper">
//           <h1 className="title">Discover Your Dream Home Today</h1>

//           <p>
//             Explore a wide range of real estate options to find the perfect
//             place for you. From cozy apartments to spacious family homes, we
//             make it easy to turn your vision into reality. Let us help you find
//             a property that meets your needs and suits your lifestyle.
//           </p>
//           <SearchBar />
//           <div className="boxes">
//             <div className="box">
//               <h1>16+</h1>
//               <h2>Years of Experience</h2>
//             </div>
//             <div className="box">
//               <h1>300</h1>
//               <h2>Award Gained</h2>
//             </div>
//             <div className="box">
//               <h1>1100+</h1>
//               <h2>New Development</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="imgContainer">
//         <img src="/bg.png" alt="Background" />
//       </div>
//     </div>
//   );
// }

import { useContext } from "react";
import SearchBar from "../../component/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../component/footer/Footer";

export default function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="wrapper">
        <div className="videoContainer">
          <video autoPlay muted loop className="backgroundVideo">
            <source src="./video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="textOverlay">
            <h1 className="title">Discover Your Dream Home Today</h1>
            <p>
              Explore a wide range of real estate options to find the perfect
              place for you. From cozy apartments to spacious family homes, we
              make it easy to turn your vision into reality. Let us help you
              find a property that meets your needs and suits your lifestyle.
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
        <div className="content">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <img src="/feature3.webp" alt="Feature 1" />
              <h3>Expert Guidance</h3>
              <p>
                Work with seasoned professionals to find your perfect property.
              </p>
            </div>
            <div className="feature">
              <img src="/feature2.jpeg" alt="Feature 2" />
              <h3>Wide Range</h3>
              <p>Explore thousands of listings tailored to your preferences.</p>
            </div>
            <div className="feature">
              <img src="/feature1.webp" alt="Feature 3" />
              <h3>Trusted Service</h3>
              <p>
                Experience hassle-free and transparent property transactions.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="testimonialsSection">
          <h2>What Our Clients Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>
                "Finding my dream home was so easy! The platform is
                user-friendly and the team was incredibly supportive."
              </p>
              <h4>- Alex Johnson</h4>
            </div>
            <div className="testimonial">
              <p>
                "The experience was seamless and stress-free. Highly recommend
                to anyone looking for their perfect home."
              </p>
              <h4>- Sarah Thompson</h4>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
