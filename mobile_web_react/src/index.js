import React from 'react';
import ReactDOM from 'react-dom';
import ProfileCard from './chapter_13/5. Card Component/ProfileCard';

import './index.css';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
      <ProfileCard/>
    </React.StrictMode>,
    document.getElementById('root')
  );

// Input Null Value

// ReactDOM.render( <input value={h1}/>, rootNode);

// setTimeout(function(){
//   ReactDOM.render(<input value={null} />, rootNode);
// }, 1000);
  
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//   <React.StrictMode>
//     {/* 실행시 렌더링 하는 부분  */}
//     < Clock/>
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();