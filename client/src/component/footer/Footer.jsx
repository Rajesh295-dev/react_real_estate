import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection aboutUs">
          <h3>About Us</h3>
          <p>
            Discover your dream home with us. Explore a wide range of real
            estate options, from cozy apartments to spacious family homes.
          </p>
        </div>

        <div className="footerSection quickLinks">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="/ontact">Contact</a>
            </li>
            <li>
              <a href="faq">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footerSection contactUs">
          <h3>Contact Us</h3>
          <p>Email: support@reactestate.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          &copy; {new Date().getFullYear()} reactEstate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
