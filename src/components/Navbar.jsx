import img from "../images/airbnb.png"

export default function Navbar() {
    return (
        <nav>
            <img src={img} alt="Airbnb Logo" className="nav--logo" />
        </nav>
    )
}