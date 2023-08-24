import React, { useEffect } from 'react'
import { gsap } from 'gsap'
const index = () => {
    useEffect(()=>{
const timeLine = gsap.timeline()
timeLine.to(".element",{
    y:200,
    duration:2,
    delay:0.3,
})
    },[])
  return (
    <div>
        <div className='element h-[100px] w-[100px] rounded-full bg-amber-400'>
         
        </div>
    </div>
  )
}

export default index