import React from 'react'
import { Banner } from '../cmps/Banner'
import { Family } from '../cmps/Family'
import Gallery from '../cmps/Gallery'
import Hero from '../cmps/Hero'
import { Highlight } from '../cmps/Highlight'

export default function Home() {
    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
            <Highlight></Highlight>
            <Family />
            <Banner />
        </div>
    )
}
