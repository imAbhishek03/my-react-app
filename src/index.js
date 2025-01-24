import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import './index.css';
// import './hoc-auth/styles/App.css';
// import App from './hoc-auth/App';



import App from './hoc-user/App';
import './hoc-user/styles/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* for auth hoc */}
    {/* <App /> */}



    {/* for User hoc */}
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
