import React, { Component } from 'react'
import ChildClass from './ChildClass'

class ParentClass extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           parentName: "Parent"
        }
        this.greetParent=this.greetParent.bind(this)
      }
  
      greetParent(){
         alert(`Hello ${this.state.parentName}`)
      }
      
  render() {
    return (
      <div>
        <ChildClass greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentClass
