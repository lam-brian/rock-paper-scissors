import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { uiActions } from "../store/ui-slice";
import { gameActions } from "../store/game-slice";
import Button from "./UI/Button";
import styles from "./GameStart.module.css";

const GameStart = () => {
  const dispatch = useAppDispatch();

  const cpuStatus = useAppSelector((state) => state.ui.cpuStatus);
  const playerChoice = useAppSelector((state) => state.game.playerChoice);
  const cpuChoice = useAppSelector((state) => state.game.cpuChoice);
  const outcome = useAppSelector((state) => state.game.gameStatus);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(uiActions.showCPU(true));
      dispatch(gameActions.setWinner());
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  const renderedOutcome = outcome === "TIE" ? outcome : `YOU ${outcome}`;

  const playAgainHandler = () => {
    dispatch(uiActions.reset());
    dispatch(gameActions.resetGame());
  };

  return (
    <div className={styles.gameStart}>
      <div>
        <h2>YOU PICKED</h2>
        <Button
          type={playerChoice}
          classType="active"
          winner={outcome === "WIN"}
        />
      </div>
      {outcome && (
        <div className={styles.playAgain}>
          <span>{renderedOutcome}</span>
          <button
            className={`${styles.playAgainBtn} ${
              outcome === "LOSE" ? styles["playAgainBtn--lose"] : ""
            }`}
            onClick={playAgainHandler}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
      <div>
        <h2>THE HOUSE PICKED</h2>
        {!cpuStatus && <div className={styles.dot} />}
        {cpuStatus && (
          <Button
            type={cpuChoice}
            classType="active"
            winner={outcome === "LOSE"}
          />
        )}
      </div>
    </div>
  );
};

export default GameStart;
