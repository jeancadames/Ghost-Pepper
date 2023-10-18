export const Blog = () => {
  return (
    <section className="section container" id="blog">
        <div className="blog">
            <h1 className="section-title">Our blogs</h1>
            <div className="blog-container">
                <div className="blog-card">
                    <div className="blog-image">
                        <img src="src\assets\blog-img-1.jpg" alt=""/>
                    </div>
                    <div className="blog-content-container">
                        <h2 className="blog-title">
                            Top five reason to visit
                        </h2>
                        <span className="author">
                            John Doe
                        </span>
                        <span className="blog-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odio rem modi provident soluta iure officiis earum qui dolores, sunt repellendus consequatur reprehenderit rerum. Nulla officiis sequi voluptatibus harum deleniti nesciunt facilis maiores, architecto praesentium quis dignissimos incidunt esse saepe autem ipsa aut quae corrupti corporis aspernatur suscipit exercitationem quos!</span>
                        {/* <a href="#" className="more">Read more <i className="fa-solid fa-right-arrow"></i></a> */}
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-image">
                        <img src="src\assets\blog-img-2.jpg" alt=""/>
                    </div>
                    <div className="blog-content-container">

                        <h2 className="blog-title">
                            Restaurant's Inside Design
                        </h2>
                        <span className="author">
                            Michael Doe
                        </span>
                        <span className="blog-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ipsum aut, vel quo nesciunt, explicabo illum repudiandae accusantium maxime nobis perspiciatis quaerat odio impedit pariatur voluptatibus nemo, ab animi. Eveniet dolores recusandae laudantium vel officia iure qui, quo totam consequatur neque nobis reprehenderit tempora molestiae aspernatur dolorem, laborum amet saepe!</span>
                        {/* <a href="#" className="more">Read more <i className="fa-solid fa-right-arrow"></i></a> */}
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-image">
                        <img src="src\assets\blog-img-3.jpg" alt=""/>
                    </div>
                    <div className="blog-content-container">

                        <h2 className="blog-title">
                            Today special recipe
                        </h2>
                        <span className="author">
                        Martha Doe
                    </span>
                    <span className="blog-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo molestiae praesentium ducimus similique, nostrum omnis, rerum maxime repellat, sequi odit aut minus blanditiis asperiores quis harum officia aperiam tempore distinctio quidem fuga illo dignissimos. Nemo neque illo earum, explicabo labore, recusandae, magni molestiae ut dolore rerum alias? Maiores, unde impedit!</span>
                    {/* <a href="#" className="more">Read more <i className="fa-solid fa-right-arrow"></i></a> */}
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
