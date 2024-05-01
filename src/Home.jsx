import React from "react";
import MainContent from "./MainContent";
import YouTubeChan from "./YouTubeChan";
import MathTools from "./MathTools";

function Home() {
    return(
        <div className="home">
            <MainContent />
            <div className="content">
                <div className="leftsection">
                    <YouTubeChan />
                </div>
                <div className="rightsection">
                    <MathTools />
                </div>
            </div>
        </div>
    );
}

export default Home;