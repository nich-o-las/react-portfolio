import React from 'react'
import './Project.css'

export default function Project({title, github, deployed, image, tools}){
  return(
    <div className="Project">
      <div className="Project-info">
        <h3>{title}</h3>
        <div className="Project-links">
          <a target="blank" href={github}><i className="fa fa-github"></i>Github</a>
          <a target="blank" href={deployed}><i className="fa fa-link"></i>Deployed Application</a>
        </div>
      </div>
      <img alt={title} src={image} />
      <div className="Project-tools">
        <p><b>Tools used: </b>{tools}</p>
      </div>
    </div>
  )
}