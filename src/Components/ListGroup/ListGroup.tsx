import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px;
`;

interface Props {
  fruits: string[];
  heading: string;
  onSelect: (fruit: string) => void;
}

function ListGroup({ fruits, heading, onSelect }: Props) {
  const [selectFruit, setSelectFruit] = useState(-1);
  return (
    <>
      <List className={[styles.listGroup, styles.container].join(" ")}>
        <h1>{heading}</h1>
        {fruits.map((fruit, index) => (
          <ListItem
            className={
              index === selectFruit
                ? "list-group-item active"
                : "list-group-item"
            }
            key={fruit}
            onClick={() => {
              setSelectFruit(index);
              onSelect(fruit);
            }}
          >
            {fruit}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
