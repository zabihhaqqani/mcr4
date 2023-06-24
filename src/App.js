import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing';
import Page from './pages/page';
import NavBar from './pages/navbar';

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comments" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
