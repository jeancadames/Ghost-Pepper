export const SidebarBlog = () => {
  return (
    <div className="blog-sidebar">
        <input type="search" className="search-bar" placeholder="Search blog..."/>
        <h5>Recent posts</h5>
        <div className="recent-posts-container">
            <div className="recent-post">
                <img src="assets\blog-icon-img.jpg" alt=""/>
                <div className="recent-post-details">
                    <h5>Velveet Mac and Cheese</h5>
                    <span>August 1, 2022</span>
                </div>
            </div>
            <div className="recent-post">
                <img src="assets\blog-icon-img.jpg" alt=""/>
                <div className="recent-post-details">
                    <h5>Velveet Mac and Cheese</h5>
                    <span>August 1, 2022</span>
                </div>
            </div>
            <div className="recent-post">
                <img src="assets\blog-icon-img.jpg" alt=""/>
                <div className="recent-post-details">
                    <h5>Velveet Mac and Cheese</h5>
                    <span>August 1, 2022</span>
                </div>
            </div>
        </div>
    </div>
  )
}
