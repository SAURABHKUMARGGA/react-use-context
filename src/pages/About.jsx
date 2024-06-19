import React,{useContext} from 'react'
import Data from '../Data'

function About() {
    const data = useContext(Data);
  return (
    <div>About {data}</div>
  )
}

export default About