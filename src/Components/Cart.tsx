interface Props {
  CartItems: string[];
  onClear: () => void;
  onAdd: () => void;
}

function Cart({ CartItems, onClear, onAdd }: Props) {
  return (
    <>
      <ul>
        {CartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>{"Clear Cart"}</button>
      <button onClick={onAdd}>{"add item"}</button>
    </>
  );
}

export default Cart;
