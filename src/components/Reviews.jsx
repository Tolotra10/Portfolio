import React,{useRef} from 'react';
import img from '../assets/svg2.svg'
import emailjs from '@emailjs/browser'

const Reviews = () => {
const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_tdkami4', form.current, 'c175cH0KxRe8GKlsG')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          });
          e.target.reset()
      }
    return (
        <div className="reviews">
            <h2>Send message</h2>
            <div className="reviewsContent">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Your name'/>
                <input type="text" placeholder='Your mail'/>
                <textarea placeholder='Your message'></textarea>
                <input type="submit" value="Send" className='btn'/>
            </form>
            <div className="image">
                <img src={img} alt="image" />
            </div>
            </div>
            </div>
            
    );
};

export default Reviews;