import React, { useState } from "react";
import notlikedimg from "./assets/notliked.png"
import likedimg from "./assets/liked.png"

function Card(props) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(props.initialLikes);
  
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <a href={props.channelURL} target="_blank" rel="noopener noreferrer" className="youtubelinks">
      <div className="card">
        <img className="cardimg" src={props.imageurl} alt={props.title} />
        <h2 className="cardtitle">{props.title}</h2>
        <p className="carddetails">{props.content}</p>
        <div className="likeSection">
          <div className="rate">
              {liked  ? ( <img src={likedimg} className="thumbsup" onClick={(e) => {handleLike(); e.preventDefault();}} alt="Liked" /> ) 
                      : ( <img src={notlikedimg} className="thumbsup slightlyLarger" onClick={(e) => {handleLike(); e.preventDefault();}} alt="Not Liked" /> )}
          </div>
          <div className="noOfLikes">
              <p className="likes">&nbsp;{likes}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
