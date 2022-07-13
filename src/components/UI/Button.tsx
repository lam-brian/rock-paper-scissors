import rockIcon from "../../images/icon-rock.svg";
import paperIcon from "../../images/icon-paper.svg";
import scissorsIcon from "../../images/icon-scissors.svg";
import styles from "./Button.module.css";

interface ButtonProps {
  type: "rock" | "paper" | "scissors";
}

const Button = (props: ButtonProps) => {
  let icon;
  if (props.type === "rock") icon = rockIcon;
  if (props.type === "paper") icon = paperIcon;
  if (props.type === "scissors") icon = scissorsIcon;

  return (
    <div className={`${styles.button} ${styles[`button-${props.type}`]}`}>
      <button>
        <img src={icon} alt={props.type} />
      </button>
    </div>
  );
};

export default Button;
