import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmButton from './chapter_08/ConfirmButton';
// import AccommodateString from './chapter_07/AccommodateString';


import './index.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <React.StrictMode>
      <ConfirmButton/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <AccommodateString/>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//   <React.StrictMode>
//     {/* 실행시 렌더링 하는 부분  */}
//     < Clock/>
//   </React.StrictMode>
// );


// setInterval(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();