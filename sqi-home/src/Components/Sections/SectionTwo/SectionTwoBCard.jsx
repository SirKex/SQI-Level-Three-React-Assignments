import React from "react";

const SectionTwoBCard = ({ pOne, pTwo, pThree, pFour, pFive, pSix }) => {
    return (
        <div>
            <p style={{ borderBottom: "1px solid lightblue"}}>
                <span className="fs-5">Duration:</span> { pOne }</p>
            <p style={{borderBottom: "1px solid lightblue"}}>
                <span className="fs-5">Certificate:</span> { pTwo }</p>
            <p style={{borderBottom: "1px solid lightblue"}}>
                <span className="fs-5">Skills:</span> { pThree }</p>
            <p style={{borderBottom: "1px solid lightblue"}}>
                <span className="fs-5">Entry Requirements:</span> { pFour }</p>
            <p style={{borderBottom: "1px solid lightblue"}}>
                <span className="fs-5">Required Hardware:</span> { pFive }</p>
            <p style={{borderBottom: "1px solid lightblue"}}>
                <span className="fs-5">Direct Entry:</span> { pSix }</p>
            <p><span className="fs-5">Access to Alumni Network and Opportunities:</span> Yes.</p>
        </div>
    );
};

export default SectionTwoBCard