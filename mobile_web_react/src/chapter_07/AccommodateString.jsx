import React, { useState, useEffect } from "react";
import Info from "./Info";
 
export default AccommodateString;

function printName()  {  
  const name = document.getElementById('name').value;  
  // document.getElementById("result").innerText = name;
  return name
}

function printNick()  {  
  const nick = document.getElementById('nick').value;  
  // document.getElementById("result").innerText = nick;
  return nick
}

function AccommodateString(props) {
      
      const [count, increaseCount, decreaseCount] = Info('');
  
      useEffect(() => {
        console.log("========================");
        console.log("useEffect() is called");
        console.log(`렌더링이 완료되었습니다: `);
      });
      
      useEffect(() => {
        console.log(`Current count value: ${count}`);
      }, [count]);

      useEffect(() => {


      })
  
      return (
          <div>
              이름<input id="name" onkeyup="printName()"  />
              별명<input id="nick" onkeyup="printNick()"/>
              <p>이름: {printName()}</p>
              <p>별명: {printNick()}</p>
          </div>
          
      );
  }

//

<input 
  type="text"
  name=