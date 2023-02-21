import "./Products.css"
import React from "react"
import ProductCard from "./ProductCard"

const TrendingProducts = ({ filteredProducts }) => {
  return (
    <div className="container trending__products-container">
      {filteredProducts.map((item, idx) => (
        <ProductCard item={item} key={idx} />
      ))}
    </div>
  )
}

export default TrendingProducts
