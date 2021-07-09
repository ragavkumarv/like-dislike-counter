import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export function Users() {
  const history = useHistory();
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
      <p> User details </p>
    </>
  );
}

// React fragment
{
  /* <>
</> */
}
