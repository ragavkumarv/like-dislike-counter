import { useState } from "react";
import { Button } from "@material-ui/core";

// DRY - Dont Repeat Yourself
// Clue  - Convert color & emoji as props
// common - counter , different - thumbs up/down, color - green,red
// First letter must be capital

export function Content({ content }) {
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
