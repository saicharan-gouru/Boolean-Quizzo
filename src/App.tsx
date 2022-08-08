import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage, CategoriesPage, RulesPage, Quiz, Results} from './pages';
import {Navbar,Footer,ScrollToTop} from "./components";
import React from 'react'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/categories" element={<CategoriesPage/>} />
          <Route path="/rules" element={<RulesPage/>} />
          <Route path="/play" element={<Quiz/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
