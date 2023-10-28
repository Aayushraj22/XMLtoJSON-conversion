import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    max-width: 400px;
    padding: 1rem;

    p {
      font-size: 1.2rem;
      font-weight: 500;
      font-family: "Poppins", "sans-serif";
      letter-spacing: 0.1rem;
      line-height: 2rem;

      span {
        font-weight: 600;
        font-size: 1.5rem;
        font-family: "Inter", "sans-serif";
        color: navy;
      }
    }
  }
`;

const Description = () => {
  return (
    <Main>
      <div>
        <p>See</p>
        <p>the tabular view of excel file selected from this device </p>
        <p>
          To view click on <span>login</span> button
        </p>
      </div>
    </Main>
  );
};

export default Description;
