import React from 'react'
function Navbar(props) {
  // props.list="Cricket"
  // console.log(props.list)

  return (
    <div>
      <h2> This is a NavBar</h2>
      <ul>
        <li>{props.list}</li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/sample">Sample</Link></li>
        <li><NavLink to="/sample" className="hover:text-blue-500"  >Sample</NavLink></li>
      </ul>
      <h3> Logo</h3>
    </div>
  )
}

export default Navbar