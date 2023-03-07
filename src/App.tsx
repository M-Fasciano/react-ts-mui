import { Route, Routes } from "react-router-dom";
import Navigation from "./components/molecules/Navigation";
import Heading from "./components/pages/Heading";
import Login from "./components/pages/Login";
import Reminder from "./components/pages/Reminder";
import ToggleLayout from "./components/pages/ToggleLayout";
import Video from "./components/pages/Video";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="video" element={<Video />} />
        <Route path="layout" element={<ToggleLayout />} />
        <Route path="heading" element={<Heading />} />
        <Route path="reminder" element={<Reminder />} />
      </Routes>
    </>
  );
}

export default App;
