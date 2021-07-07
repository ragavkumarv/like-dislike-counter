import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useHistory } from "react-router-dom";
import { Vote } from "./Vote";
import { ALL_COMPANY_DETAILS } from "./App";

export function Poll() {
  const history = useHistory();
  const intialPoll = ALL_COMPANY_DETAILS;

  function loadContestant() {
    fetch("https://60c98aa8772a760017203b57.mockapi.io/poll", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setPoll(result))
      .catch((err) => setPoll(intialPoll));
  }

  useEffect(() => {
    loadContestant();
  }, []);

  // react tracking then renders
  const [poll, setPoll] = useState([]);

  const [search, setSearch] = useState("");

  function deleteContestant(id) {
    fetch(`https://60c98aa8772a760017203b57.mockapi.io/poll/${id}`, {
      method: "DELETE"
    })
      .then((data) => data.json()) // inside 'then' means it is delete sucessfully
      .then((data) => console.log(data))
      .then((data) => loadContestant());
    // Delete -> refresh the data (load data)
    // Delete -> GET
  }

  return (
    <div style={{ padding: "10px" }}>
      <div className="action-bar">
        <TextField
          label="Search"
          id="outlined-start-adornment"
          onChange={(event) => setSearch(event.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">🔍</InputAdornment>
          }}
          variant="outlined"
        />
        <Button
          onClick={() => history.push("/addContestant")}
          variant="outlined"
          color="primary"
        >
          + Add Contestant
        </Button>
      </div>
      <div className="poll">
        {poll
          .filter((data) =>
            data.company.toLowerCase().includes(search.toLowerCase())
          )
          .map((detail) => (
            <div>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => deleteContestant(detail.id)}
              >
                Delete
              </Button>
              <Vote
                // It increases reacts performance
                key={detail.id} // unique
                id={detail.id}
                company={detail.company}
                color={detail.color}
                content={detail.content}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

// freeze -> look is deleted
// Mohammed - delete - fb - deleted - 'Yes'
// Mohammed - deleted - 'No'
