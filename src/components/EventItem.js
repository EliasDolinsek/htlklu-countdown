import {Button, Card} from "react-bootstrap";

function EventItem(props) {
    return <Card>
        <Card.Img variant="top" src={props.event.imageUrl}/>
        <Card.Body>
            <Card.Title>{props.event.title}</Card.Title>
            <Card.Text>{props.event.readableEventDate}</Card.Text>
            <Button variant="primary">SHOW</Button>
        </Card.Body>
    </Card>
}

export default EventItem