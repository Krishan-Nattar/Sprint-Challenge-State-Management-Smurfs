import React, {useState} from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';
import {getSmurf} from '../actions';


const SmurfList = (props) => {
    console.log(props);


    useState(()=>{

        props.getSmurf()

    },[])
    
    
    
    return ( 
        <div>
            Smurf List
            {props.state.smurfs.map(item=>{
                return <Smurf />
            })}
        </div>
     );
}

const mapStateToProps = state =>{
    return {
        state
    }
}
 
export default connect(mapStateToProps, {getSmurf})(SmurfList);