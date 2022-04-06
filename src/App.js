import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage, CategoriesPage, RulesPage} from './pages';
import {Navbar,Footer} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
        <Route path="/rules" element={<RulesPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
