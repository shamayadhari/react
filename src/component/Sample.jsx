// import React from 'react'
// import { add } from "./utility"

// function Sample(props) {
//     console.log(add(2,4))
//   return (
//     <div>
//       <h2>Trending Topics</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod voluptatum iure incidunt, temporibus sequi iusto, pariatur maxime commodi ducimus, nihil autem. Magni modi praesentium, fuga culpa ad animi laboriosam!</p>
//        <button
//           className="counter"
//           onClick={() => props.setCount((count) => count + 1)}
//         >
//           Count is {props.count}
//         </button>
//     </div>
//   )
// }

// export default Sample

// import React, {Component} from 'react'

// class Sample extends Component{
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }

//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     componentDidMount() {
//       console.log("Component is Mounted")
//     }

//     shouldComponentUpdate(nextProps, nextState){
//       console.log("Component should update")
//       return false 
//     }
    
//     componentDidUpdate(){
//       console.log("Component Did update")
//     }

//     increment = () => {
//       this.setState({count: this.state.count + 1})
//     }

//     render(){
//         return (
//         <div>
//           <h1>This is Sample Components</h1>
//            <button
//             className="counter"
//             onClick={() => this.props.setCount((count) => count + 1)}
//             >
//             Count is {this.props.count}
//             </button>
//         </div>
//     )
//     }
// }
// export default Sample

// import React from 'react'
// import { useState } from 'react'

// function Sample() {
//   // let count=0
//   const [count, setCount]=useState(0)
  
//   const increment = () => {
//        setCount(count + 1)
//     }

//     const decrement = () => {
//        setCount(count - 1)
//     }
//   return (
//     <div>
//       <h1>This is a sample component</h1>
//       <h2>{count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default Sample

import React from 'react'
import { useState } from 'react'

function Sample() {
  // let count=0
  const [count, setCount]=useState(0)
  
  const increment = () => {
       setCount(count + 1)
    }

    const decrement = () => {
       setCount(count - 1)
    }
  return (
    <div>
      <h1>This is a sample component</h1>
      <h2>{count}</h2>
      <button style={{backgroundColor:"red",color:"white", width:"100px", height:"30px"}} onClick={increment}>Increment</button>
      <button style={{backgroundColor:"yellow", color:"black", width:"100px", height:"30px"}} onClick={decrement}>decrement</button>
    </div>
  )
}

export default Sample