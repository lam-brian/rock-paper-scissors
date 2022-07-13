import Button from "./UI/Button";
import background from "../images/bg-triangle.svg";
import styles from "./Choices.module.css";

const Choices = () => {
  return (
    <div
      className={styles.choices}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Button type="paper" />
      <Button type="scissors" />
      <Button type="rock" />
    </div>
  );
};

export default Choices;
