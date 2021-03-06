import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// APP COMPONENTS
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";
import Members from "./pages/Members";

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/about"
                    render={() => <About title="Teran's About" />}
                />
                <Route exact path="/teachers" component={Teachers} />
                <Route path="/teachers/:topic/:name" component={Featured} />
                <Route path="/courses" component={Courses} />
                <Route path="/members" component={Members}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
