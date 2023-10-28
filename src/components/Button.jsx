import React from "react";
import styled from "styled-components";

const SharedButton = styled.button`
  padding: 0.6rem 1.5rem;
  border: 1px solid black;
  background-color: white;
  border-radius: 0.2rem;
  color: black;
  font-family: "Inter";
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Button = ({ children, onClick }) => {
  return <SharedButton onClick={onClick}>{children}</SharedButton>;
};

export default Button;
