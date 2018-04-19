import React from 'react'
import Thumbnail from './Thumbnail'

const isActive = (index, selectedIndex) => index === selectedIndex ? true : false

const ThumbnailsList = (props) => {
  const context = props.context
  const images = context.images
  const selectedIndex = context.state.selectedIndex 
  return (
    <ul className="image-gallery--thumbnail-list left">
      {images.map((image, index) => (
          <Thumbnail key={index} clickHandler={context.clickImage.bind(context, index)} imageObject={image} isActive={isActive(index, selectedIndex)} />
        )
      )}
    </ul>
  )
}
 
ThumbnailsList.propTypes = {
  context: React.PropTypes.object.isRequired
}

export default ThumbnailsList
