import "./Footer.css"
import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <span>Rons Furniture</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            eligendi tenetur iusto consequuntur perferendis
          </p>
        </div>
        <div className="footer-permalinks">
          <ul>
            <li>
              <strong>Top Categories</strong>
            </li>
            <li>Mobile Phone</li>
            <li>Modern Sofa</li>
            <li>Arm Chair</li>
            <li>Smart Watches</li>
          </ul>
          <ul>
            <li>
              <strong>useful Links</strong>
            </li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Login</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>
              <strong>Contact</strong>
            </li>
            <li>Ronny Kurniawan</li>
            <li>+6285642108006</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          copyright <span> Ronny Kurniawan</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
