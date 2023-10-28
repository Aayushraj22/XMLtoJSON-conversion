import './users.scss'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../dataTable/DataTable'
import {userRows} from '../../data'
import { useState } from 'react';
import Add from '../../components/add/Add';

function Users() {

  const [open, setOpen] = useState(false)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {field: 'image', headerName: 'Avatar', width: 70,
    renderCell(params) {
        return <img src={params.row.img || "/noavatar.png"} alt="" />
        },
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },{
      field: 'verified', headerName:'Verified', width: 100, type: 'boolean',
  },
  ];
  
  

return (
    <div className='Users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}> Add new user</button>
      </div>
      <DataTable columns={columns} rows={userRows} slug='users'/>
      {open && <Add setOpen={setOpen} colums={columns} slug='users'/>} 
    </div>
  )

}
export default Users