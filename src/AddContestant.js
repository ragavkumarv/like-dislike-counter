import { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "./App";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export function AddContestant() {
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [content, setContent] = useState("");
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const addContestant = () => {
    // setPoll(poll.concat({ company, color, content }));
    fetch("https://60c98aa8772a760017203b57.mockapi.io/poll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        company,
        color,
        content
      })
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then((data) => {
        setOpen(true);
        history.push("/poll");
      });
  };
  // typing -> onChange - trigger -> event.target.value (contains new value)
  // -> setCompany -> company
  // -> setColor -> color
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <div className="vote-form">
        <TextField
          variant="outlined"
          // onChange={(event) => setCompany(event.target.value)}
          label="Enter company"
        />

        <TextField
          variant="outlined"
          style={{ backgroundColor: color }}
          // onChange={(event) => setColor(event.target.value)}
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

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully Added {company}
        </Alert>
      </Snackbar>
    </div>
  );
}

// .then((result) => setPoll(result))
// .catch((err) => setPoll(intialPoll))
