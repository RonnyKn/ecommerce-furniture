import "./Shop.css"
import React, { useState } from "react"
// import { BiSearch } from "react-icons/bi"
// import { motion } from "framer-motion"
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

  const handleSearch = (e) => {
    const searchValue = e.target.value

    const filteredProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    )
    return setDataProducts(filteredProduct)
  }

  const handleSort = (e) => {
    const sortValue = e.target.value

    if (sortValue === "ascending") {
      const sortProducts = products.sort()
      return setDataProducts(sortProducts)
    }

    // if (sortValue === "descending") {
    //   const sortProducts = products.reverse().sort()
    //   return setDataProducts(sortProducts)
    // }
  }
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

            <select onChange={handleSort}>
              <option>Sort By </option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>

          <div className="search-box">
            <input
              type="search"
              placeholder="Search.."
              onChange={handleSearch}
            />
            {/* <span>
              <BiSearch size="1em" />
            </span> */}
          </div>
        </div>
        {dataProducts.length === 0 ? (
          <h3 style={{ textAlign: "center", marginTop: "5rem" }}>
            Data not Found!
          </h3>
        ) : (
          <TrendingProducts filteredProducts={dataProducts} pages="shop" />
        )}
      </section>
    </section>
  )
}

export default Shop
