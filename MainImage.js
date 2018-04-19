import React from 'react'

const MainImage = (props) => {
  const imageObject = props.image
  const mainImage = `${imageObject.mainImage}?$pdp$`
  return (
    <div className="image-gallery--main-image left">
      <img src={mainImage} alt={imageObject.imageAlt} />
    </div>
  )
}
 
MainImage.propTypes = {
  image: React.PropTypes.object.isRequired
}

export default MainImage
