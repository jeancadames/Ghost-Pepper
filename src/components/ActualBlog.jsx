import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { BlogComments } from "./index";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCalendar, faUser, faComment);

export const ActualBlog = () => {
  return (
            <div className="actual-blog-container">
                <img src="src\assets\blog-banner-img.jpg" alt=""/>
                <h1>Launch: Food Innovation Challenge in Asia-Pacific Region</h1>
                <div className="blog-author-container">
                    <FontAwesomeIcon icon="fa-solid fa-user"/>
                    <span>John Doe</span>
                    <FontAwesomeIcon icon="fa-solid fa-calendar"/>
                    <span>August 1, 2021</span>
                    <FontAwesomeIcon icon="fa-solid fa-comment"/>
                    <span>21 comments</span>
                </div>
                    <p>The vibrant and diverse flavors of Asia-Pacific cuisine have captivated food enthusiasts around the globe. In recognition of the immense culinary talent and cultural richness of the region, an exciting challenge has emerged: The Delights of the Asia-Pacific. This unique competition invites restaurants to showcase their mastery of regional dishes while vying for a substantial monetary reward. In this blog, we will explore the significance of this challenge and how it contributes to the elevation of Asia-Pacific cuisine as a global culinary phenomenon.
                    </p>
                    <br/>
                    <p>
                        The Delights of the Asia-Pacific challenge provides a platform for restaurants to celebrate and honor the culinary heritage of the region. From the aromatic spices of Southeast Asia to the delicate flavors of East Asian cuisine, each dish tells a story and reflects the unique traditions and cultures that have shaped it. By participating in this challenge, restaurants have the opportunity to pay homage to their culinary roots, preserving and promoting the authentic flavors that make Asia-Pacific cuisine so exceptional.
                    </p>
                    <br/>
                    <p>
                        The challenge encourages participating restaurants to push the boundaries of creativity and innovation in their culinary offerings. While respecting the essence of traditional recipes, chefs are invited to infuse their dishes with contemporary twists, blending flavors and techniques to create unique gastronomic experiences. This sparks a wave of culinary experimentation, inspiring chefs to explore new ingredients, cooking methods, and presentations. Through this process, the challenge not only enriches the dining experience but also paves the way for culinary trends that redefine the perception of Asia-Pacific cuisine.
                    </p>
                    <br/>
                    <p>
                        The Delights of the Asia-Pacific challenge not only aims to showcase the immense talent of local restaurants but also to promote culinary tourism in the region. By highlighting the diverse flavors and exceptional dining experiences available, the challenge entices food enthusiasts from around the world to embark on a culinary journey across the Asia-Pacific. As the reputation of participating restaurants grows, they become beacons for travelers seeking authentic and remarkable culinary encounters. The challenge thus contributes to the economic growth of the region and strengthens its position as a premier culinary destination.
                    </p>
                    <br/>
                    <div className="write-comment-container">
                        <textarea placeholder="Your comment..." className="form-txt"></textarea>
                    </div>
                    <BlogComments/>
                </div>
  )
}
