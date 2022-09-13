import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter_03/ch.3 ex pure js/Library';
// import Restaurant from './chapter_03/ch.3 ex_restaurant/Restaurant';
import Clock from './chapter_04/Clock';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* 실행시 렌더링 하는 부분  */}
//     < Clock/>
//   </React.StrictMode>
// );

setInterval (()=>{
  ReactDOM.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>,
    document.getElementById('root')
    );
},1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();