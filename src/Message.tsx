//PascalCasing
function Message() {
  //JSX = javascript XML
  //it is not supported by browser directly. So it is complied down to JS by tools like Babel
  const name = "Himaja";
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello World</h1>;
}

export default Message;
