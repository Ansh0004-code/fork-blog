import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
