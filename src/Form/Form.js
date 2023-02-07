import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Student Name"
        variant="outlined"
        onChange={props.onChangeHandler}
        name="name"
        value={props.value.name}

      />
      <br />
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={props.onChangeHandler}
        name="email"
        value={props.value.email}
      />
      <br />
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Mobile No."
        variant="outlined"
        onChange={props.onChangeHandler}
        name="mobile"
        value={props.value.mobile}
      />
      <br />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            onChange={props.onChangeHandler}
            control={<Radio />}
            label="Female"
            name="gender"
          />
          <FormControlLabel
            value="male"
            onChange={props.onChangeHandler}
            control={<Radio />}
            label="Male"
            name="gender"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <TextField
        margin="normal"
        id="outlined-basic"
        label="Hobbies"
        variant="outlined"
        onChange={props.onChangeHandler}
        name="hobbies"
        value={props.value.hobbies}
      />
      {props.getedit ? (
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={props.onEditSubmit}
          >
            Update
          </Button>
        </div>

      ) : (
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={props.onSubmitHandler}
            type="submit"
          >
            Sign up
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.onResetHandler}
          >
            Reset
          </Button>
        </div>
      )}
    </div>
    </form>
    
  );
};
export default Form;
