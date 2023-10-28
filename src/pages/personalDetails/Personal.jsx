import React from 'react'
import './personal.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Personal = () => {
    const location = useLocation()
    console.log('pathname : ', location.pathname);

    console.log('value : ', location.state)
    const data = location.state.data;   // data is containing objects

    return (
        <div className='Personal'>
            <div className="view">
                {
                    Object.entries(data).map((item, i) => (
                        <div className="item" key={i}>
                            <p>{item[0].toUpperCase()} : </p>
                            <p style={{fontWeight: '500'}}>{item[1]}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Personal