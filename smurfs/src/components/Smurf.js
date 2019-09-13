import React from 'react';
import {Card, Button, Image, Segment} from 'semantic-ui-react';

const Smurf = (props) => {
    return ( 
        // <div>
        //     <Button onClick={()=>props.handleEdit(props.smurf.id)}>Edit Smurf</Button>
        //     {props.smurf.name}
        //     <Button onClick={()=>props.handleDelete(props.smurf.id)}>Delete Smurf</Button>
        // </div>

<Card>
<Card.Content>
  <Image
    floated='right'
    size='mini'
    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
  />
  <Card.Header>{props.smurf.name}</Card.Header>
  <Card.Meta>age: {props.smurf.age}<p> Height{props.smurf.height}</p></Card.Meta>

</Card.Content>
<Card.Content extra>
  <div className='ui two buttons'>
  <Button basic color="green" onClick={()=>props.handleEdit(props.smurf.id)}>Edit Smurf</Button>
  <Button basic color="red" onClick={()=>props.handleDelete(props.smurf.id)}>Delete Smurf</Button>
  </div>
</Card.Content>
</Card>
     );
}
 
export default Smurf;