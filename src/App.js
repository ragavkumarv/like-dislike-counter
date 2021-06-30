import { useState } from "react";
import "./styles.css";

// jsx - js extended
// App component
export default function App() {
  const intialPoll = [
    { company: "Apple", color: "white" },
    { company: "Samsung", color: "skyblue" },
    { company: "MI", color: "orange" },
    { company: "Oneplus", color: "red" },
    { company: "Moto", color: "grey" }
  ];
  // react tracking then renders
  const [poll, setPoll] = useState(intialPoll);

  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");

  const addContestant = () => setPoll(poll.concat({ company, color }));

  // typing -> onChange - trigger -> event.target.value (contains new value)
  // -> setCompany -> company
  // -> setColor -> color

  return (
    <div>
      <input
        onChange={(event) => setCompany(event.target.value)}
        placeholder="Enter company"
      />
      {/* BG color must change when you type in the input */}
      <input
        style={{ color }}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter color"
      />
      <button onClick={addContestant}>+Add</button>
      {poll.map((detalil) => (
        <Vote company={detalil.company} color={detalil.color} />
      ))}
    </div>
  );
}
// Vote is child component of App
// Which is the child component of Vote? Counter & Content

function Vote({ color, company }) {
  // console.log(props);
  // state - data - likes
  // ternary operator used
  // const bgStyle = { backgroundColor: likes >= dislikes ? "green" : "crimson" };
  const bgStyle = { backgroundColor: "#eee" };

  return (
    <div className="vote-system" style={bgStyle}>
      <h4 style={{ color }}>{company}</h4>
      <Counter color="orchid" emoji="👍" />
      {/* ctrl+/ */}
      {/* Task is to refactor the dislike button using Counter component */}
      <Counter color="crimson" emoji="👎" />
      <Content />
    </div>
  );
}

// DRY - Dont Repeat Yourself
// Clue  - Convert color & emoji as props
// common - counter , different - thumbs up/down, color - green,red
// First letter must be capital
function Content() {
  const [expanded, setExpanded] = useState(true); // true
  // condtional rendering
  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={() => setExpanded(!expanded)}>
        Show {expanded ? "Less" : "More"}
      </button>
      {expanded ? <p> Add content </p> : ""}
    </div>
  );
}

//1. Task
// Each company different content
// Adding company you add with a content

//2. Task
// Build show more recipe
// map - loop all the recipes
// Add recipes

// Show More -> Show Less -> Show More
// expanded === true ? false : true;
// !expanded
// true -> click -> false -> click -> true ....

// 10 > 7 ? 'Awesome' : 'cool';

// function Counter(props) {
function Counter({ color, emoji }) {
  // Destructure props
  // const {color, emoji} = props;
  const [counter, setCounter] = useState(0); // React hook
  const counterStyles = {
    fontSize: "25px",
    fontWeight: "bold",
    color
  };
  return (
    <button style={counterStyles} onClick={() => setCounter(counter + 1)}>
      {/* <button style={counterStyles} onClick={() => counter = counter + 1}> */}
      {emoji} {counter}
    </button>
  );
}

// Task
// BackgroundColor app should be green if same or more number of likes are present,
// If more dislikes then backgroundColor of app is red

// React - (document. dont use)
// document.querySelector()
// jsx - will be converted in to JS by React
// className - class in keyword

// Task
// Create Recipe app (5)
// Img
// title
// Ings
// Prep step
