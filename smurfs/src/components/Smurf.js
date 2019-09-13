import React from 'react';

const Smurf = (props) => {
    console.log(props)
    return ( 
        <div>
            {props.smurf.name}
        </div>
     );
}
 
export default Smurf;