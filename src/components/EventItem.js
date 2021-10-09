import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function EventItem(props) {
    const history = useHistory();
    return <Card>
        <Card.Img variant="top" src={props.event.imageUrl}/>
        <Card.Body>
            <Card.Title>{props.event.title}</Card.Title>
            <Card.Text>{props.event.readableEventDate}</Card.Text>
            <Button variant="primary" onClick={() => history.push(`/event/${props.event.id}`)}>SHOW</Button>
        </Card.Body>
    </Card>
}

export default EventItem