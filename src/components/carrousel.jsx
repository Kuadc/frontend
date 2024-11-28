import React, { useEffect, useRef, useState } from 'react'
import "./carrousel.css"

import {data} from "../assets/data"

export default function carrousel() {
    const listRef = useRef()
    const [currentImg, setcurrentImg] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setcurrentImg((prev) => (prev + 1) % data.length);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval);
      }, []);

  return (
    <>
    
        <div className='div-image'>
            <ul className='columna' ref={listRef} style={{
            transform: `translateX(-${currentImg * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
            }}>
                {
                data.map((item)=>{
                    return <li className="centerli" key={item.id}> 
                    <img src={item.imgUrl} alt="" />
                    </li>
                })}
            </ul>
        </div>
        <div className='Botones-carrousel'>
            
            <svg  className="botonsvg" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#535bf2" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
            <svg  className="botonsvg" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#535bf2" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
            <svg  className="botonsvg" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#535bf2" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path></svg>
        </div>
        
    
    </>

  )
}
