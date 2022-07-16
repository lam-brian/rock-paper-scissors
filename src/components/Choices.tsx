import { useAppDispatch } from "../hooks/hooks";
import { gameActions } from "../store/game-slice";
import { uiActions } from "../store/ui-slice";
import Button from "./UI/Button";
import background from "../images/bg-triangle.svg";
import styles from "./Choices.module.css";

const Choices = () => {
  const dispatch = useAppDispatch();

  const setPlayerChoiceHandler = (type: string) => {
    dispatch(gameActions.setChoice(type));
    dispatch(uiActions.showChoice(true));
  };

  return (
    <div
      className={styles.choices}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Button onClick={setPlayerChoiceHandler} type="paper" />
      <Button onClick={setPlayerChoiceHandler} type="scissors" />
      <Button onClick={setPlayerChoiceHandler} type="rock" />
    </div>
  );
};

export default Choices;
