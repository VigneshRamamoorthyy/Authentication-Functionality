import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="header-lists">
      <Link className="header-item" to="/">
        <li>Home</li>
      </Link>
      <Link className="header-item" to="/about">
        <li> About</li>
      </Link>
    </ul>
  </div>
)

export default Header
