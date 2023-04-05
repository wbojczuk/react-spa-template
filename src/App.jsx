import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";

export default function App(){
    const [checkLinks, setCheckLinks] = React.useState(["close"]);

    return(
        <BrowserRouter>
            <Nav checkLinks={checkLinks} setCheckLinks={setCheckLinks} />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}