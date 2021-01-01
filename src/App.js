import React from "react";
import { Provider } from "react-redux";
import Jugadores from "./components/Jugadores";
import Seleccion from "./components/Seleccion";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>ED MANAGER</h1>
      <Jugadores />
      <Seleccion />
    </main>
  </Provider>
);

export default App;
