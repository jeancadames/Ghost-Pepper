import { Blog, Footer, Navbar, SidebarBlog } from "../components"
import { ActualBlog } from "../components/ActualBlog"

export const BlogPage = () => {
  return (
    <>
        <Navbar/>
        <Blog/>
        <div className="actual-blog container">
            <ActualBlog/>
            <SidebarBlog/>
        </div>
        {/* <Footer/> */}
    </>
  )
}
