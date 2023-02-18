import React from "react";
import './style/SlideShow.css'

const SlideShow = ({ list }) => (
        <div className="popular">
            <h2>Most Popular Movies</h2>
            <div className="slider">
                <div className="slides">
                    <div className="slide">
                        {list.map(item=><img src={item.poster} alt={item.title} key={item.id} /> )}
                    </div>
                </div>
            </div>
        </div>
);

export default SlideShow;
