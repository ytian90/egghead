// 18. Understand React.Children Utilities

import React from 'react'

class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>

      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {
    // console.log(this.props.children)
    // case 1
    // let items = React.Children
    //   .map(this.props.children, child => child)
    // case 2
    // let items = React.Children.toArray(this.props.children)
    // case 3
    // let items = React.Children
    //   .forEach(this.props.children, child => console.log(child.props.className))
    // case 4 only one child
    let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App
