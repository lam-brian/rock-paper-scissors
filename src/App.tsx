import React from "react";

import Layout from "./components/UI/Layout";
import Scoreboard from "./components/Scoreboard";
import Choices from "./components/Choices";
import Rules from "./components/Rules";
import RulesButton from "./components/RulesButton";
import Modal from "./components/UI/Modal";

function App() {
  return (
    <Layout>
      <Scoreboard />
      <Choices />
      <RulesButton />
      <Modal>
        <Rules />
      </Modal>
    </Layout>
  );
}

export default App;
