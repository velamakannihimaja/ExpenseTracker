interface Props {
  CartItemsCount: number;
}

function NavBar({ CartItemsCount }: Props) {
  return <p>{CartItemsCount}</p>;
}

export default NavBar;
