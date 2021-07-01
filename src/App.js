import { useState } from "react";
import "./styles.css";

// jsx - js extended
// App component
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";

export default function App() {
  const intialPoll = [
    { company: "Apple", color: "grey", content: "US based company" },
    { company: "Samsung", color: "skyblue", content: "Korean based company" },
    { company: "MI", color: "orange", content: "China based company" },
    { company: "Oneplus", color: "red", content: "China based company" },
    { company: "Moto", color: "#000080", content: "US based company" }
  ];
  // react tracking then renders
  const [poll, setPoll] = useState(intialPoll);

  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [content, setContent] = useState("");

  const addContestant = () => setPoll(poll.concat({ company, color, content }));

  // typing -> onChange - trigger -> event.target.value (contains new value)
  // -> setCompany -> company
  // -> setColor -> color

  return (
    <div>
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <div className="vote-form">
        <TextField
          variant="outlined"
          onChange={(event) => setCompany(event.target.value)}
          label="Enter company"
        />
        {/* BG color must change when you type in the input */}
        <TextField
          variant="outlined"
          style={{ backgroundColor: color }}
          onChange={(event) => setColor(event.target.value)}
          label="Enter color"
        />
        <TextField
          variant="outlined"
          onChange={(event) => setContent(event.target.value)}
          label="Enter content"
        />
        <Button onClick={addContestant} variant="outlined" color="primary">
          +Add
        </Button>
      </div>

      <div className="poll">
        {poll.map((detalil) => (
          <Vote
            company={detalil.company}
            color={detalil.color}
            content={detalil.content}
          />
        ))}
      </div>
    </div>
  );
}
// Vote is child component of App
// Which is the child component of Vote? Counter & Content

function Vote({ color, company, content }) {
  // console.log(props);
  // state - data - likes
  // ternary operator used
  // const bgStyle = { backgroundColor: likes >= dislikes ? "green" : "crimson" };
  const bgStyle = { backgroundColor: "#eee" };

  return (
    <div className="vote-system">
      <Card>
        <h4 style={{ color }}>{company}</h4>
        <Counter color="orchid" emoji="👍" />
        {/* ctrl+/ */}
        {/* Task is to refactor the dislike button using Counter component */}
        <Counter color="crimson" emoji="👎" />
        <Content content={content} />
      </Card>
    </div>
  );
}

// DRY - Dont Repeat Yourself
// Clue  - Convert color & emoji as props
// common - counter , different - thumbs up/down, color - green,red
// First letter must be capital
function Content({ content }) {
  const [expanded, setExpanded] = useState(true); // true
  // condtional rendering
  return (
    <div style={{ marginTop: "10px" }}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setExpanded(!expanded)}
      >
        Show {expanded ? "Less" : "More"}
      </Button>
      {expanded ? <p> {content} </p> : ""}
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
    <IconButton
      size="large"
      style={counterStyles}
      onClick={() => setCounter(counter + 1)}
    >
      {/* <button style={counterStyles} onClick={() => counter = counter + 1}> */}
      {emoji} {counter}
    </IconButton>
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
