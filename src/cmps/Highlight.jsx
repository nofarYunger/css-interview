import React from 'react'
import { ItemList } from './ItemList'

export function Highlight() {
    return (
        <section className="highlights">
            <div className="highlight-container column flex space-between justify-center align-center main-layout">

                <div className="flex column highlight-txt">
                    <div className="divider"></div>
                    <h3>A few highlights from our menu</h3>
                    <p className="highlight-summery">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
  Our menu is revamped every season.</p>
                </div>
                <ItemList></ItemList>

            </div>


        </section>
    )
}
