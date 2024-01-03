interface Props {
  Name: string;
  toppings: string[];
  onSelect: () => void;
}

function Game({ Name, onSelect, toppings }: Props) {
  return (
    <div>
      {"Hi " + Name} <br></br>
      {toppings}
      <button type="button" className="btn btn-primary" onClick={onSelect}>
        click me
      </button>
    </div>
  );
}

export default Game;
