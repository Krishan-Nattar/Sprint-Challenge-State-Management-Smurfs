import React, { useState } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const SmurfList = props => {
  useState(() => {
    props.getSmurf();
  }, []);

  const handleDelete = id =>{
    console.log(id)
  }

  return (
    <div>
      Smurf List
      {props.state.smurfs.map(item => {
        return <Smurf key={item.id} smurf={item} handleDelete={handleDelete}/>;
      })}
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
  { getSmurf }
)(SmurfList);
