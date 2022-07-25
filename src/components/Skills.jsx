import React from 'react';
import { PieChart, Pie, Cell } from 'recharts'
import programation from '../assets/computer-svgrepo-com.svg'
import reseau from '../assets/network-svgrepo-com.svg'
import graphisme from '../assets/web-design-svgrepo-com.svg'
import office from '../assets/document-svgrepo-com.svg'
import system from '../assets/system-svgrepo-com.svg'
import dev from '../assets/dev.svg'

const Skills = () => {
    const RADIAN = Math.PI / 180
    const renderCustomedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)
        return (
            <text
                style={{
                    fontWeight: '700',
                }}
                x={x}
                y={y}
                fill='#272727'
                textAnchor={x > cx ? 'start' : "end"}
                dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }
    const data = [
        { name: 'developpement', value: 400 },
        { name: 'graphisme', value: 380 },
        { name: 'office', value: 300 },
        { name: 'programation', value: 250 },
        { name: 'reseau', value: 150 },
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#88f5a3']
    return (
        <div className='skills'>
            <div className="skillsContent">
                <div className="skillsList">
                    <div className="divers">
                        <div className="programation">
                            <div className="title">
                                <img src={programation} alt='programation' />
                                <h1>Programation</h1>
                            </div>
                            <div className="list">
                                <p>Arduino</p>
                                <p>Pyton</p>
                            </div>
                        </div>
                        <div className="reseau">
                            <div className="title">
                                <img src={reseau} alt="reseau" />
                                <h1>Network</h1>
                            </div>
                            <div className="list">
                                <p>Maintenance</p>
                                <p>CISCO</p>
                            </div>
                        </div>
                        <div className="graphisme">
                            <div className="title">
                                <img src={graphisme} alt="graphisme" />
                                <h1>Graphism</h1>
                            </div>
                            <div className="list">
                                <p>Illustrator</p>
                                <p>Photoshop</p>
                                <p>InDesing</p>
                                <p>Lightroom</p>
                            </div>
                        </div>
                        <div className="office">
                            <div className="title">
                                <img src={office} alt="office" />
                                <h1>Office</h1>
                            </div>
                            <div className="list">
                                <p>Word</p>
                                <p>Excel</p>
                                <p>Powerpoint</p>
                            </div>
                        </div>
                        <div className="système">
                            <div className="title">
                                <img src={system} alt="system" />
                                <h1>System</h1>
                            </div>
                            <div className="list">
                                <p>Windows (7,8,10)</p>
                                <p>Linux (Ubuntu)</p>
                            </div>
                        </div>
                    </div>
                    <div className="developpement">
                        <div className="title">
                            <img src={dev} alt="dev" />
                            <h1>Web development</h1>
                        </div>
                        <div>
                            <div className="language">
                                <h2>Languages</h2>
                                <div className="list">
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>JavaScript</p>
                                    <p>PHP</p>
                                    <p>MySql</p>
                                </div>
                            </div>
                            <div className="frameworks">
                                <h2>Framework & library</h2>
                                <div className="list">
                                    <p>Sass</p>
                                    <p>Bootstrap</p>
                                    <p>Laravel</p>
                                    <p>ReactJs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart" style={{
                    position: 'relative'
                }}>
                    <div className="content" style={{
                        position: 'absolute',
                        top: '45px',
                        left: '20%',
                    }}>
                    <h1 style={{
                        marginLeft: '20px',
                        marginBottom:'20px',
                        color: '#da5375'
                    }}>Skills Chart</h1>
                        <PieChart width={200} height={200}>
                            <Pie
                                data={data}
                                labelLine={false}
                                label={renderCustomedLabel}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div className="data" style={{marginTop:'30px'}}>
                            <div className="box">
                                <div className="item" style={{background:'#0088FE'}}></div>
                                <span>Development</span>
                            </div>
                            <div className="box">
                                <div className="item" style={{background:'#00C49F'}}></div>
                                <span>Graphism</span>
                            </div>
                            <div className="box">
                                <div className="item" style={{background:'#FFBB28'}}></div>
                                <span>Office</span>
                            </div>
                            <div className="box">
                                <div className="item" style={{background:'#FF8042'}}></div>
                                <span>Programation</span>
                            </div>
                            <div className="box">
                                <div className="item" style={{background:'#88f5a3'}}></div>
                                <span>Network</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;