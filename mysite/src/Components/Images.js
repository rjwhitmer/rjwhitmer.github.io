import React from 'react'
import family from '../Images/carol edit 5.jpg'
import forager from '../Images/forager.png'
import pickItUp from '../Images/pick_it_up.png'

export default function Images(props){
    const image = (props) => {
        if (props.image === "about-me"){
            return family
        } else if (props.image === "forager") {
            return forager
        } else if (props.image === "pick_it_up") {
            return pickItUp
        }
    }

    return(
        <img src={image(props)}></img>
    )
}