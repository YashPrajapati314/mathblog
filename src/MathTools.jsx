import React from "react";
import Card2 from "./Card2";
import wa from "./assets/Wolfram-Alpha.webp"
import desmos from "./assets/desmos.jpg"
import intsolve from "./assets/intsolve.png"

function MathTools() {
    return(
        <div className="mathtools">
            <h2>Useful tools to help learn mathematics</h2>
            <Card2
                imageurl={wa}
                title="Wolfram Alpha"
                content="The most powerful tool for mathematical and scientific computation and searching for data" 
                webpagelink="https://www.wolframalpha.com/"
            />
            <Card2
                imageurl={desmos}
                title="Desmos"
                content="Explore endless possibilites graphing any imaginable equation and more!" 
                webpagelink="https://www.desmos.com/"
            />
            <Card2
                imageurl={intsolve}
                title="Integral Solver with Steps"
                content="Stuck on a challenging integral problem? This website which took more than 17000 lines of code can help you walk your way out!" 
                webpagelink="https://www.integral-calculator.com/"
            />
        </div>
    );
}

export default MathTools;