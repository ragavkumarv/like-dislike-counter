import "./styles.css";

// jsx - js extended
// App component
import { Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, Route, Switch, Redirect, useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { PageNotFound } from "./PageNotFound";
import { Users } from "./Users";
import { Welcome } from "./Welcome";
import { AddContestant } from "./AddContestant";
import { Poll } from "./Poll";
import { CompanyDetail } from "./CompanyDetail";

export const ALL_COMPANY_DETAILS = [
  { id: "6", company: "Apple", color: "grey", content: "US based company" },
  {
    id: "2",
    company: "Samsung",
    color: "skyblue",
    content: "Korean based company"
  },
  { id: "3", company: "MI", color: "orange", content: "China based company" },
  {
    id: "4",
    company: "Oneplus",
    color: "red",
    content: "China based company"
  },
  { id: "5", company: "Moto", color: "#000080", content: "US based company" }
];

export function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function App() {
  const history = useHistory();
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
          <AddContestant />
        </Route>

        <Route exact path="/poll">
          {/* Changing the route cause the component to get detroyed & recreated */}
          <Poll />
        </Route>
        <Route path="/poll/:companyid">
          <CompanyDetail />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

// P I R -> fn - Nodejs
