import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function YouTubeChan() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/youtubechannels');
        console.log(response.data);
        setChannels(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally handle error here, e.g., display an error message
      }
    }

    fetchData();
  }, []); // Empty dependency array, so this effect runs only once

  return (
    <div className="youtubechannels">
      <h2>Math Content Creators on YouTube</h2>
      {channels.map(channel => (
        <Card
          key={channel._id}
          imageurl={channel.imageurl}
          title={channel.title}
          content={channel.content}
          channelURL={channel.channelURL}
          initialLikes={channel.initialLikes}
        />
      ))}
    </div>
  );
}

export default YouTubeChan;


/*------------------------*/


// import React from "react";
// import Card from "./Card";
// import img3b1b from './assets/3b1b.jpg'
// import bprp from './assets/blackpenredpen.webp'
// import drpy from './assets/drpeyam.jpg'
// import tibs from './assets/tibees.jpeg'
// import stump from './assets/standupmaths.jpg'
// import morph from './assets/channels4_profile.jpg'
// import vc from './assets/maxresdefault.jpg'
// import michpenn from './assets/michaelpenn.jpg'
// import trefbaz from './assets/trefbaz.jpg'

// function YouTubeChan() {
//     return(
//         <div className="youtubechannels">
//             <h2>Math Content Creators on YouTube</h2>
//             <Card 
//                 imageurl={img3b1b}
//                 title="3Blue1Brown"
//                 content="One of the finest math educators and animators in the world. It's time to reinvent math while visualizing it!" 
//                 channelURL="https://www.youtube.com/c/3blue1brown"
//                 initialLikes={248}
//             />
//             <Card 
//                 imageurl={bprp}
//                 title="blackpenredpen"
//                 content="Scared to solve problems? Let this channel guide you with a whole new perspective!"
//                 channelURL="https://www.youtube.com/@blackpenredpen"
//                 initialLikes={130}
//             />
//             <Card 
//                 imageurl={drpy}
//                 title="Dr Peyam"
//                 content="Solve weird equations with this ultra enthusiastic guy!" 
//                 channelURL="https://www.youtube.com/@drpeyam"
//                 initialLikes={40}
//             />
//             <Card 
//                 imageurl={tibs}
//                 title="Tibees"
//                 content="Stories in science, math in the woods and more!" 
//                 channelURL="https://www.youtube.com/@tibees"
//                 initialLikes={129}
//             />
//             <Card 
//                 imageurl={stump}
//                 title="Stand-up Maths"
//                 content="The kind of person to answer your math shower thoughts..." 
//                 channelURL="https://www.youtube.com/@standupmaths"
//                 initialLikes={150}
//             />
//             <Card 
//                 imageurl={morph}
//                 title="Morphocular"
//                 content="Learn about the math you have never thought about!" 
//                 channelURL="https://www.youtube.com/@morphocular"
//                 initialLikes={98}
//             />
//             <Card 
//                 imageurl={vc}
//                 title="vcubingx"
//                 content="Quench your thirst of scarce 3Blue1Brown content through this awesome channel"
//                 channelURL="https://www.youtube.com/@vcubingx"
//                 initialLikes={45} 
//             />
//             <Card 
//                 imageurl={michpenn}
//                 title="Michael Penn"
//                 content="Dive into a world of solving challenging problems through various realms of maths!" 
//                 channelURL="https://www.youtube.com/@MichaelPennMath"
//                 initialLikes={120}
//             />
//             <Card 
//                 imageurl={trefbaz}
//                 title="Dr Trefor Bazett"
//                 content="Learn various different fields of math, LaTex and a lot of other cool things" 
//                 channelURL="https://www.youtube.com/@DrTrefor"
//                 initialLikes={60}
//             />
//         </div>
//     );
// }

// export default YouTubeChan;
