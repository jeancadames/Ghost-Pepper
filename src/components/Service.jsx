import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTruck, faHeart, faGears } from "@fortawesome/free-solid-svg-icons";

library.add(faTruck, faHeart, faGears);

export const Service = () => {
  return (
    <section className="section container" id="service">
            <h1 className="section-title">Our service</h1>
            <div className="services">
                <div className="services-container">
                    <div className="service-card">
                    <FontAwesomeIcon icon="fa-solid fa-truck" />
                        <h3>Fast delivery</h3>
                        <span>Our delivery restaurant 
                            service offers a convenient and 
                            hassle-free way to enjoy your 
                            favorite meals from the comfort 
                            of your own home.
                        </span>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon icon="fa-solid fa-heart"/>
                        <h3>Fresh foods</h3>
                        <span>Our fresh food service ensures that all of our ingredients are carefully selected and prepared to 
                            ensure maximum freshness and quality.
                        </span>
                    </div>
                    <div className="service-card">
                        <FontAwesomeIcon icon="fa-solid fa-gears"/>
                        <h3>Online booking</h3>
                        <span>Our online booking system allows you to easily make reservations at our restaurant from the comfort of 
                            your own home or on the go.</span>
                    </div>
                </div>
            </div>
        </section>
  )
}
