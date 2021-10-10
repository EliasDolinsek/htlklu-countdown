import {Container} from "react-bootstrap";
import EventsList from "../EventsList";
import HtlKluCountdownNavBar from "../nav/HtlKluCountdownNavBar";

const DUMMY_DATA = [
    {
        id: 1,
        title: "Test",
        description: "Test",
        startDate: Date.now(),
        endDate: Date.now(),
        readableEventDate: "In 2 days",
        imageUrl: "https://i.ytimg.com/vi/_0elmil7eVM/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Test",
        description: "Test",
        startDate: Date.now(),
        endDate: Date.now(),
        readableEventDate: "In 2 days",
        imageUrl: "https://www.howtogeek.com/wp-content/uploads/2018/06/shutterstock_1006988770.png.pagespeed.ce.j7cKjHOFa7.png"
    },
    {
        id: 3,
        title: "Test 2",
        description: "Test",
        startDate: Date.now(),
        endDate: Date.now(),
        readableEventDate: "In 2 days",
        imageUrl: "https://www.howtogeek.com/wp-content/uploads/2018/06/shutterstock_1006988770.png.pagespeed.ce.j7cKjHOFa7.png"
    },
    {
        id: 4,
        title: "Test 2",
        description: "Test",
        startDate: Date.now(),
        endDate: Date.now(),
        readableEventDate: "In 2 days",
        imageUrl: "https://www.howtogeek.com/wp-content/uploads/2018/06/shutterstock_1006988770.png.pagespeed.ce.j7cKjHOFa7.png"
    },
    {
        id: 5,
        title: "Test 2",
        description: "Test",
        startDate: Date.now(),
        endDate: Date.now(),
        readableEventDate: "In 2 days",
        imageUrl: "https://www.howtogeek.com/wp-content/uploads/2018/06/shutterstock_1006988770.png.pagespeed.ce.j7cKjHOFa7.png"
    }
]

function OverviewPage() {
    return <div>
        <HtlKluCountdownNavBar />
        <Container fluid="xl">
            <EventsList title={"Single Events"} events={DUMMY_DATA}/>
            <EventsList title={"Recurring Events"} events={DUMMY_DATA}/>
        </Container>>
    </div>
}

export default OverviewPage