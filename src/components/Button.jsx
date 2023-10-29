import React from "react";
import styled from "styled-components";

const SharedButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  background-color: black;
  color: white;

  border-radius: 0.2rem;
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #1e1d1d;
    color: white;
  }
`;

const Button = ({ children, onClick }) => {
  return <SharedButton onClick={onClick}>{children}</SharedButton>;
};

export default Button;
