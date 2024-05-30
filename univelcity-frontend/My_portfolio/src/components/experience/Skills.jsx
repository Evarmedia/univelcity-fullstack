import React from 'react'
import { FaCheckDouble } from "react-icons/fa";

import './experience.css';

const Skills = ({skill}) => {
  return (
    <article className="experience__details">
        <FaCheckDouble className="experience__details-icon" />
        <h4>{skill}</h4>
    </article>
  )
}

export default Skills