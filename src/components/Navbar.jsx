import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(faBars, faCircleXmark);

export const Navbar = ({backgroundImageNumber}) => {
  return (
    <>
    <header>
    <nav className="navbar-container container" >
            <h3><Link to={'/'}>Ghost Pepper</Link></h3>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'} >About</Link></li>
                <li><Link to={'/menu'}>Menu</Link></li>
                <li><Link to={'/reservation'}>Reservation</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
                {/* <li><Link >Our Team</Link></li> */}
                {/* <li><Link >Contact</Link></li> */}
            </ul>
            {/* <Link href="#" className="cta">Booking now</Link> */}
            <FontAwesomeIcon className="fa-solid fa-bars"/>
        </nav>
        <div className="hero-container">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Your 
                        <span className="fav-color"> favourite food </span> 
                        delivered 
                        <span className="red-color"> hot </span>  
                        & 
                        <span className="green-color"> fresh </span>
                    </h1>
                    <p>
                        When they're not learning from staff, customers and fellow owners, 
                        restauraterus often take cues from food blogs and online resources 
                        written by restaurant managers and foodies.
                    </p>
                        {/* <button className="cta">Order now<i className="fa-solid fa-arrow-right"></i> </button> */}
                </div>
                <div className="hero-images">
                    <div className="image-block">
                        <img src="src\assets\block-img-1.jpg" alt=""/>
                    </div>
                    <div className="image-block">
                        <img src="src\assets\block-img-2.jpg" alt=""/>
                    </div>
                    <div className="image-block">
                        <img src="src\assets\block-img-3.jpg" alt=""/>
                    </div>
                    <div className="image-block">
                        <img src="src\assets\block-img-4.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <nav>
            <nav className="navbar-mobile-container container">
                <ul>
                    <li><h3>Ghost Pepper</h3> <FontAwesomeIcon icon="fa-regular fa-circle-xmark"/></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Other page</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#" className="cta">Booking now</a></li>
                </ul>
            </nav>
        </nav>
    </header>
    </>
  )
}
