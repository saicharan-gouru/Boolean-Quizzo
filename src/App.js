import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage, CategoriesPage, RulesPage, Quiz} from './pages';
import {Navbar,Footer} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/rules" element={<RulesPage/>} />
        <Route path="/play" element={<Quiz/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
