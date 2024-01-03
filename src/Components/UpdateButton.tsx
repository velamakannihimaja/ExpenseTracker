interface Props {
  text: string;
  onClick: () => void;
}
function UpdateButton({ text, onClick }: Props) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}

export default UpdateButton;
