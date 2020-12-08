import React from 'react'
import Images from './Images'

export default function AboutMe(){
    return(
        <div id='about-me'>
            <div id='about-me-text'>
                <h1>Hello!</h1>
                <p>My name is Bob Whitmer and I am a former Chef who became a software engineer. 
                    I currently live in Denver, Colorado with my growing family and two dogs!
                    Outside of development, I enjoy playing soccer, snowboarding, and beating 
                    anyone who dares challenge me in Mario Kart. I am also a Cincinnati sports fan 
                    so you know I'm loyal to a fault.
                </p>
            </div>
            <div id='bob-and-frank' alt='Bob and son'>
                <Images image='about-me'/>
            </div>
        </div>
    )
}