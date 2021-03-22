import React from 'react'

export function Banner() {
    return (
        <section className="banner flex justify-center align-center">
            <div className="main-layout flex space-between align-center " style={{width:'100%'}}>

                <h1>Ready to make a reservation?</h1>
                <button className="primary-btn">Book a table</button>
            </div>
        </section>
    )
}
