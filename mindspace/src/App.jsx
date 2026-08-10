import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import GuideLines from "./pages/GuideLines";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/guidelines" element={<GuideLines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
