import React from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(true);

    function handleClick() {
        setIsOn((isOn) => !isOn);
    }
    const color = isOn ? "red" : "white";
    const status = isOn ? "ON" : "OFF"
    return <button style = {
        { background: color } }
    onClick = { handleClick } > { status } < /button>;
}

export default Toggle;