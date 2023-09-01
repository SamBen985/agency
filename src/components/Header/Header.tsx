import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav_wrapper">
            <div className="logo">
              <h2>
                <a href="/">
                  M<span style={{ color: "#379cf6" }}>O</span>M ST
                  <span style={{ color: "#379cf6" }}>O</span>CKS
                </a>
              </h2>
            </div>

            {/* ============ navigation ===============*/}

            <div className="navigation">
              <ul className="menu">
                <Link to="/">
                  <li className="menu_item">
                    <a href="" className="menu_link">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/affiliates">
                  <li className="menu_item">
                    <a href="" className="menu_link">
                      Affiliates
                    </a>
                  </li>
                </Link>
                <Link to="/advertisers">
                  <li className="menu_item">
                    <a href="" className="menu_link">
                      Advertisers
                    </a>
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="menu_item">
                    <a href="" className="menu_link">
                      Contact Us
                    </a>
                  </li>
                </Link>
                <Link to="/privacy">
                  <li className="menu_item">
                    <a href="" className="menu_link">
                      Privacy Policy
                    </a>
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
