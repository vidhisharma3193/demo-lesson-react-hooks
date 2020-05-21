import React, {useState} from 'react';

function Task(){

    const [amount, changeAmount] = useState(100)

    return(  
    <div>
        <h4>
            Current amount: {amount}
        </h4>
        <button 
        className="ui teal button" 
        onClick={() => changeAmount( amount - 5 )}>
            Spend
        </button>
    </div>)
}

export default Task
