import React,{useContext} from 'react'

import { useOutletContext } from 'react-router-dom';
function About() {
    const data = useOutletContext();
  return (
    <div>About {data.name}</div>
  )
}

export default About