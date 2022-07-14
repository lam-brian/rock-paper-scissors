import rulesImg from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";
import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={styles.rules}>
      <div>
        <span>RULES</span>
        <button>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
      <img src={rulesImg} alt="rules" />
    </div>
  );
};

export default Rules;
