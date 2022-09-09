import { Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import SignIn from "../components/SignIn";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
        </Routes>
    )
}

export default Router;