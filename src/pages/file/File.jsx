import React, { useState, useEffect } from "react";
import './file.scss';
import { BsCloudUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import Papa from "papaparse";
import Button from "../../components/Button";


function File() {


  const [files, setFiles] = useState({
    file: null,
    errors: "",
  });
  const [csv, setCsv] = useState(null);
  var commonConfig = { delimiter: "," };

  // destructing of object
  const { file, errors } = files;

  const handleChange = (e) => {
    const csvFiles = e.target.files[0];
    if (csvFiles.type === "text/csv") {
      setFiles({
        file: csvFiles,
        errors: "",
      });
    } else {
      setFiles({
        file: null,
        errors: "Choose the correct file !",
      });
      if (csv !== null) setCsv(null);
    }
  };

  useEffect(() => {
        
    if (file !== null) {
      // changing .csv to json
      // console.log("within useEffect if");
      Papa.parse(file, {
        ...commonConfig,
        header: true, // it's neccessary to get json , if omitted then :- recieves array of arrays
        complete: (result) => {
          setCsv(result.data);
        },
      });
    }
    // else console.log("else block");
  }, [file]);



  return (
    <div className="File">
      <label className="label" onChange={handleChange}>
        <div className="uploadIcon">
          <BsCloudUpload />
        </div>
        <p>click here to {file ? <b>change!</b> : <b>upload!</b>}</p>
        {file && <span>{file.name}</span>}
        {errors.length > 0 && <span className="spanRed">{errors}</span>}
        <input type="file" style={{ display: "none" }} />
      </label>
      {file && (
        <Link to="/files" state={csv} style={{ textDecorationLine: "none" }}>
          <Button>Preview</Button>
        </Link>
      )}
    </div>
  );
}

export default File;
