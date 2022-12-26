import { Route, Routes } from "react-router-dom";

import RequireAuth from "./hoc/RequireAuth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feeds from "./pages/Feeds";
import Careers from "./pages/Careers";
import Posts from "./pages/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        />
        <Route
          path="careers"
          element={
            <RequireAuth>
              <Careers />
            </RequireAuth>
          }
        />
        <Route
          path="posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
