import React from "react";

function MainContent() {
    return(
        <>
            {/* <div className="main-title"></div> */}
            <h1 className="atitle">The Ultimate Guide to Mathematics</h1>
            <div className="intro">
                <div className="introleft">
                    <h2 className="introtitle">A step by step comprehensive guide to learn and understand mathematics from the internet</h2>
                    <div className="introlefttext">
                        <p className="introlefttextpara">Math can be a challenging thing to learn for many individuals, especially when people
                            don't enjoy it or don't understand what they are doing... At Anastasia, we are here to 
                            create an enjoyable environment and make learning math a mesmerizing experience, by helping others understand
                            its application and beauty, the art of math can truly be revealed to be appreciated by everyone
                        </p>
                    </div>
                    <div className="introleftbutton">
                        <button id="learnmore">Learn More</button>
                    </div>
                </div>
                <div className="introright">
                    <div className="introrighttext">
                        <p className="introrighttextpara">
                            The aim of this website is to help math enthusiasts reach where they want. We analyse sources throughout the
                            internet and help aspiring learners find the handpicked works of art created by phenomenal geniuses.
                            These generous individuals and organizations have made their content freely available and inspired millions to be able to
                            comprehend this field of science which has become the inception of everything else humans have made possible
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;