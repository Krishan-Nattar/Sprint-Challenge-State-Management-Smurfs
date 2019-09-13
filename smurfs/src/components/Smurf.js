import React from 'react';

const Smurf = (props) => {
    return ( 
        <div>
            <button onClick={()=>props.handleEdit(props.smurf.id)}>Edit Smurf</button>
            {props.smurf.name}
            <button onClick={()=>props.handleDelete(props.smurf.id)}>Delete Smurf</button>
        </div>
     );
}
 
export default Smurf;