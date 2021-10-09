import EventItem from "./EventItem";
import {Col, Row} from "react-bootstrap";

function EventsList(props) {
    return <div>
        <h4>{props.title}</h4>
        <Row>
            {props.events.map(event => {
                return <div style={{ width: '18rem' }}>
                    <EventItem event={event}/>
                </div>
            })}
        </Row>
    </div>
}

export default EventsList