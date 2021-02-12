import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [num1,setNumber1]=useState();//Destructin the array concept use one value num1 is used to store past value and other is stored to recent value  
  const[num2,setNumber2]=useState();
  const[total,settotal]=useState(num1 + num2);
  function calculateSum() 
    { 
      if(num1==0&&num2==0)

      alert("Your value is Zero");
      else
     settotal(num1 + num2);

    }
    function calculateSub() 
    {  if(num1<num2)
       alert("Cannot subtract the value");
       else
     settotal(num1 - num2);
    }

   function calculateMul() 
    {
     settotal(num1 * num2);
    }
    function calaculateDiv() 
    {  if(num1==0||num2==0)
         alert("Undefind cannot divide by zero");
         else
     settotal(num1 / num2);
    }
    
   


  return (
    <>
    <h1  className="cal"> Calculator</h1>
    <div className="div">
      <p1 className="p1">Enter the Value: </p1>
      <input type="text"onChange={e => setNumber1(+e.target.value)}/*use to store the value in in setnumber1 which is we are geeting from input text  */ value={num1} placeholder="Enter the values"/><br></br>
      <p1 className="p1">Enter the Value: </p1>
      <input type="text"onChange={e => setNumber2(+e.target.value)} value={num2} placeholder="Enter the second values"/><br></br>
      <p1 className="p1">Result: </p1>
      <input type="number" value={total} placeholder="Result"/><br></br>
      <button className="button"  onClick={calculateSum}>Sum</button> 
      <button className="button button2"   onClick={calculateSub}>Sub</button>
      <button className="button button3"  onClick={calculateMul}>Multiply</button>
      <button className="button button4"  onClick={calaculateDiv}>Divide</button>
    </div>
</>
  );
}

export default App;
