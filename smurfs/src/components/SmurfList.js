import React from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';
// import {} from 


const SmurfList = (props) => {
    return ( 
        <div>
            Smurf List
            <Smurf />
        </div>
     );
}

const mapStateToProps = state =>{
    return {
        state
    }
}
 
export default SmurfList;