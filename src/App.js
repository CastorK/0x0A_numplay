import React, { useState, useEffect } from 'react';
import './App.css';

import pic10 from './img/10.png'
import pic11 from './img/11.png'
import pic12 from './img/12.png'
import pic13 from './img/13.png'
import pic14 from './img/14.png'
import pic15 from './img/15.png'
import pic16 from './img/16.png'
import pic17 from './img/17.png'
import pic18 from './img/18.png'
import pic19 from './img/19.png'
import pic110 from './img/110.png'
import pic111 from './img/111.png'
import pic112 from './img/112.png'
import pic113 from './img/113.png'
import pic114 from './img/114.png'
import pic115 from './img/115.png'
import pic116 from './img/116.png'
import pic117 from './img/117.png'
import pic1loss from './img/1loss.png'

import pic20 from './img/20.png'
import pic21 from './img/21.png'
import pic22 from './img/22.png'
import pic23 from './img/23.png'
import pic24 from './img/24.png'
import pic25 from './img/25.png'
import pic26 from './img/26.png'
import pic27 from './img/27.png'
import pic28 from './img/28.png'
import pic29 from './img/29.png'
import pic210 from './img/210.png'
import pic211 from './img/211.png'
import pic212 from './img/212.png'
import pic213 from './img/213.png'
import pic214 from './img/214.png'
import pic215 from './img/215.png'
import pic216 from './img/216.png'
import pic217 from './img/217.png'
import pic2loss from './img/2loss.png'


const App = () => {
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)

  const style1 = (i) => { return {display: (one === i && two !== 17) ? 'block' : 'none'} }
  const style2 = (i) => { return {display: (two === i && one !== 17) ? 'block' : 'none'} }

  const escFunction = (event) => {
    switch (event.keyCode) {
      case 68: // D
      case 103: // Numpad7
        if (two !== 17) {
          if (one < 17) {
            console.log("Left up: " + (one+1))
            setOne(one+1)
          }
        }
        break
      case 65: // A
      case 97: // Numpad1
        if (two !== 17) {
          if (one > 0) {
            console.log("Left down: " + (one-1))
            setOne(one-1)
          }
        }
        break
      case 39: // rightarrow
      case 105: // Numpad9
        if (one !== 17) {
          if (two < 17) {
            console.log("Right up: " + (two+1))
            setTwo(two+1)
          }
        }
        break
      case 37: // leftarrow
      case 99: // Numpad3
        if (one !== 17) {
          if (two > 0) {
            console.log("Right down: " + (two-1))
            setTwo(two-1)
          }
        }
        break
      default:
        break
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", escFunction)

    return function cleanup() {
      document.removeEventListener("keydown", escFunction)
    }
  })

  return (
    <div className="App">
      <img className="pic1" src={pic10} style={style1(0)} alt="10" />
      <img className="pic1" src={pic11} style={style1(1)} alt="11" />
      <img className="pic1" src={pic12} style={style1(2)} alt="12" />
      <img className="pic1" src={pic13} style={style1(3)} alt="13" />
      <img className="pic1" src={pic14} style={style1(4)} alt="14" />
      <img className="pic1" src={pic15} style={style1(5)} alt="15" />
      <img className="pic1" src={pic16} style={style1(6)} alt="16" />
      <img className="pic1" src={pic17} style={style1(7)} alt="17" />
      <img className="pic1" src={pic18} style={style1(8)} alt="18" />
      <img className="pic1" src={pic19} style={style1(9)} alt="19" />
      <img className="pic1" src={pic110} style={style1(10)} alt="110" />
      <img className="pic1" src={pic111} style={style1(11)} alt="111" />
      <img className="pic1" src={pic112} style={style1(12)} alt="112" />
      <img className="pic1" src={pic113} style={style1(13)} alt="113" />
      <img className="pic1" src={pic114} style={style1(14)} alt="114" />
      <img className="pic1" src={pic115} style={style1(15)} alt="115" />
      <img className="pic1" src={pic116} style={style1(16)} alt="116" />
      <img className="pic1" src={pic117} style={style1(17)} alt="117" />
      <img className="pic1" src={pic1loss} style={{display: (two === 17) ? 'block' : 'none'}} alt="1loss" />

      <img className="pic2" src={pic20} style={style2(0)} alt="20" />
      <img className="pic2" src={pic21} style={style2(1)} alt="21" />
      <img className="pic2" src={pic22} style={style2(2)} alt="22" />
      <img className="pic2" src={pic23} style={style2(3)} alt="23" />
      <img className="pic2" src={pic24} style={style2(4)} alt="24" />
      <img className="pic2" src={pic25} style={style2(5)} alt="25" />
      <img className="pic2" src={pic26} style={style2(6)} alt="26" />
      <img className="pic2" src={pic27} style={style2(7)} alt="27" />
      <img className="pic2" src={pic28} style={style2(8)} alt="28" />
      <img className="pic2" src={pic29} style={style2(9)} alt="29" />
      <img className="pic2" src={pic210} style={style2(10)} alt="210" />
      <img className="pic2" src={pic211} style={style2(11)} alt="211" />
      <img className="pic2" src={pic212} style={style2(12)} alt="212" />
      <img className="pic2" src={pic213} style={style2(13)} alt="213" />
      <img className="pic2" src={pic214} style={style2(14)} alt="214" />
      <img className="pic2" src={pic215} style={style2(15)} alt="215" />
      <img className="pic2" src={pic216} style={style2(16)} alt="216" />
      <img className="pic2" src={pic217} style={style2(17)} alt="217" />
      <img className="pic2" src={pic2loss} style={{display: (one === 17) ? 'block' : 'none'}} alt="2loss" />
    </div>
  );
}

export default App;
