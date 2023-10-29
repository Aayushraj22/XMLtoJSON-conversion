import './users.scss'
// import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../dataTable/DataTable'
// import {userRows} from '../../data'
import { useState } from 'react';
import Add from '../../components/add/Add';
// import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Users() {
  const [open, setOpen] = useState(false)


  const state = useSelector(state => state)

  const data = state.tableData



  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 90 },
  //   {field: 'image', headerName: 'Avatar', width: 70,
  //   renderCell(params) {
  //       return <img src={params.row.img || "/noavatar.png"} alt="" />
  //       },
  //   },
  //   {
  //     field: 'firstName',
  //     headerName: 'First name',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'lastName',
  //     headerName: 'Last name',
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: 'age',
  //     headerName: 'Age',
  //     type: 'number',
  //     width: 110,
  //     editable: true,
  //   },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },{
  //     field: 'verified', headerName:'Verified', width: 100, type: 'boolean',
  // },
  // ];

  const col = Object.keys(data[0]).map(item => (
      {
        field: item, 
        headerName: item.slice(0,1).toUpperCase() + item.slice(1), 
        width: item==='email' ? '180' : '120',
      }
  ))
  
  // console.log('col :-',col)
  
  


return (
    <div className='Users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}> Add new user</button>
      </div>
      <DataTable columns={col} rows={data} slug='users'/>
      {open && <Add setOpen={setOpen} colums={col} slug='users' rows={data}/>} 
    </div>
  )

}
export default Users