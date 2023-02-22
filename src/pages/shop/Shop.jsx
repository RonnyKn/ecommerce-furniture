import "./Shop.css"
import React, { useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { motion } from "framer-motion"
import TrendingProducts from "../../components/products/TrendingProducts"
import products from "../../assets/data/products"

const Shop = () => {
  const [dataProducts, setDataProducts] = useState(products)

  const handleFilter = (e) => {
    const filterValue = e.target.value

    if (filterValue === "all") {
      return setDataProducts(products)
    } else {
      const filteredProduct = products.filter(
        (item) => item.category === filterValue
      )
      return setDataProducts(filteredProduct)
    }
  }
  // useEffect(() => {}, [])

  return (
    <section className="shop">
      <section className="shop__hero">
        <h1>Products</h1>
      </section>

      <section className="shop__filter">
        <div className="container shop__filter-container">
          <div className="filter-widget">
            <select onChange={handleFilter}>
              <option value="all">Filter By Category</option>
              <option value="chair">Chair</option>
              <option value="mobile">Mobile</option>
              <option value="sofa">Sofa</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>

            <select onChange={handleFilter}>
              <option>Sort By </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search.." />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BiSearch size="2em" />
            </motion.button>
          </div>
        </div>
        {/* {dataProducts.length === 0 ? (
          <h1>Data not Found!</h1>
        ) : (
          )} */}
        <TrendingProducts filteredProducts={dataProducts} />
      </section>
    </section>
  )
}

export default Shop
