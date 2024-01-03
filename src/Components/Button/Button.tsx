import styles from "./Button.module.css";
// import styled from "styled-components";
interface Props {
  text: string;
  onSelect: () => void;
}

function Button({ text, onSelect }: Props) {
  return (
    <>
      <button className={styles.buttonColour} onClick={onSelect}>
        {text}
      </button>
    </>
  );
}

export default Button;
