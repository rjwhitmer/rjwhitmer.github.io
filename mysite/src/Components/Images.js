import React from 'react'
import family from '../Images/carol edit 5.jpg'

export default function Images(props){
    const image = (props) => {
        if (props.image === "about-me"){
            return family
        }
    }

    return(
        <img id='bob-and-frank' alt='Bob and son' src={image(props)}></img>
    )
}