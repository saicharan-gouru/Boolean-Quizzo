import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QuestionsProvider, CurrentQuestionContextProvider} from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionsProvider>
        <CurrentQuestionContextProvider>
          <App />
        </CurrentQuestionContextProvider>
      </QuestionsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


