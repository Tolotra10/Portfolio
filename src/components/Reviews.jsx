import React from 'react';
import img from '../assets/svg2.svg'

const Reviews = () => {
    return (
        <div className="reviews">
            <h2>Send message</h2>
            <div className="reviewsContent">
            <form>
                <input type="text" placeholder='Your name'/>
                <input type="text" placeholder='Your mail'/>
                <textarea placeholder='Your message'></textarea>
                <input type="button" value="Send" className='btn'/>
            </form>
            <div className="image">
                <img src={img} alt="image" />
            </div>
            </div>
            </div>
            
    );
};

export default Reviews;