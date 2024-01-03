// import styles from "./Components/Button/Button.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

function Cancel({ text, onClick }: Props) {
  return (
    <>
      <button className="" onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Cancel;
