import React from 'react'
import './barchart.scss'

import { BarChart } from '@mui/x-charts/BarChart';

const Barchart = ({gender, title}) => {
    return (
        <div className='BarChart'>
            <div className="title">
                <h3>student data based on {title}</h3>
            </div>

            <BarChart
                xAxis={[{ scaleType: 'band', data: ['Male', 'Female', 'Other'] }]}
                series={[{data: gender}]}
            />
        </div>
    )
}

export default Barchart