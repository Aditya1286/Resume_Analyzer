import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar" style={{ backgroundColor: 'rgba(128, 0, 128, 0.5)' }}>
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">AuthentiCV</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar