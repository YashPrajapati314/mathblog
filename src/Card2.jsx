import React from "react";

function Card2(props) {
    return(
        <a href={props.webpagelink} target="_blank" rel="noopener noreferrer" className="youtubelinks">
            <div className="card2">
                <img className="card2img" src={props.imageurl} alt={props.title} />
                <h2 className="card2title">{props.title}</h2>
                <p className="card2details">{props.content}</p>
            </div>
        </a>
    )
}

export default Card2;