import {Route, Switch} from "react-router-dom";
import OverviewPage from "./components/pages/OverviewPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={OverviewPage} exact/>
            </Switch>
        </div>
    );
}

export default App;
