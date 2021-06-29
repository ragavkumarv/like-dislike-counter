import { useState } from "react";
import "./styles.css";

// jsx - js extended
// App component
export default function App(props) {
  console.log(props);
  // state - data - likes
  // ternary operator used
  // const bgStyle = { backgroundColor: likes >= dislikes ? "green" : "crimson" };
  const bgStyle = { backgroundColor: "#eee" };

  return (
    <div className="App" style={bgStyle}>
      <h4 style={{ color: props.color }}>{props.company}</h4>
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
  return <h3> Cast your Votes </h3>;
}

function Counter(props) {
  const [counter, setCounter] = useState(0); // React hook
  const counterStyles = {
    fontSize: "25px",
    fontWeight: "bold",
    color: props.color
  };
  return (
    <button style={counterStyles} onClick={() => setCounter(counter + 1)}>
      {props.emoji} {counter}
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
