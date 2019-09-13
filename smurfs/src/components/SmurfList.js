import React, { useState } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurf, deleteSmurf, editSmurf } from "../actions";
import {Card} from 'semantic-ui-react';

const SmurfList = props => {
  useState(() => {
    props.getSmurf();
  }, []);

  const handleDelete = id =>{
    props.deleteSmurf(id);
  }

  const handleEdit = id =>{
    console.log('editing');
    // props.editSmurf(id, data)
  }

  return (
    <div>
      Smurf List
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
  { getSmurf, deleteSmurf, editSmurf }
)(SmurfList);
