import "./Services.css"
import React from "react"
import serviceData from "../../assets/data/serviceData"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <div className="container services-container">
      {serviceData.map((val, idx) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="service"
          style={{ background: `${val?.bg}` }}
          key={idx}
        >
          <div className="service-icon">{val?.icon}</div>
          <div className="service-desc">
            <span>{val?.title}</span>
            <p>{val?.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Services
