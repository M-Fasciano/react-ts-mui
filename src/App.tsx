import { Route, Routes } from "react-router-dom";
import Navigation from "./components/molecules/Navigation";
import Login from "./components/pages/Login";
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
      </Routes>
    </>
  );
}

export default App;
