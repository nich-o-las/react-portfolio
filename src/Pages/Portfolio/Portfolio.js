import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Portfolio.css';
import Projects from '../../utils/projects.json'
import Project from '../../Components/Project/Project'

export default function Portfolio(){
  return(
    <React.Fragment>
      <NavBar active="Portfolio"/>
      <p className="Portfolio-descriptor">These are just a few of my projects. You can view more on <a target="_blank" href="https://github.com/nich-o-las"><i className="fa fa-github"></i>my Github profile<i className="fa fa-github"></i></a>.</p>
      <div className="Portfolio">
        {Projects.map((o, index)=>{
          return <Project {...o} key={index}/>
        })}
      </div>
    </React.Fragment>
  )
};