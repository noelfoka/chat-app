import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom"

import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => {
    return (
        <Router>
            <Route path="/" exact Component={Join} />
            <Route path="/chat" Component={Chat} />
        </Router>
    )
}

export default App;