import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="green accent-4 header-navs  ">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Market Food</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}