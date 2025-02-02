import React from "react";
import { Card, Button, Image, Segment } from "semantic-ui-react";

const Smurf = props => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={`https://picsum.photos/100/100?random=${props.smurf.id}`}
        />
        <Card.Header>{props.smurf.name}</Card.Header>
        <Card.Meta>
          age: {props.smurf.age}
          <p> Height: {props.smurf.height}</p>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            onClick={() => props.handleEdit(props.smurf)}
          >
            Edit Smurf
          </Button>
          <Button
            basic
            color="red"
            onClick={() => props.handleDelete(props.smurf.id)}
          >
            Delete Smurf
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Smurf;
