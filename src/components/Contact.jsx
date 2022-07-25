import { useState } from 'react'
import {FaEnvelope} from 'react-icons/fa'
import facebook from '../assets/facebook-svgrepo-com.svg'
import instagram from '../assets/instagram-svgrepo-com.svg'
import skype from '../assets/skype-svgrepo-com.svg'
import linkedin from '../assets/linkedin-svgrepo-com.svg'
import telma from '../assets/phone.png'
import orange from '../assets/telephone.png'
import mail from '../assets/gmail.png'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const [text,setText] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='contact'>
            <div className="talk">
                <button onMouseEnter={()=>{setText(true)}}
                onMouseLeave={()=>{setText(false)}}
                onClick={()=>{navigate('/reviews')}}>
                    <FaEnvelope/>
                { text ? <p>Let's talk</p> : ""}
                </button>
            </div>
            <div className="reseaux">
                <div>
                    <img src={facebook} alt="facebook" />
                    <p>Tolotra</p>
                </div>
                <div>
                    <img src={instagram} alt="instagram" />
                    <p>Tolotra_10</p>
                </div>
                <div>
                    <img src={skype} alt="skype" />
                    <p>Tolotra</p>
                </div>
                <div>
                    <img src={linkedin} alt="linkedin" />
                    <p>Tolotra Aurélien</p>
                </div>
            </div>
            <div className="msgBox">
                <div>
                    <img src={telma} alt="numero1" />
                    <p>034 60 942 65</p>
                </div>
                <div>
                    <img src={orange} alt="numero2" />
                    <p>032 67 699 54</p>
                </div>
                <div>
                    <img src={mail} alt="mail" />
                    <p>tolotraifanomezantso@gmail.com</p>
                </div>
            </div>
            <div className="footer">
                <p>Thans to contact me if you want my service.</p>
            </div>
        </div>
    );
};

export default Contact;