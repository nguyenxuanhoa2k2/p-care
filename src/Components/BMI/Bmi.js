import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';



function BMI(){
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');
    const [bmi, setBMI] = useState('');
  
    function calculateBMI() {
      const h = height / 100;
      const bmi = weight / (h * h);
  
     
  
      if (bmi < 17) {
        setMessage('Thiếu cân trầm trọng. ')
        setBMI('Chỉ số BMI của bạn là ' + bmi.toFixed(2));
      } else
      
      if (bmi >= 17 && bmi < 18.5) {
        setMessage('Cân nặng thấp (gầy) ')
        setBMI('Chỉ số BMI của bạn là ' + bmi.toFixed(2));
      } else
  
      if (bmi >= 18.5 && bmi < 25) {
        setMessage('Bình thường. ')
        setBMI('Chỉ số BMI của bạn là ' + bmi.toFixed(2));
      } else
      
      if (bmi >= 25 && bmi < 30) {
        setMessage('Thừa cân. ')
        setBMI('Chỉ số BMI của bạn là ' + bmi.toFixed(2));
      } else
      
      if (bmi >= 30 && bmi < 35) {
        setMessage('Béo phì độ I. ')
        setBMI('Chỉ số BMI của bạn là ' + bmi.toFixed(2));
      } else
  
      if (bmi >= 35 && bmi < 40) {
        setMessage('Béo phì độ II. ')
        setBMI('Chỉ số BMI của bạn là ' + bmi.toFixed(2));
      } else
  
      if (bmi >= 40) {
        setMessage('Béo phì độ III. ')
        setBMI('Chỉ số BMI của bạn là ' + bmi.toFixed(2));
      }
    }
  
    return(
    <div> <Navbar></Navbar>

      <div className="app">
        <h1>BMI Calculator</h1>
        <span>Chỉ số BMI còn được gọi là chỉ số khối lượng cơ thể (Body Mass Index).<br></br> Dựa vào chỉ số BMI của một người có thể biết được người đó béo, gầy hay có cân nặng lý tưởng </span>
        
        <div className="area-input">
          <input
            value={weight}
            type="text"
            placeholder="Cân Nặng (kg)"
            onChange={ (e) => setWeight(e.target.value)}
          />
  
          <input
            value={height}
            type="text"
            placeholder="Chiều Cao (cm)"
            onChange={ (e) => setHeight(e.target.value)}
          />
          <button onClick={calculateBMI}>
            Tính Toán
          </button>
  
        </div>
        <h2> {message} {bmi} </h2>
      </div>
    </div>  
    )
  }

  export default BMI