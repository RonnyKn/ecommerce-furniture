import React, { useState } from "react"
import { MdOutlineAddCircle } from "react-icons/md"
import { motion } from "framer-motion"
import { toast } from "react-toastify"

import { db, storage } from "../firebaseConfig/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const AddProducts = () => {
  const [enterName, setEnterName] = useState("")
  const [enterShortDesc, setEnterShortDesc] = useState("")
  const [enterDescription, setEnterDescription] = useState("")
  const [enterPrice, setEnterPrice] = useState("")
  const [enterCategory, setEnterCategory] = useState("")
  const [enterImg, setEnterImg] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate("")

  const addProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    //add product to firebase
    try {
      const docRef = await collection(db, "products")

      const storageRef = ref(
        storage,
        `productImg/${Date.now().toString() + enterImg.name}`
      )

      const uploadTask = uploadBytesResumable(storageRef, enterImg)

      uploadTask.on(
        () => {
          toast.error("images not uploaded")
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await addDoc(docRef, {
              productName: enterName,
              shortDesc: enterShortDesc,
              description: enterDescription,
              price: enterPrice,
              category: enterCategory,
              imgUrl: downloadUrl,
            })
          })
        }
      )
      setLoading(false)
      toast.success(`product ${enterName} successfully added! `)
      navigate("/dashboard/all-products")
    } catch (error) {
      setLoading(false)
      toast.error("failed to add product", error.message)
    }
  }

  return (
    <section className="admin__addProducts">
      <div className="container admin__addProducts-container">
        <h3 className="section-title">Add Products</h3>
        <p className="required-text">(*) Required</p>
        {loading ? (
          <h1 className="section-title">Loading..</h1>
        ) : (
          <form onSubmit={addProduct}>
            <div className="form-group">
              <label>Product Name*</label>
              <input
                type="text"
                placeholder="Ex: Iphone 13 Pro.."
                required
                value={enterName}
                onChange={(e) => setEnterName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Short Description*</label>
              <input
                type="text"
                placeholder="Enter Tagline Product.."
                required
                value={enterShortDesc}
                onChange={(e) => setEnterShortDesc(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label>Description*</label>
              <textarea
                type="text"
                placeholder="Enter Description Product.."
                required
                value={enterDescription}
                onChange={(e) => setEnterDescription(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="form-group2">
              <div>
                <label>Product Image*</label>
                <input
                  type="file"
                  required
                  onChange={(e) => setEnterImg(e.target.files[0])}
                />
              </div>
              <div>
                <label>Price*</label>
                <input
                  type="number"
                  placeholder="Ex: 200.."
                  required
                  value={enterPrice}
                  onChange={(e) => setEnterPrice(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div>
                <label>Category*</label>
                <select
                  value={enterCategory}
                  onChange={(e) => {
                    setEnterCategory(e.target.value)
                  }}
                >
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="mobile">Mobile</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </div>

            <div className="form-group"></div>

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
        )}
      </div>
    </section>
  )
}

export default AddProducts
