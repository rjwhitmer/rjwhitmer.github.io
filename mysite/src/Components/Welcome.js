import React from 'react'
import ContactForm from './ContactForm'

export default function Welcome() {
    return (
        <div id='home'>
            <div id='welcome-message'>
                <p>Welcome! Feel free to look around!</p>
            </div>
            <ContactForm />
        </div>
    )
}