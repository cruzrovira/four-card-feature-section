import React, { createContext } from "react";
import data from "./data.json";
const Context = createContext();
export { Context };

function Provider(props) {
  return <Context.Provider value={{ data }}>{props.children}</Context.Provider>;
}

export default Provider;
