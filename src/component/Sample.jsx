// import React, { Component } from 'react'

//  class Sample extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0,
//         }
//     }

//     componentDidMount(){
//       console.log("Component is mounted")
//     }

//     shouldComponentUpdate(nextProps, nextState){
//         // if(nextState.count === 1){
//         //   return false
//         // }
//         // return true
//         console.log("Component should update")
//         return true
//     }

//     componentDidUpdate(){
//       console.log("Component Did Update")
//     }

//     componentWillUnmount(){
//       console.log("Component Will Unmount")
//     }

//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>This is a sample component</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// export default Sample

import React, { useState, useEffect } from 'react'
import styles from "../css/Sample.module.css"
import NavStyle from "../css/NavBar.module.css"
// import styled from "styled-components"
import styled from "@emotion/styled"
import { css } from '@emotion/react'

function Sample() {
  // let count=0
  const [count, setCount]=useState(0)
  const [name, setName]=useState("Shamaya")
  useEffect(()=>{
    console.log("Component is mounted")
    return ()=>{
      console.log("Component Will Unmount")
    }
  }, [name]) // [] is dependency array, if we want to run useEffect only once when component is mounted, we can pass empty array

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
      <h3>{name}</h3>
      <button onClick={()=>setName("Shamaya")}>Change Name</button>
      <button css={funcButton} onClick={increment}>Increment</button>
      <Button danger onClick={decrement}>decrement</Button>
      <button className='bg-blue-500 text-white px-4 py-2'>Sample</button>
    </div>
  )
}


export default Sample

const funcButton=css`
    background-color: yellow;
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 10px;
  ` 
const Button=styled.button`
    background-color: ${props=>props.danger ? "red" : "green"};
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 10px;
  `