import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Main from "./components/Main";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () =>{
        return(
            <Container>
                <Router>
                <Header/>
                    <Container style={{marginTop:'80px'}}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/kitm" element={<About/>}/>
                </Routes>
                    </Container>
                </Router>
            </Container>
        )
}
export default App
