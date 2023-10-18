import { Link } from "react-router-dom"
import { ExtraContentAbout } from "./ExtraContentAbout"

export const About = (isHomePage) => {
  return (
    <section className="section container" id="about">
            <h1 className="section-title">About us</h1>
            <div className="about">
                <img src="assets\about-img.jpg" alt=""/>
                <div className="about-content">
                    <h3>The history of</h3>
                    <h4>Our Restaurant</h4>
                    <p>
                        Years ago, I was working in a small kitchen in my hometown. I dreamed of opening my own restaurant, but I 
                        knew I needed more experience. I worked hard for years, studying and saving every penny I could for my 
                        business. Finally, after years of effort, I had enough money to open my own 
                        restaurant. With my dedication 
                        and culinary knowledge, I gained the respect and loyalty of my customers and my restaurant became a great 
                        success. 
                    </p>
                    <br/>
                    <p>
                        Now, many years later, I still work at my restaurant with the same passion and dedication I had from day one, 
                        serving the best food I can make.
                    </p>
                    {/* {
                        isHomePage 
                        ? <Link className="btn">Read More</Link>
                        : <ExtraContentAbout/>
                    } */}
                </div>
            </div>
        </section>
  )
}
