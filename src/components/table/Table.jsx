import React from 'react'
import './table.scss'

import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate, useLocation } from 'react-router-dom';


const Table = ({ rows, columns }) => {
  const location = useLocation()
  const navigation = useNavigate()

  // const col = columns
  columns.push({
    field: 'Action', header: 'action', width: '50', renderCell(params) {
      return <div
        className="link"
        onClick={() => {
          console.log('row : ', params.row)
          navigation(`${location.pathname}/${params.row?.student_id || params.row?.student_id || params.row?.StudentID}`, { state: { data: params.row } })
        }}
      >
        <img src="view.svg" alt="view" />

      </div>
    }
  })

  console.log('data: ', rows)

  return (
    <div className='Table'>
      <Box >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          disableColumnFilter
          disableColumnSelector
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowId={(row) => row.student_id || row.id || row.StudentId || row.ID || row.StudentID}
        />
      </Box>
    </div>
  )
}

export default Table