import classes from "./CountdownPage.module.scss"
import {Container, Spinner} from "react-bootstrap";
import Countdown from "react-countdown";
import {createRef, useEffect, useState} from "react";

const DUMMY_EVENT = {
    id: 5,
    title: "Angewandte Mathematik Schularbeit",
    description: "Some description",
    startDate: Date.now() + 10000,
    endDate: Date.now() + 15000,
    readableEventDate: "Some event date",
    imageUrl: "https://i.ytimg.com/vi/_0elmil7eVM/maxresdefault.jpg"
}

function CountdownPage(props) {
    const event = DUMMY_EVENT
    const countdownRef = createRef()

    const [useStartDateAsCountdown, setUseStartDateAsCountdown] = useState(true)
    const [isCountdownRunning, setCountdownRunning] = useState(false)

    useEffect(() => {
        if (event.startDate < Date.now()) {
            setUseStartDateAsCountdown(false)
        } else {
            setUseStartDateAsCountdown(true)
        }

        setCountdownRunning(true)
        countdownRef.current.api.start()
    }, [countdownRef, event.endDate, event.startDate, isCountdownRunning])

    const renderer = ({hours, minutes, seconds, completed}) => {
        const formattedTime = `${hours}h ${minutes}m ${seconds}s`
        if (completed && event.endDate < Date.now()) {
            return <h1><strike>{formattedTime}</strike></h1>
        } else {
            const liveIndicator = <Spinner animation="grow" variant="danger" />
            return <h1>{!useStartDateAsCountdown ? liveIndicator : null} {formattedTime}</h1>;
        }
    };

    return <div>
        <CountdownImageContainer event={event}/>
        <Container className="mt-4">
            <h6>{event.title} {useStartDateAsCountdown ? "starts in" : "is over in"}</h6>
            <Countdown ref={countdownRef} date={useStartDateAsCountdown ? event.startDate : event.endDate}
                       daysInHours={true} onComplete={() => setCountdownRunning(false)} renderer={renderer}/>
            <h4>{event.description}</h4>
        </Container>
    </div>
}

function CountdownImageContainer(props) {
    return <img src={props.event.imageUrl} alt={props.event.description} className={classes.EventImage}/>
}

export default CountdownPage