import React from 'react'

 function ChildClass(props) {
  return (
    <div>
       <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}

export default ChildClass