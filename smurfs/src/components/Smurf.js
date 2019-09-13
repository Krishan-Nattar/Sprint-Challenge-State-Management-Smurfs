import React from 'react';

const Smurf = (props) => {
    return ( 
        <div>
            {props.smurf.name}
            <button onClick={()=>props.handleDelete(props.smurf.id)}>Delete Smurf</button>
        </div>
     );
}
 
export default Smurf;