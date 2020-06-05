import React from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import CardList from "./components/cardList";
import Provider from "./provider";
function App() {
  return (
    <Provider>
      <Wrapper>
        <Header />
        <CardList />
      </Wrapper>
    </Provider>
  );
}

export default App;
