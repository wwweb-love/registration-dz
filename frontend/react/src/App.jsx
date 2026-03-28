import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, LeaveARequest, ApplicationsFromTheForm } from "./pages";
import { NoteFound } from "./components";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LeaveARequest />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/app-from-the-form"
                    element={<ApplicationsFromTheForm />}
                ></Route>
                <Route path="*" element={<NoteFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
