import React from "react";

function Toggle() {
    const [isOn, setIsOn] = useState(true);

    function handleClick() {
        setIsOn((isOn) => !isOn);
    }

    export default Toggle;