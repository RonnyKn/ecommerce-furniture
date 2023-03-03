import "./Footer.css"
import React from "react"
import { Link } from "react-router-dom"
import { ImInstagram } from "react-icons/im"
import { FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  const scrollTop = () => {
    window.scroll(0, 0)
  }
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo" onClick={scrollTop}>
          <Link to="/">
            <span className="title1">Ron</span>
            <strong className="title2">SHOP</strong>
            <p>Capitalis Ecommerce Website. Happy Shopping!</p>
          </Link>
        </div>
        <div className="footer-permalinks">
          <ul>
            <li>
              <strong>Top Categories</strong>
            </li>
            <li>
              <a href="#trending">Trending</a>
            </li>
            <li>
              <a href="#sales">Best Sales</a>
            </li>
            <li>
              <a href="#timer">Limited Offers</a>
            </li>
            <li>
              <a href="#arrival">New Arrival</a>
            </li>
            <li>
              <a href="#popular">Popular</a>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Permalinks</strong>
            </li>
            <li onClick={scrollTop}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={scrollTop}>
              <Link to="shop">Shop</Link>
            </li>
            <li onClick={scrollTop}>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Contact</strong>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ronny.kn"
                target="_blank"
                rel="noreferrer"
              >
                <ImInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/ronny_kn"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          <em>Copyright {year} All Right Reserved</em>
          <span>
            <strong> Ronny Kurniawan</strong>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
