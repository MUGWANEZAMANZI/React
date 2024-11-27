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
//console.log(value)
    return (

        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        className="bg-gray-500 "
        type="text"
        value={value}
        onChange={Clicked}
        style={{ width: "60px", textAlign: "center", fontSize: "18px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <button className="bg-yellow-500 px-3 py-[6px] active:scale-95 text-base font-medium rounded-md mr-10" onClick={Decrement} >
          Decrement
        </button>
        <button className="bg-green-500 px-4 py-[6px] active:scale-95 text-base font-medium rounded-md" onClick={Increment}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;

