import React from 'react';

const Techno = (props) => {
    const technos = props.technos
    return (
        <div>
            {
                technos.map((techno,index)=>{
                    return(
                        <div key={index}>
                            <p style={{color:"#000"}}>{techno.front}{techno.back}{techno.api}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Techno;