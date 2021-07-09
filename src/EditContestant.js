import { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "./App";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// npm install @hookform/resolvers yup - locally
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContestantSchema = yup.object().shape({
  company: yup
    .string()
    .required("⚠️ Provide your company name")
    .min(3)
    .max(10, "Keep it short"),
  color: yup.string().required(),
  content: yup.string().required().min(10)
});

export function EditContestant() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(ContestantSchema)
  });

  // Start Getting the company/contestant detail
  const { companyid } = useParams();
  const [contestant, setContestant] = useState({});
  useEffect(() => {
    loadContestantDetails(companyid);
  }, []);

  function loadContestantDetails(id) {
    // Filter the contestant in the API
    fetch(`https://60c98aa8772a760017203b57.mockapi.io/poll/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Company", data);
        setContestant(data);
      });
  }
  // End Getting the company/contestant detail

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const editContestant = (data) => {
    console.log("form data", data);
    setOpen(true);
    fetch(`https://60c98aa8772a760017203b57.mockapi.io/poll/${companyid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
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

  console.log(contestant);

  return (
    <div style={{ padding: "10px" }}>
      {contestant.id ? (
        <div className="vote-form">
          <TextField
            variant="outlined"
            {...register("company")} // onChange, onClick, onFocus - access
            error={errors?.company?.message} // red color
            helperText={errors?.company?.message}
            defaultValue={contestant.company}
            label="Enter company"
          />
          <TextField
            variant="outlined"
            style={{ backgroundColor: getValues("color") }}
            {...register("color")}
            error={errors?.color?.message}
            helperText={errors.color && errors.color.message}
            defaultValue={contestant.color}
            label="Enter color"
          />
          <TextField
            variant="outlined"
            {...register("content")}
            error={errors?.content?.message}
            // multiline
            // rows={4}
            defaultValue={contestant.content}
            helperText={errors?.content?.message}
            label="Enter content"
          />
          <Button
            onClick={handleSubmit(editContestant)}
            variant="outlined"
            color="primary"
          >
            Edit
          </Button>
        </div>
      ) : (
        ""
      )}

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully Edited {getValues("company")}
        </Alert>
      </Snackbar>
    </div>
  );
}

// .then((result) => setPoll(result))
// .catch((err) => setPoll(intialPoll))

// if( errors.color && error.color.message){
//   errors = error.color.message
// }
