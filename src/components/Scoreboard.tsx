import logo from "../images/logo.svg";
import styles from "./Scoreboard.module.css";

const Scoreboard = () => {
  return (
    <div className={styles.scoreboard}>
      <img src={logo} alt="logo" />
      <div>
        <span>score</span>
        <span>9</span>
      </div>
    </div>
  );
};

export default Scoreboard;
