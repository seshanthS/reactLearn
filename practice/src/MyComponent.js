import React, {Component} from 'react'
import SecondComponent from './SecondComponent'

class MyComponent extends Component {
  constructor(props){
    super()
    this.setState = {
      value: props.value
    }
  }

  render(){
    return(
      <div>
        <h1>Test Component</h1>
        <SecondComponent  />
      </div>
    )
  }
}

export default MyComponent