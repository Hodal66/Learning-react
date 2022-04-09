import React, { useState} from "react";
import './index.css'
const App =()=>{
 const [counter,setCounter] = useState(0)

 const handleIncrease=()=>{
   setCounter(counter + 1)
 }
 const handleDecrease =()=>{
   setCounter(counter - 1)
 }
  return(
    <div className="container">
      <h1>show me</h1>
      
      <button className="btn1" onClick={handleIncrease}>increase</button>
      <h1>{counter}</h1>
      <button className="btn2" onClick={handleDecrease}>Decrease</button>
      </div>
  )
}


export default App;





















// import React, { useState } from "react";

// const App = () => {
// // Counter is a state initialized to 0
// const [counter, setCounter] = useState(0)

// // Function is called everytime increment button is clicked
// const handleClick1 = () => {
// 	// Counter state is incremented
// 	setCounter(counter + 1)
// }

// // Function is called everytime decrement button is clicked
// const handleClick2 = () => {
// 	// Counter state is decremented
// 	setCounter(counter - 1)
// }

// return (
// 	<div>
// 	Counter App
// 	<div>
// 		{counter}
// 	</div>
// 	<div className="buttons">
// 		<button className="btn1"
// 		onClick={handleClick1}>Increment</button>
// 		<button className="btn2"
// 		onClick={handleClick2}>Decrement</button>
// 	</div>
// 	</div>
// )
// }

// export default App
