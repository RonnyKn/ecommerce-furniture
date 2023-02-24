import "./Products.css"
import React from "react"
import ProductCard from "./ProductCard"

const TrendingProducts = ({ filteredProducts, pages }) => {
  return (
    <div className="container trending__products-container">
      {filteredProducts.map((item, idx) => (
        <ProductCard item={item} key={idx} pages={pages} />
      ))}
    </div>
  )
}

export default TrendingProducts
