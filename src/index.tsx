import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QuestionsProvider} from "./contexts";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionsProvider>
          <App />
      </QuestionsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


