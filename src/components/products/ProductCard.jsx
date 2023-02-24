import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { setAddItems } from "../../redux/slice/cartSlice"

const ProductCard = ({
  item: { id, imgUrl, productName, price, category },
  pages,
}) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    const item = {
      id,
      productName,
      price,
      imgUrl,
    }
    dispatch(setAddItems(item))
  }
  return (
    <div className="trending">
      <Link to={`${pages === "shop" ? "" : "shop/"}${id}`}>
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={imgUrl}
          alt={`${imgUrl}.png`}
        />
      </Link>
      <h5>
        <Link to={`${pages === "shop" ? "" : "shop/"}${id}`}>
          ~{productName}~
        </Link>
      </h5>
      <p className="trending-category">{category}</p>
      <div className="trending-cart">
        <p>
          <strong> $ {price}</strong>
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addToCart}
        >
          <BsFillPlusCircleFill size="1.8em" />
        </motion.button>
      </div>
    </div>
  )
}

export default ProductCard
