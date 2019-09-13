import React, { useState } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurf, deleteSmurf, editSmurf, startEdit } from "../actions";
import {Card} from 'semantic-ui-react';
import Form from './Form';
import EditForm from './EditForm';

const SmurfList = props => {
  useState(() => {
    props.getSmurf();
  }, []);

  const handleDelete = id =>{
    props.deleteSmurf(id);
  }

  const handleEdit = id =>{
    props.startEdit();
    // props.editSmurf(id, data)
  }

  return (
    <div>
      {!props.state.editing && <Form />}
      {props.state.editing && <EditForm />}
      
      <Card.Group>
      {props.state.smurfs.map(item => {
        return <Smurf key={item.id} smurf={item} handleDelete={handleDelete} handleEdit={handleEdit} />;
      })}
      </Card.Group>
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { getSmurf, deleteSmurf, editSmurf, startEdit }
)(SmurfList);
