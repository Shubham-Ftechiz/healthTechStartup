import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./configure-store";
import { Container } from "./counter/container";

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
