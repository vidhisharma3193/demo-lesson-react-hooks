import React, { useState } from 'react';

function Counter(){

    // console.log(useState(10)) Returns a stateful value, and a function to update it
    const [count, setCount] = useState(0)

    // Array destructuring
    // const count = useState(0)[0]
    // const setCount = useState(0)[1]

    const [num, changeNum] = useState(10)

    // const [changeNum, num] = useState(10) now changeNum is state and num is function to change changeNum value


    return(
        <div>
            <h4>
                Current Count: {count}
            </h4>
            <button 
            className="ui teal button" 
            onClick={() => setCount( count + 1)} >
                Increment Counter
            </button>
        </div>)
}

// class Counter extends React.Component{

//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }

//     incrementCounter = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render(){
//         return(
//         <div>
//             <h4>
//                 Current Count: {this.state.count}
//             </h4>
//             <button 
//             className="ui teal button" 
//             onClick={() => this.incrementCounter()} >
//                 Increment Counter
//             </button>
//         </div>)
//     }

// }

export default Counter