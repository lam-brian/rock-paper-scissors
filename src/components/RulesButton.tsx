import { useAppDispatch } from "../hooks/hooks";
import { uiActions } from "../store/ui-slice";
import styles from "./RulesButton.module.css";

const RulesButton = () => {
  const dispatch = useAppDispatch();

  const showRulesHandler = () => {
    dispatch(uiActions.showModal());
  };

  return (
    <button className={styles.rulesBtn} onClick={showRulesHandler}>
      RULES
    </button>
  );
};

export default RulesButton;
