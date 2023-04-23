import React from 'react'
import {SectionWrapper} from "../hoc/";
import {technologies} from "../constants/index.js";
import {BallCanvas} from "./canvas/index.js";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
    )
}

export default SectionWrapper(Tech, "")