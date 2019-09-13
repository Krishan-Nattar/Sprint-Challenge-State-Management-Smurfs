import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';
import {Input, Button } from 'semantic-ui-react';

const FormSmurf = (props) => {

    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = e =>{
        setNewSmurf({
            ...newSmurf,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(newSmurf.name != "" && newSmurf.age != "" && newSmurf.height != ""){
            props.addSmurf(newSmurf);
            setNewSmurf({
                name: "",
                age: "",
                height: ""
            })
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <Input name="name" placeholder="Input Smurf Name..." value={newSmurf.name} onChange={handleChange} />
            <Input name="age" placeholder="Input Smurf Age..." value={newSmurf.age} onChange={handleChange} />
            <Input name="height" placeholder="Input Smurf Height..." value={newSmurf.height} onChange={handleChange} />
            <Button type="submit">Add New Smurf</Button>
        </form>
     );
}
 
export default connect(null, {addSmurf})(FormSmurf);
