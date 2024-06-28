import React from 'react'
import store from '../store'
function Home() {
  return (
    <>
    {store.subscribe(() => console.log(store.getState()))}
      Home
    </>
  )
}

export default Home