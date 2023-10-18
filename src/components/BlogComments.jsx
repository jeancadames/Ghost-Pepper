import { blogComments } from "../data/blogComments"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCalendar);

export const BlogComments = () => {
  return (
    <div className="comments-section">
        <h1>Comments</h1>
        {
            blogComments.map(blog => (
                <div key={blog.id} className="comment-container">
                    <div className="comment-author-container">
                        <h3>{blog.author}</h3>
                        <div className="date-comment-container">
                            <FontAwesomeIcon icon="fa-solid fa-calendar"/>
                            <span>{blog.date}</span>
                        </div>
                    </div>
                    <p>{blog.comment}</p>
                </div>
            ))
        }
    </div>
  )
}
