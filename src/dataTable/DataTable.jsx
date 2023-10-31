import { Link } from "react-router-dom";
import "./dataTable.scss";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// type Props = {
//   columns: GridColDef[];
//   rows: object[];
//   slug: string;
// };

function DataTable({columns, rows, slug}) {

    const handleClick = (id) => {

        // api call krna hoga so that the row with passed id will be deleted and other rows will be shown

        console.log(id)
    }


  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell(params) {
      return (
        <div className="actions">
          <div className="view">
            <Link to={`/${slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
          </div>
          <div className="delete" onClick={() => handleClick(params.row.id)}>
            <img src="delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
}

export default DataTable;
