import { useState } from "react";

function Counter(){
        let [value,setValue] = useState(0);
        let Increment = () => {
            setValue( prevValue => prevValue+1);
        };
        let Decrement = () => {
            setValue( prevValue => prevValue-1 );
        };
        let Clicked = (e) => {
            let inputVal = parseInt(e.target.value,10);
            if (!isNaN(inputVal)){
                setValue(inputVal);
            }
        };
    return (

        <div>
      <input
        type="text"
        value={value}
        onChange={Clicked}
      />
      <div>
        <button onClick={Decrement} >
          Decrement
        </button>
        <button onClick={Increment}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;

