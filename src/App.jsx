import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Partners from "./pages/Partners"

const App = () => 
    <Router>
        <Layout>
            <Route path="/"></Route>
            <Route path="/partners"><Partners/></Route>
        </Layout>
    </Router>
export default App
