import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../dataTable/DataTable";
import { products } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

function Products() {
  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 70,
      renderCell(params) {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      editable: true,
    },
    {
      field: "color",
      headerName: "Color",
      width: 100,
      editable: true,
    },
    {
      field: "producer",
      headerName: "Producer",
      width: 110,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 120,
    },
    {
      field: "inStock",
      headerName: "InStock",
      width: 100,
      type: "boolean",
    },
  ];

  return (
    <div className="Products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}> Add new Products</button>
      </div>
      <DataTable columns={columns} rows={products} slug="products" />
      {open && <Add setOpen={setOpen} colums={columns} slug="products" />}
    </div>
  );
}
export default Products;
