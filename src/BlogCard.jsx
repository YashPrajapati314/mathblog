import React, { useState } from "react";
import { Link } from "react-router-dom";
import notlovedimg from "./assets/heartwhitefinal.png"
import lovedimg from "./assets/loved.png"

function BlogCard(props) {
  const [loved, setLoved] = useState(false);
  const [loves, setLoves] = useState(props.initialloves);
  
  const handleLove = () => {
    setLoved(!loved);
    setLoves(loved ? loves - 1 : loves + 1);
  };

  const cardStyle = {
    backgroundImage: `url(${props.imageurl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <Link to={props.blogpagelink} className="blogpages">
      <div className="BlogCard" style={cardStyle}>
        <h2 className="BlogCardtitle">{props.title}</h2>
        <div className="loveSection">
          <div className="rate">
              {loved  ? ( <img src={lovedimg} className="heart slightlySmaller" onClick={(e) => {handleLove(); e.preventDefault();}} alt="loved" /> ) 
                      : ( <img src={notlovedimg} className="heart" onClick={(e) => {handleLove(); e.preventDefault();}} alt="Not loved" /> )}
          </div>
          <div className="noOfloves">
              <p className="loves">&nbsp;{loves}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
