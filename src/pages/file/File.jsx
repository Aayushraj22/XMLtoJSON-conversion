import React, { useState, useEffect } from "react";
import './file.scss';
import { BsCloudUpload } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { toFileUploaded, toGenderRatio, toNewTableData } from "../../redux/fileUpload";
import { getGenderRatio } from "../../utils/functions";


function File() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [JsonData, setJsonData] = useState(null);
  
  const [files, setFiles] = useState({
    file: null,
    errors: "",
  });

 

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
      if (JsonData !== null) setJsonData(null);
    }
  };

  const handleClick = () => {

    // remove the last element of jsonData as it contains only id, and index of array is going from 0 to length of array before removal of last element 
    const jsondata = JsonData.slice(1, JsonData.length - 1)

    navigate('/users');
    dispatch(toFileUploaded(jsondata));
    dispatch(toNewTableData(jsondata));
    dispatch(toGenderRatio(genderData));
  }

  const genderData = getGenderRatio(JsonData)
  

  useEffect(() => {
        
    if (file !== null) {
      // changing .csv to json
      // console.log("within useEffect if");
      Papa.parse(file, {
        ...commonConfig,
        header: true, // it's neccessary to get json , if omitted then :- recieves array of arrays
        complete: (result) => {
          setJsonData(result.data);
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
        <Button onClick={handleClick}>Preview</Button>
      )}
    </div>
  );
}

export default File;
