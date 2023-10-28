import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import search from "../utils/functions";

const SearchBox = styled.section`
  position: absolute;
  top: 2rem;
  left: 0.5rem;
  right: auto;
  width: 70%;
  display: flex;
  max-height: 90vh;
  z-index: 3;
  /* border: 2px solid blue; */
  box-shadow: 0px 3px 12px 1px gray;

  @media screen and (max-width: 576px) {
   width: 95%;
   top: 1rem;
   max-height: 60vh;
  }

  div {
    display: flex;
    flex: 1;
    /* position: relative; */
    padding: 0.5rem;
    background: white;
    overflow: auto;
    /* border-radius: 0.4rem; */
    /* border: 1px solid red; */
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 576px) {
     padding: 0;
    }

    label {
      width: 100%;
      /* border: 2px solid green; */
      display: flex;

      input {
        width: 100%;
        padding: 0.5rem 0.8rem;
        outline: none;
        border: 1px solid black;
        font-size: 0.9rem;
        font-weight: 500;
        font-family: "Inter", "sans-serif";

        &:focus {
          border: 1px solid blue;
        }
      }
    }
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  /* border: 2px solid green; */
  width: fit-content;
  padding: 1rem;

  th,
  td {
    border: 1px solid black;
    width: fit-content;
    height: 30px;
    /* text-align: center; */
    font-size: 0.8rem;
    padding: 0rem 0.8rem;
  }

  
`;

const Icon = styled.button`
  padding: 0.8rem;
  border: 1px solid gray;
  font-size: 1.2rem;
  position: absolute;
  z-index: 3;
  top: 1rem;
  left: 2rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 0 gray;
  }
  @media screen and (max-width: 576px) {
    font-size: 1rem;
    padding: 0.6rem;
    left: auto;
    right: 1rem;
  }
`;

const CloseIcon = styled(Icon)`
  top: -20px;
  right: -10px;
  left: auto;
  padding: 0.4rem;
  z-index: 5;

  @media screen and (max-width: 576px) {
    top: auto;
    bottom: -2rem;
    left: 0;
    right: auto;
  }
`;

const Input = ({ datas }) => {
  const [searchText, setSearchText] = useState("");
  const [isActive, setIsActive] = useState(false); // decides, searchBox is Present or Absent, true -> searchBox ; false -> SearchIcon
  const [value, setValue] = useState("");

  // console.log(datas)

  function handleChange(e) {
    let val = e.target.value;
    setSearchText(val);
  }

  useEffect(() => {
    search(searchText, datas, setValue, ["first_name", "last_name"]);
  }, [searchText]);

  // console.log("value : ", value);
  // console.log(datas)
  return (
    <>
      {isActive ? (
        <SearchBox>
          <div style={{}}>
            <CloseIcon onClick={() => setIsActive((prev) => !prev)}>
              <MdClose />
            </CloseIcon>
            <label>
              <input
                type="search"
                name="searchList"
                onChange={handleChange}
                placeholder="search here..."
                value={searchText}
              />
            </label>

            {searchText?.length !== 0 && (
              <Table>
                <thead>
                  <tr>
                    {value?.length !== 0 &&
                      Object.keys(value[0]).map((item, i) => (
                        <th key={i} style={{ textTransform: "uppercase" }}>
                          {item}
                        </th>
                      ))}
                  </tr>
                </thead>

                <tbody>
                  {value?.length !== 0 &&
                    value.map((obj, j) => (
                      <tr key={j}>
                        {Object.values(obj).map((item, k) => (
                          <td key={k} style={{}}>
                            {item}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </Table>
            )}
          </div>
        </SearchBox>
      ) : (
        <Icon onClick={() => setIsActive((prev) => !prev)}>
          <BsSearch />
        </Icon>
      )}
    </>
  );
};

export default Input;
