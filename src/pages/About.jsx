import React from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { useOutletContext } from 'react-router-dom';
function About() {
    const data = useOutletContext();
  return (
    <>
    {console.log(import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY)}
      <APIProvider apiKey={import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY }>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider>
    </>
  )
}

export default About