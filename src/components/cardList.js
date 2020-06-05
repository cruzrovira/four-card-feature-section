import React from "react";
import styled from "styled-components";
import Card from "./card";
import { Context } from "./../provider";
const CardListStyled = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-top:4em;
  
  div:nth-child(n){ 
    width:100%
  }

  @media screen and (min-width: 800px) {
  
  align-items:flex-start;
  justify-content:center;  
  
  div:nth-child(n){
    margin-left:2em;
    width:45%
  }

  @media screen and (min-width: 1000px ){
    div:nth-child(n){
      width:25%
    }
    div:nth-child(1){
      margin-top:10em;
    }
    div:nth-child(3){
      margin-top:10em;
    }
    div:nth-child(4){
      margin-top:-8em;
    }
  }

`;

const CardList = () => {
  return (
    <CardListStyled>
      <Context.Consumer>
        {(value) =>
          value.data.map((item) => (
            <Card
              title={item.title}
              body={item.body}
              key={item.id}
              img={item.img}
            />
          ))
        }
      </Context.Consumer>
    </CardListStyled>
  );
};

export default CardList;
