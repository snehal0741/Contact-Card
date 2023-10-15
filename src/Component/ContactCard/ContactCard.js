import React from 'react'
import "./ContactCard.css"

function ContactCard({name,email,mobile}){
    return(
        <div className='contact-card'>
        <p className='contact-name m-2'>🐼{name}</p>
        <p className='contact-email m-2'>✉️{email}</p>
        <p className='contact-mobile m-2'>📞{mobile}</p>
        <span className='delete-contact'>❌</span>
    </div>  
    )
}

export default ContactCard