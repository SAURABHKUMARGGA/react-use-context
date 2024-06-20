import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Gallery() {
  const data = useOutletContext();
  return (
    <div>Gallery {data.name}</div>
  )
}

export default Gallery