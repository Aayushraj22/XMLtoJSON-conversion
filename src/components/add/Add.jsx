import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

// type Props = {
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   colums: GridColDef[];
//   slug: string;
// };

function Add({setOpen, colums, slug}) {
  function handleSubmit(e) {
    e.preventDefault();

    setOpen((prev) => !prev)
    

    console.log("form submitted, your data is : ", e.target);
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>

        <form onSubmit={handleSubmit}>
          {colums
            .filter((obj) => obj.field !== "id" && obj.field !== "image")
            .map((column, i) => {
              return (
                <div className="item">
                  <label key={i}>{column.headerName}</label>
                  <input type={column.type} placeholder={column.field}/>
                </div>
              );
            })}

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
