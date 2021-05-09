import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Front = () => {
    return (
    <div>
            
      <h1>Welcome To SolarMate</h1>
      <p>See how renewable sources impact your energy consumption</p>     
      <Link to ='/Home' ><button className="button-lnd" type="submit">Lets Go!</button></Link>
    </div>
    )
}

export default Front
