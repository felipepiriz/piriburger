import React from "react";
import ButtonCustom from "../button.js/button.jsx";


const Sumador = ({number}) => {
    
    const [inputValue, setInputValue] = React.useState(number);

    const handleClick =()=>{
        setInputValue (parseInt(inputValue) + 1)
        
    }
    const handleValue = (event) => {
        setInputValue(event.target.value);
    }


    return (
        <div style={{ display:"flex", flexDirection:"column",gap:5, marginTop:25  ,marginRight:50, justifyContent:'start', textAlign:'center' }}>
            <ButtonCustom label={"SUMAR"} number={0} handleClick={handleClick}  />
            <input value={inputValue} onChange={handleValue} type="number" style={{width:30,marginLeft:35}} />
        </div>
    )
}

export default Sumador