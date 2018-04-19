import {mount} from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import App from './App'
import thumbnails from './data.js'

describe('<App />', () => {
  it('calls componentWillMount', () => {
    sinon.spy(App.prototype, 'componentWillMount')
    const wrapper = mount(<App thumbnails={thumbnails} />)
    expect(App.prototype.componentWillMount.calledOnce).toEqual(true)
  })
  
  it('thumbails prop === data array', () => {
    const wrapper = mount(<App thumbnails={thumbnails} />)
    expect(wrapper.find('ul').children().length).toEqual(thumbnails.length)
    expect(wrapper.props().thumbnails).toEqual(thumbnails)
  })
  
  it('selectedIndex === 0', () => {
    const wrapper = mount(<App thumbnails={thumbnails} />)
    expect(wrapper.state().selectedIndex).toEqual(0)
  })

  it('clicked will update state', () => {
    const wrapper = mount(<App thumbnails={thumbnails} />)
    wrapper.find('img.image-gallery--thumbnail').at(2).simulate('click')
    expect(wrapper.state().selectedIndex).toEqual(2)
  })
}) 

