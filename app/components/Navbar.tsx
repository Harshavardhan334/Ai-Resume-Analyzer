import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to='/'>
        <p className="text-2xl font-bold text-gradient">
            Home
        </p>
        </Link>
        <Link to='/upload'>
        <p className="primary-button w-fit">
            Upload resume
        </p>
        </Link>
    </nav>
  )
}

export default Navbar
