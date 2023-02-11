import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/cards/Cards";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Cards />
    </div>
  );
}

export default App;
