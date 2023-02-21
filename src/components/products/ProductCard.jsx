import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { cartActions } from "../../redux/slice/cartSlice"
import { toast } from "react-toastify"

const ProductCard = ({
  item: { id, imgUrl, productName, price, category },
}) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        productName: productName,
        price: price,
        image: imgUrl,
      })
    )
    toast.success("product added to cart!")
  }

  return (
    <div className="trending">
      <Link to="shop:id">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={imgUrl}
          alt={`${imgUrl}.png`}
        />
      </Link>
      <h5>
        <Link to={`shop:id/${id}`}>{productName}</Link>
      </h5>
      <p className="trending-category">{category}</p>
      <div className="trending-cart">
        <p>
          <strong> $ {price}</strong>
        </p>
        <motion.button whileHover={{ scale: 1.1 }} onClick={addToCart}>
          <BsFillPlusCircleFill size="1.8em" />
        </motion.button>
      </div>
    </div>
  )
}

export default ProductCard
