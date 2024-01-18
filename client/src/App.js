import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact Component={Join} />
                <Route path="/chat" Component={Chat} />
            </Routes>
        </Router>
    )
}

export default App;