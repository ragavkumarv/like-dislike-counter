import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

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

export function Counter({ color, emoji, type }) {
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
      <Badge badgeContent={counter} color={type}>
        {emoji}
      </Badge>
    </IconButton>
  );
}
