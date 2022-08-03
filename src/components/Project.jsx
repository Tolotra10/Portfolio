import React from 'react'
import {personal} from '../data'
import {professionnal} from '../data'
import Techno from './Techno';

const Project = () => {
    return (
        <div className="projet">
            <div className="projetContent">
                <h2>Personal project</h2>
                <div className="list">
                {
                    personal.map((item,index)=>{
                        const technos = item.techno
                        return(
                            <div key={index} className='item'>
                                <div className="info">
                                    <div className="techno">
                                        <p>{item.title}</p><br />
                                        <Techno technos={technos}/>
                                    </div>
                                </div>
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
                        professionnal.map((item,index)=>{
                            const technos = item.techno
                            return(
                                <div key={index} className='item'>
                                    <div className="info">
                                        <div className="techno">
                                            <p>{item.title}</p><br />
                                            <Techno technos={technos}/>
                                        </div>
                                    </div>
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