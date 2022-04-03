import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './pages';
import {Navbar,Footer} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
