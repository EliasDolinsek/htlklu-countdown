import EventItem from "./EventItem";
import {Alert, Col, Row} from "react-bootstrap";

function EventsList(props) {
    let content;
    if (props.events.length === 0) {
        content = <Alert variant="warning" className="mt-2">There are currently no events live :/</Alert>
    } else {
        content = <Row>
            {props.events.map(event => {
                return <Col className="mt-3" xl="3" md="4" sm={6} key={event.id}>
                    <EventItem event={event}/>
                </Col>
            })}
        </Row>
    }

    return <div className="mt-5">
        <h4>{props.title}</h4>
        {content}
    </div>
}

export default EventsList