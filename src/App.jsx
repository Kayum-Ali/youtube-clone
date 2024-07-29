import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";



const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
          <Route path="/video/:categoryId/:videoId" element={<Video></Video>}>
          </Route>
      </Routes>
      
    </div>
  );
};

export default App;