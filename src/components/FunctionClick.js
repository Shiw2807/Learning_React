import React from 'react'

export default function FunctionClick() {

  function clickHandlder(){
        console.log("Button Clicked")
    }
    
  return (
    <div>
      {/* <button onClick={clickHandlder()}>Click</button> //Not a function definition so won't work.
      <button onClick={()=>clickHandlder()}>CLick Me</button>  */}
      <button onClick={clickHandlder}>Clickk</button>
    </div>
  )
}
