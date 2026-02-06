import "./App.css";
import AuthScreen from "../src/pages/Auth/AuthScreen";
import HomeScreen from "../src/pages/Home/HomeScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthScreen />} />
      <Route path="/home" element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
