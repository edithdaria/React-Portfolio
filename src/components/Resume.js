import React from "react";
import "../css/resume.css";
import resumePdf from "../assets.css/Edith-Resume.pdf";

const Resume = () => {
    // style="padding: 20px ;"

    return (

        <div className="resume container">
        <iframe src={resumePdf} type="application/pdf">
            Your browser doesn't support iFrames.
        </iframe>
        </div>

    )

}

export default Resume;