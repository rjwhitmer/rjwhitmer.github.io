import React from 'react'
import Images from './Images'

export default function Skills(){
    return (
        <>
            <div id='skills-header'>
                <h1>Here are a few things I've worked on!</h1>
            </div>
            <div id='projects'>
                <div id='project'>
                    <p>This was my capstone project for Flatiron School. It is called <a rel='noreferrer' href='https://rjwhitmer-capstone.web.app' target='_blank'>Forager</a>, and it was designed
                        as an app that you would use while on a hike in order to identify plants and 
                        determine whether or not you could use the plant in a recipe. This utilized React, Django, and
                        Plant.id API.
                    </p>
                    <Images image='forager' />
                </div>
                <div id='project'>
                    <p>This project is called <a rel='noreferrer' href='https://www.github.com/rjwhitmer/pick_it_up_FE' target='_blank'>Pick It Up</a>! It was an earlier school project that was designed
                        for people who wanted to play sports with other users of the platform. Users could 
                        create events, add parks or locations that weren't already listed, and R.S.V.P.! This 
                        utilized Google Maps, Rails, and React!
                    </p>
                    <Images image='pick_it_up' />
                </div>
            </div>
        </>
    )
}