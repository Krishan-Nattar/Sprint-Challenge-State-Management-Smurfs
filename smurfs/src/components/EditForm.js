import React, { useState } from "react";
import { connect } from "react-redux";
import { editSmurf } from "../actions";
import { Input, Button } from "semantic-ui-react";

const EditSmurf = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: props.smurf.name,
    age: props.smurf.age,
    height: props.smurf.height,
    id: props.smurf.id
  });

  const handleChange = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newSmurf.name != "" && newSmurf.age != "" && newSmurf.height != "") {
      props.editSmurf(newSmurf);
      setNewSmurf({
        name: "",
        age: "",
        height: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <Input
        name="name"
        placeholder="Input Smurf Name..."
        value={newSmurf.name}
        onChange={handleChange}
      />
      <Input
        name="age"
        placeholder="Input Smurf Age..."
        value={newSmurf.age}
        onChange={handleChange}
      />
      <Input
        name="height"
        placeholder="Input Smurf Height..."
        value={newSmurf.height}
        onChange={handleChange}
      />
      <Button color="blue" type="submit">
        Edit Smurf
      </Button>
    </form>
  );
};

export default connect(
  null,
  { editSmurf }
)(EditSmurf);
