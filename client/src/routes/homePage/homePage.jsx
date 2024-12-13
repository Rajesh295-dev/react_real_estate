import { useContext, useEffect } from "react";
import SearchBar from "../../component/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../component/footer/Footer";

export default function HomePage() {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const video = document.querySelector(".backgroundVideo");
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Screen is wide, play the video
        if (video)
          video.play().catch((error) => console.error("Play error:", error));
      } else {
        // Screen is narrow, pause the video
        if (video) video.pause();
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                Partner with experts to secure your dream home. Collaborate with
                specialists to achieve your property goals. Work with seasoned
                professionals to find your perfect property.
              </p>
            </div>

            <div className="feature">
              <img src="/feature2.jpeg" alt="Feature 2" />
              <h3>Wide Range</h3>

              <p>
                Explore thousands of listings tailored to your preferences,
                ranging from cozy apartments to luxurious estates. Discover
                properties that match your lifestyle and budget with ease.
              </p>
            </div>

            <div className="feature">
              <img src="/feature1.webp" alt="Feature 3" />
              <h3>Trusted Service</h3>
              <p>
                Experience hassle-free and transparent property transactions
                with expert guidance at every step. Enjoy seamless processes and
                clear communication for a worry-free experience.
              </p>
            </div>
          </div>
        </div>

        <div className="testimonialsSection">
          <h2>What Our Clients Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <img src="/girl3.webp" alt="Feature 2" />
              <p>
                "The experience was seamless and stress-free. Highly recommend
                to anyone looking for their perfect home."
              </p>
              <h4>- Sarah Thompson</h4>
            </div>
            <div className="testimonial">
              <img src="/men3.webp" alt="Feature 2" />
              <p>
                "Finding my dream home was so easy! The platform is
                user-friendly and the team was incredibly supportive."
              </p>
              <h4>- Alex Johnson</h4>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
