import React from "react";
import BlogCard from "./BlogCard";
import gp from "./assets/geompattern.png";
import tp from "./assets/trigpic.jpg";
import fp from "./assets/FourierOfPi.webp";

function Blog() {
    return(
        <>
            <h1 className="atitle">The Blog</h1>
            <div className="blogdiv">
                <div className="blog">
                    <BlogCard 
                    imageurl={tp}
                    title="A Trigonometric Paradigm"
                    blogpagelink="/TrigonometryBlog"
                    initialloves={200}
                    />
                </div>
                <div className="blog">
                    <BlogCard 
                    imageurl={gp}
                    title="Visualizing Geometry and finding hidden patterns in math"
                    blogpagelink="/GeometryBlog"
                    initialloves={180}
                    />
                </div>
                <div className="blog">
                    <BlogCard 
                    imageurl={fp}
                    title="A Visual Introduction to Fourier Series"
                    blogpagelink="/FourierBlog"
                    initialloves={350}
                    />
                </div>
            </div>
        </>
    );
}

export default Blog;