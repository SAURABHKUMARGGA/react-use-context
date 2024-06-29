import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incby, changeName, decrement, increment } from '../store';
import { Cart4 } from 'react-bootstrap-icons';
import { useState } from 'react';
import axios from 'axios';
function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state)=>{
    // console.log(state);
    // debugger;
   return state.counter.value
  })
  const incb = useSelector((state)=>state.incbyby);
  const [incbyval, setincbyval] = useState(0);
  const [name,setName] = useState(" ");
  const [cart,setCart]= useState();
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((response)=>{
      console.log(response.data);
      setCart(response.data);
    })
  },[])
  return (
    <>

      Home
      {count}
      {/* {console.log(dispatch)} */}
      <button onClick={()=>{dispatch(increment())}}>increase</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrease</button>
      Old value: <div>{ incb.value }</div>
      <div>
        increaseBy : <input value={incbyval} onChange={(e)=>setincbyval(e.target.value)}/><button onClick={()=>{dispatch(incby(Number(incbyval)||0))}}>inc By</button>
      </div>
      Old Name: <div>{incb.data.name}</div>
      <div>
        new Name : <input value={name} onChange={(e)=>setName(e.target.value)}/><button onClick={()=>{dispatch(changeName(String(name)))}}>change</button>
      </div>

      <div className="cart">
            <div className="container">
              <div className="row">
                {cart && cart.map((element)=>{
                  return (
                    <div className="col-md-3 col-sm-12" key={element.id}>
                        <img src={element.image} alt={element.title} style={{height:"350px",width:"100%",}}/>
                        <h2>{(element.title).slice(0,20)}</h2>
                        <p>{(element.description).slice(0,90)}</p>
                          <div>price: <span className='text-danger'>RS. {element.price} /- only</span></div>
                        <div className='d-flex justify-content-between'>
                          <button className='btn btn-sm btn-danger'>Buy</button>
                          <button className='btn btn-sm btn-outline-success bg-black'>Cart <Cart4 color='red' size={26}/></button>
                        </div>
                    </div>
                  )
                })}
              </div>
            </div>
      </div>



    </>
  )
}

export default Home