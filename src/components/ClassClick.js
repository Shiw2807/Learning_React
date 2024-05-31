import React, {Component} from 'react'

class Button extends Component{
   
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      this.clickHandler=this.clickHandler.bind(this)// binding event handler
    }
    
    clickHandler(){
        this.setState({
            message: "Bye Bye"
        })
    }

    render(){
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick