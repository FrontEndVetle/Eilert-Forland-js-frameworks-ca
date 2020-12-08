import React from 'react';
import ContactForm from './ContactForm';
import Heading from './../layout/Heading'


export function Contact(){
    return(
          <div>
              <Heading title="Contact"></Heading>
        <ContactForm />
    </div>
    )
}

export default Contact;