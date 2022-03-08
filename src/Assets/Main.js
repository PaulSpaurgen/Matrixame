import React from 'react'
import './Main.css'
import { useState} from 'react'

export default function Main() {
    const [count, setCount] = useState(1)
    var   [prev]  = useState([])
    // var [ID,    setID]    = useState('0')
    const color = 'red'
      function setColour (ID){
        prev.push(ID)
        if (count > 2 ){
            const len = prev.length
            console.log(len)
            
            document.getElementById(prev[len-3]).style.backgroundColor = 'blue'
            document.getElementById(prev[len-3]).style.color = 'blue'
        }
        console.log(prev)
        document.getElementById(ID).style.backgroundColor = color
        document.getElementById(ID).style.color = color
      }
    
    return (
        <div className='main'>
        <div className='boxes'>
                <div className='box' id='1'
                onClick={() => {
                    setColour('1')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
                <div className='box' id='2'
                onClick={() => {
                    setColour('2')
                    setCount(count + 1)
                    console.log(count)
                  }}>2</div>
                <div className='box' id='3'
                onClick={() => {
                    setColour('3')
                    setCount(count + 1)
                    console.log(count)
                  }}>3</div>
                <div className='box' id='4'
                onClick={() => {
                    setColour('4')
                    setCount(count + 1)
                    console.log(count)
                  }}>4</div>
        </div>
        <div className='boxes'>
                <div className='box' id='5'
                onClick={() => {
                    setColour('5')
                    setCount(count + 1)
                    console.log(count)
                  }}>5</div>
                <div className='box' id='6'
                onClick={() => {
                    setColour('6')
                    setCount(count + 1)
                    console.log(count)
                  }}>6</div>
                <div className='box' id='7'
                onClick={() => {
                    setColour('7')
                    setCount(count + 1)
                    console.log(count)
                  }}>7</div>
                <div className='box' id='8'
                onClick={() => {
                    setColour('8')
                    setCount(count + 1)
                    console.log(count)
                  }}>8</div>
        </div>
        <div className='boxes'>
                <div className='box' id='9'
                onClick={() => {
                    setColour('9')
                    setCount(count + 1)
                    console.log(count)
                  }}>9</div>
                <div className='box' id='10'
                onClick={() => {
                    setColour('10')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
                <div className='box' id='11'
                onClick={() => {
                    setColour('11')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
                <div className='box' id='12'
                onClick={() => {
                    setColour('12')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
        </div>
        <div className='boxes'>
                <div className='box' id='13'
                onClick={() => {
                    setColour('13')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
                <div className='box' id='14'
                onClick={() => {
                    setColour('14')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
                <div className='box' id='15'
                onClick={() => {
                    setColour('15')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
                <div className='box' id='16'
                onClick={() => {
                    setColour('16')
                    setCount(count + 1)
                    console.log(count)
                  }}>1</div>
        </div>
    </div>
    )
}
