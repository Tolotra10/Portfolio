import abstract from '../assets/undraw_designer_re_5v95.svg'

const Experiences = () => {
    return (
        <div className="experiences">
            <h1>Experiences</h1>
            <div className="vide0"></div>
                <div className="experiencesContent">
                    <div className="left">
                        <h2>Web development</h2>
                        <div className="web">
                            <p>Probationer at Dream'in TV</p>
                            <p>Duration : <span style={{color:'#ff6347'}}>3 months</span></p>
                        </div>
                        
                    </div>
                    <div className="abstract">
                        <img src={abstract} alt="abstract" />
                    </div>
                    <div className="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#eee" fillOpacity="1" d="M0,64L24,80C48,96,96,128,144,160C192,192,240,224,288,229.3C336,235,384,213,432,192C480,171,528,149,576,170.7C624,192,672,256,720,240C768,224,816,128,864,122.7C912,117,960,203,1008,218.7C1056,235,1104,181,1152,181.3C1200,181,1248,235,1296,229.3C1344,224,1392,160,1416,128L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                        </svg>
                        <div className="other"></div>
                    </div>
                    <div className="other"></div>
                    <div className="right">
                        <h2>Other jobs</h2>
                        <div className="list">
                            <div>
                                <p>Online operator at Ingedata</p>
                                <p>Duration : <span style={{color:'#ff6347'}}>3 months</span></p>
                            </div>
                            <div>
                                <p>Online operator at Smartone</p>
                                <p>Duration : <span style={{color:'#ff6347'}}>1 year and 5 months</span></p>
                            </div>
                        </div>
                        </div>
                </div>
        </div>
    );
};

export default Experiences;