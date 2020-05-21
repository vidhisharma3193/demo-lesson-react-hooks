import React from 'react';

export default class Counter extends React.Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
        <div>
            <h4>
                Current Count: {this.state.count}
            </h4>
            <button 
            className="ui teal button" 
            onClick={() => this.incrementCounter()} >
                Increment Counter
            </button>
        </div>)
    }

}




// function Counter(){


//     return(
//         <div>
//             <h4>
//                 Current Count: {}
//             </h4>
//             <button 
//             className="ui teal button" 
//             onClick={() => console.log("Change count")} >
//                 Increment Counter
//             </button>
//         </div>)
// }

// export default Counter