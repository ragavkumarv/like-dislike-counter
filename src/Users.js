import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export function Users() {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  function loadUsers() {
    fetch("https://60c98aa8772a760017203b57.mockapi.io/users", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((result) => setUsers(result));
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Button
        onClick={() => history.goBack()}
        variant="outlined"
        color="primary"
      >
        🔙 Go back
      </Button>
      <Button
        onClick={() => history.goForward()}
        variant="outlined"
        color="primary"
      >
        Go Forward
      </Button>
      <div className="user-list">
        {users.map((data) => (
          <User key={data.id} {...data} />
        ))}
      </div>
    </>
  );
}

// React fragment
function User({ avatar, name, createdAt }) {
  return (
    <Card style={{ width: "400px" }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img src={avatar} />
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={name}
        subheader={new Date(createdAt).toDateString()}
      />
    </Card>
  );
}
