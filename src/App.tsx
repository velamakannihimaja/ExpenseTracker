// import Alert from "./Components/Alert";
// import Button from "./Components/Button";
import { useState } from "react";
import ListGroup from "./Components/ListGroup/ListGroup";
import Button from "./Components/Button/Button";
import "./App.css";
import Cancel from "./Components/Cancel";
import Like from "./Components/Like";
import UpdateButton from "./Components/UpdateButton";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import Game from "./Components/Game";
import ExtendableText from "./Components/ExtendableText";
import Form from "./Components/Form";
import ExpenseTracker from "./Components/ExpenseTracker";
import DropDown from "./Components/DropDown";
import ExpenseList from "./Components/ExpenseList";
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

function App() {
  const fruits = ["apple", "mango", "orange", "grapes", "guava"];
  const handleOnSelect = () => {
    console.log("clicked");
    setListGroup(true);
  };

  const handleCancel = () => {
    setListGroup(false);
  };

  const [showListGroup, setListGroup] = useState(false);

  return (
    <div>
      {showListGroup && (
        <ListGroup
          fruits={fruits}
          heading="Fruits"
          onSelect={(fruit) => {
            console.log(fruit);
          }}
        ></ListGroup>
      )}
      <Button text="click me" onSelect={handleOnSelect}></Button> <br></br>
      <Cancel text="Cancel" onClick={handleCancel}></Cancel>
    </div>
  );
}


function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
}


function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);
  console.log(bugs);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "New"}
        </p>
      ))}
      <UpdateButton text="click me" onClick={handleClick}></UpdateButton>
    </div>
  );
}

function App() {
  const [CartItems, setCartItems] = useState([
    "product1",
    "product2",
    "product3",
    "product4",
  ]);

  const handleOnAdd = () => {
    setCartItems([...CartItems, "product5", "product6"]);
  };
  return (
    <div>
      <NavBar CartItemsCount={CartItems.length} />
      <Cart
        onAdd={handleOnAdd}
        CartItems={CartItems}
        onClear={() => setCartItems([])}
      />
    </div>
  );
}
*/
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 3, category: "Grocery" },
    { id: 2, description: "sugar", amount: 5, category: "Grocery" },
    { id: 3, description: "paste", amount: 5, category: "Utilities" },
    { id: 4, description: "movie", amount: 5, category: "Entertainment" },
    { id: 5, description: "Netflix", amount: 5, category: "Entertainment" },
    { id: 6, description: "napkins", amount: 5, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseTracker
        onSubmit={(newExpense) => {
          setExpenses([
            ...expenses,
            {
              ...newExpense,
              id: expenses.length + 1,
            },
          ]);

          console.log(newExpense);
        }}
      ></ExpenseTracker>

      <DropDown
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></DropDown>
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}
export default App;
