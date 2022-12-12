import { Route, Routes } from "react-router-dom";
import Navigation from "./components/molecules/Navigation";
import Login from "./components/pages/Login";
import Video from "./components/pages/Video";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="video" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
