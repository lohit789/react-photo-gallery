import React, { Component } from 'react'
import MainImage from './components/MainImage'
import ThumbnailsList from './components/ThumbnailsList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.images = []
    this.state = {
      selectedIndex: 0
    }
    this.clickImage = this.clickImage.bind(this)
  }
  componentWillMount() {
    const thumbnails = this.props.thumbnails
    this.images.push(...thumbnails)
  }
  clickImage = (key) => {
    this.setState({
      selectedIndex: key 
    })
  }
  render() {
    const index = this.state.selectedIndex || 0
    return (
      <div className="image-gallery">
        <MainImage image={this.images[index]} />
        <ThumbnailsList context={this} />
      </div>
    )
  }
}

App.propTypes = {
  thumbnails: React.PropTypes.array.isRequired
}

export default App; 
