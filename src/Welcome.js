import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// if(som)
// if(som)
// if(som)
export function Welcome() {
  const history = useHistory();
  return (
    <div>
      <Button
        onClick={() => history.goForward()}
        variant="outlined"
        color="primary"
      >
        Go Forward
      </Button>
      <p> Welcome to the Awesome app!!!! </p>
    </div>
  );
}
