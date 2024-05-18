import React from "react";

const Card = ({ image, title, text, learnmore }) => {
    return (
        <div>
            <div className="w-100 h-100">
                <img className="img-fluid w-100 my-2" src={image} alt="" />
            </div>

            <h1 className="mt-3 fs-3 fw-bold">{title}</h1>
            <p className="mt-4 my-2">{text}</p>
            <p className="fs-5 mt-5">{learnmore}</p>
        </div>
    );
};

export default Card;