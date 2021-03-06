import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { uiActions } from "./store/ui-slice";
import Layout from "./components/UI/Layout";
import Scoreboard from "./components/Scoreboard";
import Choices from "./components/Choices";
import GameStart from "./components/GameStart";
import Rules from "./components/Rules";
import RulesButton from "./components/RulesButton";
import Modal from "./components/UI/Modal";

function App() {
  const dispatch = useAppDispatch();

  const modalStatus = useAppSelector((state) => state.ui.modalStatus);

  const choiceStatus = useAppSelector((state) => state.ui.choiceStatus);

  const showModal = () => {
    dispatch(uiActions.showModal());
  };

  return (
    <Layout>
      <Scoreboard />
      {!choiceStatus && <Choices />}
      {choiceStatus && <GameStart />}
      <RulesButton />
      {modalStatus && (
        <Modal onClick={showModal}>
          <Rules />
        </Modal>
      )}
    </Layout>
  );
}

export default App;
