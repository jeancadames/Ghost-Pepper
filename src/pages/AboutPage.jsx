import { About, Footer, Gallery, Navbar } from "../components"

export const AboutPage = () => {
  return (
    <>
    <Navbar backgroundImageNumber={2}/>
    <About isHomePage={false}/>
    <Gallery/>
    {/* <Footer/> */}
    </>
  )
}
