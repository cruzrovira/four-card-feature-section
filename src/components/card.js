import React from "react";
import styled, { css } from "styled-components";

const CardStyled = styled.div`

  background: white;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  margin-bottom:2em;
  padding: 1.5em;
  

  ${(props) => {
    return (
      props.title.toLowerCase() === "Supervisor".toLowerCase() &&
      css`
        border-top: 4px solid var(--cyan);
      `
    );
  }}

  ${(props) => {
    return (
      props.title.toLowerCase() === "Team Builder".toLowerCase() &&
      css`
        border-top: 4px solid var(--red);
      `
    );
  }}
  ${(props) => {
    return (
      props.title.toLowerCase() === "Karma".toLowerCase() &&
      css`
        border-top: 4px solid var(--orange);
      `
    );
  }}
  ${(props) => {
    return (
      props.title.toLowerCase() === "Calculator".toLowerCase() &&
      css`
        border-top: 4px solid var(--blue);
      `
    );
  }}


  .title {
    color: var(--Very-Dark-Blue);
    font-size: 1.5em;
    font-weight: 700;
  }
  p {
    margin: 0;
  }
  img {
    display: block;
    margin-left: auto;
    margin-top: 2em;
  }
`;

const Card = ({ title, body, img }) => {
  return (
    <CardStyled title={title}>
      <p className="title">{title}</p>
      <p>{body}</p>

      <img src={`./images/${img}`} alt={title} />
    </CardStyled>
  );
};

export default Card;
