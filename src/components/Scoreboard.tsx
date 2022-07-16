import { useAppSelector } from "../hooks/hooks";
import logo from "../images/logo.svg";
import styles from "./Scoreboard.module.css";

const Scoreboard = () => {
  const score = useAppSelector((state) => state.game.score);

  return (
    <div className={styles.scoreboard}>
      <img src={logo} alt="logo" />
      <div>
        <span>score</span>
        <span>{score}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
