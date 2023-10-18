import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonialData } from "../data/testimonials";

library.add(faStar);

export const Testimonial = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="section container">
            <div className="testimonials">
                {/* <h1 className="section-title">Testimonials</h1> */}
                <div className="testimonial-container">
                <Carousel 
                    responsive={responsive}
                    containerclassName="carousel-container"
                    swipeable={true}
                    draggable={true}
                    autoPlaySpeed={1000}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListclassName="custom-dot-list-style"
                    itemclassName="carousel-item-padding-40-px"
                    >
                    {
                        testimonialData.map(testimonial => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-img">
                                    <img src={`src/assets/testimonial-profile-img-${testimonial.id}.jpg`} alt=""/>
                                    <h3>{testimonial.testimonialName}</h3>
                                    <span>{testimonial.status}</span>
                                </div>
                                <div className="testimonial-comment">{testimonial.testimonial}
                                    <div className="stars-container">
                                        <FontAwesomeIcon icon="fa-solid fa-star"/>
                                        <FontAwesomeIcon icon="fa-solid fa-star"/>
                                        <FontAwesomeIcon icon="fa-solid fa-star"/>
                                        <FontAwesomeIcon icon="fa-solid fa-star"/>
                                        <FontAwesomeIcon icon="fa-solid fa-star"/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
                </div>
            </div>
        </section>
  )
}
