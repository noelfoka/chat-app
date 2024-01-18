import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
    return (
        <Router>
            <Route path="/" exact Component={Join} />
            <Route path="/chat" Component={Chat} />
        </Router>
    )
}

export default App;