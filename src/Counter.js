import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

export function Counter({ color, emoji, type, counter, setCounter }) {
  const counterStyles = {
    fontSize: "25px",
    fontWeight: "bold",
    color
  };
  return (
    <IconButton
      size="medium"
      style={counterStyles}
      onClick={() => setCounter(counter + 1)}
    >
      <Badge badgeContent={counter} color={type}>
        {emoji}
      </Badge>
    </IconButton>
  );
}

// Lifting the state up
// App -> Poll -> Vote (like & disklikes)  -> Counter
