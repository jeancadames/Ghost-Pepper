export const Footer = () => {
  return (
    <footer>
        <div className="footer-col schedule">
            <h1>Ghost Pepper</h1>
            <span>Experience a culinary journey like no other at Ghost Pepper.Indulge in our expertly crafted dishes and savor the flavors of every bite.
            </span>
            <h3>Our opening time</h3>
            <div className="footer-schedule">
                <span>Day Mon-Tues  Time 22:35</span>
                <span>Day Tues-Sat  Time 25:47</span>
            </div>
        </div>
        <div className="footer-col">
            <h3>Our menu</h3>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our services</li>
                <li>Our menu</li>
                <li>Testimonial</li>
                <li>Contact</li>
            </ul>

        </div>
        <div className="footer-col">
            <h3>Visit us</h3>
            <div className="footer-sub-col">
                <i className="fa-solid fa-phone"></i>
                <div className="footer-sub-col-info">
                    <span>1+ 123 456 7890</span>
                    <span>1+ 123 456 7890</span>
                </div>
            </div>
            <div className="footer-sub-col">
                <i className="fa-solid fa-envelope"></i>
                <div className="footer-sub-col-info">
                    <span>myemail@email.com</span>
                    <span>myotheremail@email.com</span>
                </div>
            </div>
            <div className="footer-sub-col">
                <i className="fa-solid fa-location-dot"></i>
                <div className="footer-sub-col-info">
                    <span>Number, street, road number</span>
                    <span>city name, country</span>
                </div>
            </div>
        </div>
    </footer>
  )
}
