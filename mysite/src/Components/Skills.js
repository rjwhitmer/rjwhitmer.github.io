import React from 'react'

export default function Skills(){
    return (
        <>
            <div id='skills-header'>
                <h1>Skills</h1>
                <p>Here are a few projects I've worked on!</p>
            </div>
            <div id='projects'>
                <div id='capstone'>
                    <p>This was my capstone project. It was called Forager, and it was designed
                        as an app that you would use while on a hike in order to identify plants and 
                        determine whether or not you could use the plant in a recipe. This utilized React and
                        Plant.id API.
                    </p>
                </div>
                <div id='pick-it-up'>
                    <p>This project is called Pick it Up. It was an earlier school project that was designed
                        for people who wanted to play sports with other users of the platform. Users could 
                        create events, add parks or locations that weren't already listed, and R.S.V.P.! This 
                        utilized Google Maps and React!
                    </p>
                </div>
            </div>
        </>
    )
}