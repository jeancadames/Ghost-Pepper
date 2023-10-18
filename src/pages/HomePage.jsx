import { About, Blog, Footer, Gallery, ImageBanner, Menu, Navbar, Newsletter, Recipe, Reservation, Service, Testimonial } from '../components/index'

export const HomePage = () => {
  return (
    <>
    <Navbar backgroundImageNumber={1}/>
    <About isHomePage={true}/>
    <Service/>
    <Menu/>
    <ImageBanner/>
    {/* <Recipe/> */}
    <Gallery/>
    {/* <Testimonial/> */}
    <ImageBanner/>
    <Blog/>
    <Reservation/>
    {/* <Newsletter/> */}
    {/* <Footer/> */}
    </>
  )
}
