import React,{useState} from "react";
import tryConvert from "../3. temperture convert/tryConvert";
import toCelsius from "../3. temperture convert/toCelsius";
import toFahrenheit from "../3. temperture convert/toFahrenheit";
import BoilingVerdict from "../1.CheckBoiling/BoilingVerdict";
import TemperatureInput2 from "./TemperatureInput2";

function Calculator3(props){
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = 
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = 
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput2
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={handleCelsiusChange}
                />
                <TemperatureInput2
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={handleFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
}

export default Calculator3;