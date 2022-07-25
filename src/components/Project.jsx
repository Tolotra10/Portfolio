import React from 'react'
import {data} from '../data'

const Project = () => {
    return (
        <div className="projet">
            <div className="projetContent">
                <h2>Personal project</h2>
                <div className="list">
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index} className='item'>
                                <p>{item.legend}</p>
                                <div className="images">
                                    <img src={item.img1} alt={item.id} />
                                    <img src={item.img2} alt={item.id} />
                                    <img src={item.img3} alt={item.id} />
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="projetContent"> <h2>Professional project</h2>
                <div className="list">
                    {
                        data.map((item,index)=>{
                            return(
                                <div key={index} className='item'>
                                    <p>{item.legend}</p>
                                    <div className="images">
                                        <img src={item.img1} alt={item.id} />
                                        <img src={item.img2} alt={item.id} />
                                        <img src={item.img3} alt={item.id} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;