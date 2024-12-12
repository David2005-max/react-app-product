import React from 'react'
import product from '../product'

const Image = () => {
  return (
    <div>
        <img src={product.imageUrl} alt={product.name} style={{ maxWidth: "100%" }} />;
    </div>
  )
}

export default Image