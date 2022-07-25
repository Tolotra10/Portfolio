import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcBusinessman,FcServices,FcLineChart,FcOpenedFolder,FcCellPhone,FcLikePlaceholder } from "react-icons/fc";

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="navigationContent">
                <div className="nav">
                    <li><NavLink to="/"><FcBusinessman className='icon'/><span>Portfolio</span></NavLink></li>
                    <li><NavLink to="/skills"><FcServices className='icon'/><span>Skills</span></NavLink></li>
                    <li><NavLink to="/experiences"><FcLineChart className='icon'/><span>Experiences</span></NavLink></li>
                    <li><NavLink to="/projects"><FcOpenedFolder className='icon'/><span>Projects</span></NavLink></li>
                    <li><NavLink to="/contact"><FcCellPhone className='icon'/><span>Contact</span></NavLink></li>
                    <li><NavLink to="/reviews"><FcLikePlaceholder className='icon'/><span>Reviews</span></NavLink></li>
                </div>
            </div>
        </div>
    );
};

export default Navigation;