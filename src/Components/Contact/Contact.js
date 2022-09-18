import React ,{forwardRef, useRef, useState} from 'react'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com';
import S from "./Contact.module.css"

const Contact = () => {

  const Formref = useRef();
  const [formDetails, setformDetails] = useState({
    name:"",
    email:"",
    message:""
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_glh77pj', 'template_wc991of', Formref.current, 'DwIZRxGJnYWMCtvoH')
      .then((result) => {
          alert("Your message has been successfully sent")
          console.log(result.text);
      }, (error) => {
          alert(error.text)
          console.log(error.text);
      });
      
      // e.target.reset()

      setformDetails({
        name:"",email:"",message:""
      })
    
  };

  const handleChange = (e)=>{
    setformDetails({
      ...formDetails,
      [e.target.name]:e.target.value
    })
  }

  return (
    <section id="contact">

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${S.contactContainer}`}>

        <div className={`${S.contactOptions}`}>
          <article className={`${S.contactOption}`}>
            <MdOutlineEmail className={`${S.contactIcons}`}/>
            <h4>Email</h4>
            <h5>amanbisht123abc@gmail.com</h5>
            <a href="mailto:amanbisht123abc@gmail.com">Send a message</a>
          </article>
          <article className={`${S.contactOption}`}>
            <RiMessengerLine className={`${S.contactIcons}`}/>
            <h4>Messenger</h4>
            <h5>Aman Bisht</h5>
            <a href="https://m.me/amanbisht_089" target="_blank">Send a message</a>
          </article>
          <article className={`${S.contactOption}`}>
            <BsWhatsapp className={`${S.contactIcons}`}/>
            <h4>WhatsApp</h4>
            <h5>91+9315933365</h5>
            <a href="https://api.whatsapp.com/send?phone=+91-9315933365&text=Hi, Aman" target="_blank">Send a message</a>
          </article>
        </div>

        <form action="" ref={Formref} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' value={formDetails.name} onChange={handleChange} required={true}/>
          <input type="email" name='email' placeholder='Your Email'  value={formDetails.email} onChange={handleChange} required={true} />
          <textarea name="message" rows="7" placeholder='Your Message' value={formDetails.message} onChange={handleChange} required={true}></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact

// Instead of making state variable to empty the field after form has been submited i can do e.target.reset() as well 