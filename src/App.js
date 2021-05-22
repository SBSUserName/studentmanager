import Header from "./components/header/Header";
import Home from "./pages/Home";
import AddStudent from "./components/student/AddStudent";
import EditStudent from "./components/student/EditStudent";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Provider from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Provider>
            <Router>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/addStudent" component={AddStudent} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/edit/:id" component={EditStudent} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </Router>
        </Provider>
    );
}

export default App;
