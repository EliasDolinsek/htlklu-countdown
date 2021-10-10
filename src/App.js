import {Route, Switch} from "react-router-dom";
import OverviewPage from "./components/pages/OverviewPage";
import CountdownPage from "./components/pages/CountdownPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={OverviewPage} exact/>
                <Route path="/event/:id" component={CountdownPage}/>
            </Switch>
        </div>
    );
}

export default App;
