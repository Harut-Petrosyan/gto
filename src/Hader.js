import React from 'react'
import { Link } from 'react-router-dom'

function Hader() {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li><Link to='/'></Link></li>
                <li><Link to='/shop'></Link></li>
                <li><Link to='/contact'></Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Hader
