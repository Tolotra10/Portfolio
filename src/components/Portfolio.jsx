import React,{useState} from 'react'
import image from '../assets/IMG_1932.jpeg'
import facebook from '../assets/facebook-svgrepo-com.svg'
import instagram from '../assets/instagram-svgrepo-com.svg'
import skype from '../assets/skype-svgrepo-com.svg'
import linkedin from '../assets/linkedin-svgrepo-com.svg'
import foot from '../assets/football.png'
import code from '../assets/qr-code.png'
import movie from '../assets/movie-svgrepo-com.svg'
import run from '../assets/runner.png'
import {FaArrowRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Portfolio = () => {
    const [hobbies,setHobbies] = useState(false)

    function showHobbies(){
        setHobbies(!hobbies)
    }
    return (
        <div className='home'>
            <div className="homeContent">
                <div className="name">
                    <div className='vide1'> </div>
                    <h2>Tolotra Aurélien</h2>
                    <h1>IFANOMEZANTSOA</h1>
                    <div className='vide2'> </div>
                </div>
                <div className="about">
                <div className="warpper">
                    <div className="staticText">I'm a</div>
                    <div className="dynamicText">
                        <li><span>Web developer</span></li>
                        <li><span>Web designer </span></li>
                        <li><span>Web developer</span></li>
                        <li><span>Web designer </span></li>
                    </div>
                </div>
                </div>
                {
                    hobbies ? 
                        <div className="hobbiesShow">
                            <div className="title">
                                <button onClick={showHobbies}>Close</button>
                            </div>
                            <div className="list">
                                <div><img src={foot} alt="foot" /><h3>futbol</h3></div>
                                <div><img src={code} alt="code" /><h3>to code</h3></div>
                                <div><img src={movie} alt="movie" /><h3>movies</h3></div>
                                <div><img src={run} alt="run" /><h3>running</h3></div>
                            </div>
                        </div> :
                            <div className="hobbies">
                                <div className="title">
                                    <button onClick={showHobbies}>hobbies <FaArrowRight/></button>
                                </div>
                            </div>
                }
                
            </div>
            <div className="vue">
                <div className="photo">
                    <img src={image} alt="image" />
                </div>
                <div className="socialNetwork">
                    <Link to='/contact'><img src={facebook} alt="facebook" /></Link>  
                    <Link to='/contact'><img src={instagram} alt="instagram" /></Link>  
                    <Link to='/contact'><img src={skype} alt="skype" /></Link>  
                    <Link to='/contact'><img src={linkedin} alt="linkedin" /></Link>  
                </div>
            </div>
        </div>
    );
};

export default Portfolio;