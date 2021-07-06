import { useState } from "react";
import "./styles.css";

// jsx - js extended
// App component
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {
  Link,
  Route,
  Switch,
  Redirect,
  useHistory,
  useParams
} from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { PageNotFound } from "./PageNotFound";
import { Users } from "./Users";
import { Welcome } from "./Welcome";
import { Vote } from "./Vote";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function App() {
  const history = useHistory();
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
  const [open, setOpen] = useState(false);
  const addContestant = () => {
    setPoll(poll.concat({ company, color, content }));
    setOpen(true);
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

  // +Add -> open is true -> 2000ms or close button -> open is set false
  return (
    <div>
      {/* <a href="/detail" >detail</a> */}

      <AppBar position="sticky">
        <Toolbar>
          <Button onClick={() => history.push("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => history.push("/vote")} color="inherit">
            Vote (old path)
          </Button>
          <Button onClick={() => history.push("/poll")} color="inherit">
            Poll
          </Button>
          <Button onClick={() => history.push("/users")} color="inherit">
            Users
          </Button>
          <Button
            onClick={() => history.push("/addContestant")}
            color="inherit"
          >
            Users
          </Button>
          <Button
            onClick={() => history.push("/safasdfasdfasdfdf")}
            color="inherit"
          >
            Some random route
          </Button>
        </Toolbar>
      </AppBar>

      {/* <Link to="/">Home</Link>
      <br /> */}
      {/* old path */}
      {/* <Link to="/vote">Vote (old path)</Link>
      <br />
      <Link to="/poll">Poll</Link>
      <br />
      <Link to="/users">Users</Link>
      <br /> */}
      {/* <Link to="/addContestant">Add Contestant</Link>
      <br /> */}
      {/* <Link to="/safasdfasdfasdfdf">Some random route</Link> */}
      {/* old path -> /vote  new path -> /poll */}
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/users">
          <Users />
        </Route>
        <Route path="/vote">
          <Redirect to="/poll" />
        </Route>
        <Route path="/addContestant">
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

          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Successfully Added {company}
            </Alert>
          </Snackbar>
        </Route>

        <Route path="/poll">
          <div>
            <Button
              onClick={() => history.push("/addContestant")}
              variant="outlined"
              color="primary"
            >
              + Add Contestant
            </Button>
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
        </Route>
        <Route path="/:name">
          <CompanyDetail />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

function CompanyDetail() {
  const { name } = useParams();
  return (
    <div>
      <p> Company Detail of {name}</p>
    </div>
  );
}
