import {Link} from 'react-router-dom'
import './index.css'
const Header = () => {
  return (
    <div className="header">
      <Link className="lin" to="/">
        Home
      </Link>
      <Link to="/live" className="line">
        Live Match
      </Link>
    </div>
  )
}

export default Header
