import { Link } from "react-router-dom";
import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerce",
  },
];
const quickLinks02 = [
  {
    path: "/privacy",
    display: "Privacy Policy",
  },
  {
    path: "#",
    display: "Help",
  },
  {
    path: "/terms",
    display: "Terms of Use",
  },
];

const quickLinks03 = [
  {
    path: "#about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
  {
    path: "/affiliate",
    display: "What is Affiliate Marketing",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h2>
              <a href="/">
                M<span style={{ color: "#379cf6" }}>O</span>M ST
                <span style={{ color: "#379cf6" }}>O</span>CKS
              </a>
            </h2>
            <p className="description dis2">Grow with us</p>
            <p className="small_text description">
              Have questions or want to discuss your project?
              <br /> Email: contact@momstocks.com
              <br /> Phone: (123) 456-7890 <br />
              Office Address: House 1 Citron St Macleay Island QLD 4184
            </p>
          </div>

          <div className="footer_quick-link">
            <h3 className="quick_link-title">Solutions</h3>

            <ul className="quick_link">
              {" "}
              <Link to="/privacy">
                <li className="quick_link-item">
                  <a href="">Marketing</a>
                </li>
              </Link>
              <Link to="/terms">
                <li className="quick_link-item">
                  <a href="">Analytics</a>
                </li>
              </Link>
              <Link to="/affiliate">
                <li className="quick_link-item">
                  <a href="">Commerce</a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="footer_quick-link">
            <h3 className="quick_link-title">Support</h3>

            <ul className="quick_link">
              <Link to="/privacy">
                <li className="quick_link-item">
                  <a href="">Privacy Policy</a>
                </li>
              </Link>
              <Link to="/terms">
                <li className="quick_link-item">
                  <a href="">Terms</a>
                </li>
              </Link>
              <Link to="/affiliate">
                <li className="quick_link-item">
                  <a href="">Help</a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="footer_quick-link">
            <h3 className="quick_link-title">About</h3>

            <ul className="quick_link">
              <Link to="/contact">
                <li className="quick_link-item">
                  <a href="">Contact Us</a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="quick_link-item">
                  <a href="">About</a>
                </li>
              </Link>
              <Link to="/affiliate">
                <li className="quick_link-item">
                  <a href="">What is Affiliate Marketing</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright {year}, Developed By Nexus Web Development All rights
          reserved.{""}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
