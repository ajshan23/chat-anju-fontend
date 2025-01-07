
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/PublicPages/Register";
import Login from "./pages/PublicPages/Login";
import Home from "./pages/PrivatePages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />

      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
