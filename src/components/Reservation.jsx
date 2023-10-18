export const Reservation = () => {
  return (
    <section className="section container" id="reservation">
        <div className="reservation">
            <h2 className="section-title">Make Reservation</h2>
            <span>To make a reservation, simply fill out the form below with your preferred date, time, and the number of guests in your party. Our dedicated team will promptly review your request and get back to you with a confirmation. We highly recommend making reservations in advance to secure your preferred dining slot, as we tend to book up quickly, especially during peak hours.</span>
            <form action="">
                <div className="schedule-info-container">
                    <input type="date" placeholder="Select Date"/>
                    <input type="time" min="9:00" max="23:00" step="1800" placeholder="Select Time"/>
                    <input type="number" placeholder="Total Guest"/>
                </div>
                <textarea className="form-txt">Special Message</textarea>
                <button className="cta">Book Your Seat</button>
            </form>
        </div>
    </section>
  )
}
