import rockIcon from "../../images/icon-rock.svg";
import paperIcon from "../../images/icon-paper.svg";
import scissorsIcon from "../../images/icon-scissors.svg";
import WinnerOverlay from "./WinnerOverlay";
import styles from "./Button.module.css";

interface ButtonProps {
  type: string;
  classType?: string;
  onClick?: (type: string) => void;
  winner?: boolean;
}

const Button = (props: ButtonProps) => {
  let icon;
  let buttonHandler = undefined;
  if (props.type === "rock") icon = rockIcon;
  if (props.type === "paper") icon = paperIcon;
  if (props.type === "scissors") icon = scissorsIcon;

  if (props.onClick) {
    buttonHandler = props.onClick.bind(null, props.type);
  }

  return (
    <div
      className={`${styles.button} ${styles[`button-${props.type}`]} ${
        props.classType ? styles[`button--${props.classType}`] : ""
      } `}
    >
      <button onClick={buttonHandler}>
        <img src={icon} alt={props.type} />
      </button>
      {props.winner && <WinnerOverlay />}
    </div>
  );
};

export default Button;
