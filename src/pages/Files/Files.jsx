import React from 'react'
import './files.scss'
import Table from '../../components/table/Table'
import Barchart from '../../components/barChart/Barchart'
import { useLocation, useNavigate } from 'react-router-dom'
const Files = () => {
  const location = useLocation();
  
  // const {isAuthenticated} = useAuth0();
  const navigate = useNavigate();
  
  

  const jsonData = location?.state;
   // column fields for table
   const columns = Object.keys(jsonData[0]).map((el) => (
    {
      field: el,
      header: el,
      type: 'String', 
      editable: 'true',
      width: el==='email' ? '180' : '120',
    }
  ))
  const rows = jsonData?.slice(0,jsonData.length -1 )

  const male = jsonData?.filter(item => item?.gender === 'Male')
  const female = jsonData?.filter(item => item?.gender === 'Female')
  const other = rows.length-male.length-female.length;
  const gender=[male.length, female.length, other]

 
  


  


  return (
    <div className='Files'>
        <h2 className='heading'>Students data</h2>
        <div className='views'>
            <div className="item"><Barchart gender={gender} title='gender'/></div>
            <div className="item"><Barchart gender={gender} title=''/> </div>
            <div className="item"><Table rows={rows} columns={columns}/> </div>
        </div>
    </div>
  )
}

export default Files