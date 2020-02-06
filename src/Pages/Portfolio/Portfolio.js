import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Portfolio.css';
import Projects from '../../utils/projects.json'
import Project from '../../Components/Project/Project'

export default function Portfolio(){
  return(
    <React.Fragment>
      <NavBar active="Portfolio"/>
      <div className="Portfolio">
        {Projects.map((o, index)=>{
          return <Project {...o} key={index}/>
        })}
      </div>
    </React.Fragment>
  )
};