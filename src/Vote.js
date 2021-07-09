import Card from "@material-ui/core/Card";
import { Counter } from "./Counter";
import { Content } from "./Content";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Vote is child component of App
// Which is the child component of Vote? Counter & Content
export function Vote({ color, company, content, id }) {
  const [likes, setLikes] = useState(0); // React hook
  const [dislikes, setDislikes] = useState(0); // React hook
  // console.log(props);
  // state - data - likes
  // ternary operator used
  // const bgStyle = { backgroundColor: likes >= dislikes ? "green" : "crimson" };

  // const bgStyle = { backgroundColor: "#eee" };
  // /apple
  // /companyname
  const history = useHistory();
  return (
    <div className="vote-system">
      <Card>
        <h4
          onClick={() => history.push(`/poll/${id}`)}
          style={{ color, cursor: "pointer" }}
        >
          {likes > dislikes ? "🏆" : ""} {likes === dislikes ? "🥈" : ""}{" "}
          {company}
        </h4>
        <Counter
          counter={likes}
          setCounter={setLikes}
          color="orchid"
          emoji="👍"
          type="primary"
        />
        <Counter
          counter={dislikes}
          setCounter={setDislikes}
          color="crimson"
          emoji="👎"
          type="secondary"
        />

        <Content content={content} />
      </Card>
    </div>
  );
}
