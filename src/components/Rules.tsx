import { useAppDispatch } from "../hooks/hooks";
import { uiActions } from "../store/ui-slice";
import rulesImg from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";
import styles from "./Rules.module.css";

const Rules = () => {
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
    dispatch(uiActions.showModal());
  };

  return (
    <div className={styles.rules}>
      <div>
        <span>RULES</span>
        <button onClick={closeModalHandler}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
      <img src={rulesImg} alt="rules" />
    </div>
  );
};

export default Rules;
