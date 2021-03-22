import React from 'react'

export default function Gallery() {
    return (
        <section className="gallery main-layout">

            <div className="svg-gray left"></div>
            <div className="svg-gray right"></div>

            <div className="bg-svg-enjoy"></div>
            <div className="bg-svg-locally"></div>

            <div className="enjoy-txt">
                <div className="divider"></div>
                <h1>Enjoyable place for all the family</h1>
                <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
  a tour of the farm before your meal.</p>
            </div>

            <div className="locally-txt">
                <div className="divider"></div>
                <h1> The most locally sourced food</h1>
                <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
  eating the freshest, most sustainable food.</p>
            </div>

        </section>
    )
}
