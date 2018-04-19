import React from 'react'

const Thumbnail = (props) => {
  const isActive = props.isActive
  const imageObject = props.imageObject
  const baseClass = 'image-gallery--thumbnail'
  const cssClass = isActive ? `${baseClass} is-active` : baseClass
  const mainImage = `${imageObject.mainImage}?$alt-thumb$`
  const altTag = `Thumnail ${imageObject.imageAlt}`
  return (
    <li>
      <img className={cssClass} src={mainImage} alt={altTag} onClick={props.clickHandler} />
    </li>
  )
} 

Thumbnail.propTypes = {
  imageObject: React.PropTypes.object.isRequired,
  isActive: React.PropTypes.bool.isRequired,
  clickHandler: React.PropTypes.func.isRequired
}

export default Thumbnail
