export const Recipe = () => {
  return (
    <section className="section recipe">
        <div className="container">
            <h1 className="section-title">
                Recipe of the day
            </h1>
            <p>Here you'll find a selection of our most popular dishes, made with fresh, locally-sourced ingredients and cooked to perfection by our talented chefs. Whether you're looking for a hearty breakfast, a light lunch, or a decadent dinner, we've got you covered.</p>
            <div className="recipe-container">
                <div className="recipe-text">
                    <small>This is a popular Thai dish consisting of stir-fried rice noodles, eggs, tofu, and vegetables, served with peanuts, lime wedges, and a savory sauce. The dish can be customized with a variety of protein options, such as shrimp, chicken, or beef.</small>
                    {/* <a className="cta-alt">Order now</a> */}
                </div>
                <div className="recipe-img">
                    <img src="assets\recipe-img.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}
