import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserState from './context/user/userState';
import ChipState from './context/filter chips/chipState';
import NoteState from './context/notes/noteState';
import AlertState from './context/alert/alertState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AlertState>
    <UserState>
      <ChipState>
        <NoteState>
          <App />
        </NoteState>
      </ChipState>
    </UserState>
  </AlertState>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
