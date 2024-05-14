import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import '@sweetalert2/theme-dark/dark.css';

import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} /> 
          <Route path="register" element={<Register />} /> 
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
