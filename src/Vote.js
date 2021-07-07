import Card from "@material-ui/core/Card";
import { Counter } from "./Counter";
import { Content } from "./Content";
import { useHistory } from "react-router-dom";

// Vote is child component of App
// Which is the child component of Vote? Counter & Content
export function Vote({ color, company, content, id }) {
  // console.log(props);
  // state - data - likes
  // ternary operator used
  // const bgStyle = { backgroundColor: likes >= dislikes ? "green" : "crimson" };
  const bgStyle = { backgroundColor: "#eee" };
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
          {company}
        </h4>
        <Counter color="orchid" emoji="👍" type="primary" />
        <Counter color="crimson" emoji="👎" type="secondary" />
        <Content content={content} />
      </Card>
    </div>
  );
}
