import React from "react";

import Layout from "./components/UI/Layout";
import Scoreboard from "./components/Scoreboard";
import Choices from "./components/Choices";

function App() {
  return (
    <Layout>
      <Scoreboard />
      <Choices />
    </Layout>
  );
}

export default App;
