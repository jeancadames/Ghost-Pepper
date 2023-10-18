export const Gallery = () => {
  return (
    <section className="section container">
        <div className="gallery">
            <h1 className="section-title">Our Gallery</h1>
            <span>Whether you're planning a romantic dinner for two, a family gathering, or a corporate event. We take pride in providing not only delicious food but also a memorable dining experience that engages all your senses.</span>

            <div className="gallery-container">
                <div className="gallery-image-container">
                    <img src="assets\gallery-img-3.jpg" alt=""/>
                </div>
                <div className="gallery-image-container second-img">
                    <img src="assets\gallery-img-1.jpg" alt=""/>
                </div>
                <div className="gallery-image-container">
                    <img src="assets\gallery-img-3.jpg" alt=""/>
                </div>
                <div className="gallery-image-container">
                    <img src="assets\gallery-img-2.jpg" alt=""/>
                </div>
                <div className="gallery-image-container">
                    <img src="assets\gallery-img-4.jpg" alt=""/>
                </div>
                <div className="gallery-image-container">
                    <img src="assets\gallery-img-2.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}
