import React from "react"
import { MdOutlineAddCircle } from "react-icons/md"
import { motion } from "framer-motion"

const AddProducts = () => {
  return (
    <section className="admin__addProducts">
      <div className="container admin__addProducts-container">
        <h3 className="section-title">Add Products</h3>
        <p className="required-text">(*) Required</p>
        <form onSubmit={() => {}}>
          <div className="form-group">
            <label>Product Name*</label>
            <input type="text" placeholder="Ex: Iphone 13 Pro.." required />
          </div>

          <div className="form-group">
            <label>Short Description*</label>
            <input type="text" placeholder="Enter Tagline Product.." required />
          </div>

          <div className="form-group">
            <label>Description*</label>
            <textarea
              type="text"
              placeholder="Enter Description Product.."
              required
            />
          </div>

          <div className="form-group">
            <label>Price*</label>
            <input type="number" placeholder="Ex: 200.." required />
          </div>

          <div className="form-group">
            <label>Category*</label>
            <select onChange={() => {}}>
              <option value="sofa">Sofa</option>
              <option value="chair">Chair</option>
              <option value="sofa">Mobile</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>

          <div className="form-group">
            <label>Product Image*</label>
            <input type="file" required />
          </div>

          <div className="addProducts-btn">
            <motion.button
              type="submit"
              className="btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Add
              <MdOutlineAddCircle size="1.5em" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddProducts
